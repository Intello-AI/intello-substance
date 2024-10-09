#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const componentName = process.argv[2];
const sourceDir = path.join(
  __dirname,
  "..",
  "src",
  "components",
  componentName
);
const targetDir = path.join(process.cwd(), "components", componentName);

if (!fs.existsSync(sourceDir)) {
  console.error(`Component ${componentName} not found`);
  process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });

fs.readdirSync(sourceDir).forEach((file) => {
  fs.copyFileSync(path.join(sourceDir, file), path.join(targetDir, file));
});

console.log(`Component ${componentName} installed successfully`);
