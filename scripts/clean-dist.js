import { readdirSync, rmSync, statSync } from "fs";
import { join, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const distDir = resolve(__dirname, "../dist");

const TEST_PATTERN = /\.(test|spec)\.d\.ts$/;
const REMOVE_EXACT = new Set([
  resolve(distDir, "main.d.ts"),
  resolve(distDir, "App.d.ts"),
  resolve(distDir, "vite.svg"),
  resolve(distDir, join("common", "repo", "APITypes.d.ts")),
]);

function clean(dir) {
  for (const name of readdirSync(dir)) {
    const fullPath = join(dir, name);
    if (statSync(fullPath).isDirectory()) {
      clean(fullPath);
    } else if (REMOVE_EXACT.has(fullPath) || TEST_PATTERN.test(name)) {
      rmSync(fullPath);
    }
  }
}

clean(distDir);
