import { spawn } from 'child_process';

const args = process.argv.slice(2);
const filteredArgs = args.filter(arg => arg !== '--host');

console.log('Starting Next.js production server with filtered arguments:', filteredArgs);

const nextStart = spawn('npx', ['next', 'start', '-p', '3000', ...filteredArgs], {
  stdio: 'inherit',
  shell: true
});

nextStart.on('close', (code) => {
  process.exit(code || 0);
});
