const { execFile } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const executable = path.resolve(process.argv[2]);
const report = path.resolve(process.argv[3]);
const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'sim-exe-test-'));
execFile(executable, ['--smoke-test', '--report', report], { cwd, timeout: 180000 }, (error, stdout, stderr) => {
  const result = fs.existsSync(report) ? JSON.parse(fs.readFileSync(report, 'utf8')) : null;
  if (stdout) process.stdout.write(stdout);
  if (stderr) process.stderr.write(stderr);
  console.log(JSON.stringify(result, null, 2));
  fs.rmSync(cwd, { recursive: true, force: true });
  if (error || !result?.ok) { console.error(error?.message || 'Packaged smoke test failed'); process.exitCode = 1; }
});
