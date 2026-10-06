import net from "node:net";
import { spawn } from "node:child_process";

const preferred = Number(process.env.PORT || 3000);
const maxAttempts = 20;

function isFree(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once("error", () => resolve(false));
    server.once("listening", () => server.close(() => resolve(true)));
    server.listen(port, "127.0.0.1");
  });
}

let port = preferred;
for (let i = 0; i < maxAttempts; i++) {
  if (await isFree(port)) break;
  console.log(`Port ${port} is in use. Trying ${port + 1}...`);
  port++;
}

const child = spawn(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["next", "start", "-p", String(port)],
  { stdio: "inherit", shell: true, env: { ...process.env, PORT: String(port) } }
);

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 1);
});
