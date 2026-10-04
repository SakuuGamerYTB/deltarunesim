const assert = require('node:assert/strict');
const { ORIGIN } = require('./content.cjs');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
async function until(fn, label, timeout = 60000) {
  const end = Date.now() + timeout;
  while (Date.now() < end) {
    if (await fn()) return;
    await wait(100);
  }
  throw new Error(`Timed out: ${label}`);
}
async function run(window, { blocked, errors }) {
  const web = window.webContents;
  await window.loadURL(`${ORIGIN}/check`);
  await until(() => web.executeJavaScript("document.querySelectorAll('#checks li.ok').length === 6"), 'six offline resource checks');
  const checks = await web.executeJavaScript("Array.from(document.querySelectorAll('#checks li')).map(x=>x.textContent)");
  await window.loadURL(`${ORIGIN}/`);
  await until(() => web.executeJavaScript("!document.querySelector('#boot') && !!document.querySelector('#game')"), 'game startup');
  const state = await web.executeJavaScript(`(() => {
    const canvas = document.querySelector('#game');
    const pixels = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
    let nonBlack = 0;
    for (let i = 0; i < pixels.length; i += 4) if (pixels[i] + pixels[i+1] + pixels[i+2] > 30) nonBlack++;
    localStorage.setItem('__desktop_smoke', 'saved');
    return { nonBlack, nodeAccess: typeof require, origin: location.origin,
      resources: performance.getEntriesByType('resource').map(x=>x.name).filter(x=>/^https?:/.test(x)) };
  })()`);
  assert.ok(state.nonBlack > 1000, 'game draws into its canvas');
  assert.equal(state.nodeAccess, 'undefined');
  assert.equal(state.origin, ORIGIN);
  assert.deepEqual(state.resources, []);
  await web.reload();
  await until(() => web.executeJavaScript("!document.querySelector('#boot')"), 'reload');
  assert.equal(await web.executeJavaScript("localStorage.getItem('__desktop_smoke')"), 'saved');
  await web.executeJavaScript("localStorage.removeItem('__desktop_smoke')");
  assert.deepEqual(blocked, [], 'no external requests needed for startup');
  assert.deepEqual(errors, [], 'no renderer errors');
  return { checks, state, persistentStorage: true, blocked, errors };
}
module.exports = { run };
