const fs = require("fs");
const path = require("path");

const envFile = path.join(__dirname, ".env");
const exampleFile = path.join(__dirname, ".env.example");

if (!fs.existsSync(envFile)) {
  if (fs.existsSync(exampleFile)) {
    fs.copyFileSync(exampleFile, envFile);
    console.log(".env 文件已自动从 .env.example 复制。");
  } else {
    fs.writeFileSync(envFile, "");
    console.log(".env.example 不存在，已生成空的 .env 文件。");
  }
} else {
  console.log(".env 文件已存在，无需操作。");
}
