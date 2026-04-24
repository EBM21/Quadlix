import { spawn } from 'child_process';

// Get arguments passed to the script, excluding the script name itself
const args = process.argv.slice(2);

// Filter out the problematic '--host' flag if it exists
// Next.js uses '--hostname' instead of '--host'
const filteredArgs = args.filter(arg => arg !== '--host');

console.log('Starting Next.js dev server with filtered arguments:', filteredArgs);

const nextDev = spawn('npx', ['next', 'dev', '-p', '3000', '--turbo=false', ...filteredArgs], {
  stdio: 'inherit',
  shell: true
});

nextDev.on('close', (code) => {
  process.exit(code || 0);
});
