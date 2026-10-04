const { app, BrowserWindow, dialog, Menu, protocol, session } = require('electron');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { ORIGIN, createHandler, isLocalURL, isAllowedRequest } = require('./content.cjs');
const smoke = process.argv.includes('--smoke-test');
const reportIndex = process.argv.indexOf('--report');
const reportPath = reportIndex >= 0 ? path.resolve(process.argv[reportIndex + 1]) : null;
let smokeProfile;
if (smoke) {
  if (!reportPath) throw new Error('--smoke-test requires --report <path>');
  smokeProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'deltarunesim-test-'));
  app.setPath('userData', smokeProfile);
  app.disableHardwareAcceleration();
}
protocol.registerSchemesAsPrivileged([{ scheme: 'sim', privileges: {
  standard: true, secure: true, supportFetchAPI: true, stream: true, corsEnabled: true
}}]);
app.setAppUserModelId('com.sakuugamerytb.deltarunesim');
const locked = app.requestSingleInstanceLock();
let window;
if (!locked) app.quit();
else {
  app.on('second-instance', () => { if (window) { if (window.isMinimized()) window.restore(); window.focus(); } });
  app.on('window-all-closed', () => app.quit());
  app.whenReady().then(async () => {
    const base = app.isPackaged ? process.resourcesPath : path.resolve(__dirname, '..');
    const ses = session.defaultSession;
    const blocked = [];
    const errors = [];
    ses.protocol.handle('sim', createHandler(base));
    ses.webRequest.onBeforeRequest((details, callback) => {
      const cancel = !isAllowedRequest(details.url);
      if (cancel) blocked.push(details.url);
      callback({ cancel });
    });
    ses.setPermissionRequestHandler((_contents, _permission, callback) => callback(false));
    ses.setPermissionCheckHandler(() => false);
    Menu.setApplicationMenu(null);
    window = new BrowserWindow({
      width: 1280, height: 900, minWidth: 640, minHeight: 540,
      title: 'DELTARUNE Fight Simulator', backgroundColor: '#000000', show: true,
      autoHideMenuBar: true,
      webPreferences: { nodeIntegration: false, contextIsolation: true, sandbox: true,
        webSecurity: true, backgroundThrottling: false, autoplayPolicy: 'no-user-gesture-required' }
    });
    window.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
    window.webContents.on('will-navigate', event => { if (!isLocalURL(event.url)) event.preventDefault(); });
    window.webContents.on('will-redirect', event => { if (!isLocalURL(event.url)) event.preventDefault(); });
    window.webContents.on('page-title-updated', event => event.preventDefault());
    window.webContents.on('console-message', details => {
      if (details.level === 'error') errors.push(details.message);
    });
    window.webContents.on('render-process-gone', (_event, details) => {
      if (!smoke) dialog.showErrorBox('Game stopped', `The game window stopped (${details.reason}). Please restart the application.`);
    });
    window.webContents.on('before-input-event', (event, input) => {
      if (input.type === 'keyDown' && input.key === 'F11') { window.setFullScreen(!window.isFullScreen()); event.preventDefault(); }
    });
    if (smoke) {
      try {
        const result = await require('./smoke.cjs').run(window, { base, blocked, errors });
        fs.writeFileSync(reportPath.replace(/\.json$/, '.png'), (await window.webContents.capturePage()).toPNG());
        fs.writeFileSync(reportPath, JSON.stringify({ ok: true, ...result }, null, 2));
        app.exit(0);
      } catch (error) {
        fs.writeFileSync(reportPath, JSON.stringify({ ok: false, error: error.stack, blocked, errors }, null, 2));
        app.exit(1);
      }
    } else await window.loadURL(`${ORIGIN}/`);
  }).catch(error => { dialog.showErrorBox('Unable to start', error.message); app.exit(1); });
}
