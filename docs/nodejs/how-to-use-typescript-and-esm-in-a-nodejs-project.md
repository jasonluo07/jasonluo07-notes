---
sidebar_position: 1
---

# 如何在 Node.js 專案中使用 TypeScript 以及 ESM

Node.js 是一個伺服器端運行環境，而 TypeScript 則是一個靜態類型的 JavaScript 超集，允許你在開發過程中更容易地捕捉錯誤並提升程式碼的可讀性。此外，ECMAScript Modules（ESM）是一個模組系統，用於更好地組織和管理 JavaScript 程式碼。本文將向你展示如何在 Node.js 專案中結合使用 TypeScript 和 ESM，以實現更清晰和可維護的程式碼結構。

## 先決條件

在開始之前，你需要確保 Node.js 版本在 18 以上。你可以在終端機中執行以下命令來檢查你的 Node.js 版本：

```bash
node -v
```

## 初始化專案

首先，我們將建立一個新的 Node.js 專案。打開終端機，執行以下命令：

```bash
mkdir ts-node-starter
cd ts-node-starter
npm init -y
```

這將創建一個新的專案資料夾，並初始化一個新的 npm 專案。

## 啟用 ESM

接下來，我們需要啟用 ESM。打開 `package.json` 檔案，並在 `type` 屬性中添加 `module`：

```json
{
  ...
  "type": "module",
  ...
}
```

## 安裝套件

接下來，我們需要安裝一些必要的套件，包括 Express、TypeScript，以及相關的類型定義套件。執行以下命令來安裝它們：

```bash
npm i express
npm i -D typescript ts-node @types/node @types/express
```

這些套件將允許我們使用 Express 應用程式框架和 TypeScript 進行開發。

- ts-node：是一個直接執行 TypeScript 程式碼的工具，而不需要先將其編譯為JavaScript。
- @types/node：是一個 TypeScript 的宣告文件套件，提供了 Node.js 核心模組的類型定義。

## 設定 TypeScript

現在，我們需要設定 TypeScript。執行以下命令來初始化 TypeScript 的設定檔案：

```bash
npx tsc --init
```

這將在你的專案根目錄中創建一個 `tsconfig.json` 檔案，其中包含了 TypeScript 的設定選項。請打開這個檔案並確保設定如下：

```json
{
  "compilerOptions": {
    "target": "ES2022" /* 設定要生成的 JavaScript 使用的語言版本 */,
    "module": "commonjs" /* 告訴 TypeScript 要怎麼把你的程式碼打包成模組 */,
    "outDir": "./dist" /* 告訴 TypeScript 把編譯後的檔案都放在哪個資料夾 */,
    "rootDir": "./src" /* 告訴 TypeScript 你的原始碼在哪裡 */,
    "strict": true /* 啟用嚴格模式，打開所有類型檢查的選項。 */,
    "esModuleInterop": true /* 這個設定讓 TypeScript 產生一些額外的 JavaScript 來支援引入 CommonJS 模組，以確保不同模組之間的相容性。 */
  }
}
```

這個 `tsconfig.json` 文件將配置 TypeScript 的選項，以確保我們的程式碼能夠正確地編譯。

## 規劃資料夾結構

為了保持專案的整潔和組織，我們建議使用以下資料夾結構：

```
.
├── dist
│   └── server.js
├── src
│   └── server.ts
├── package-lock.json
├── package.json
└── tsconfig.json
```

這個結構將放置編譯後的JavaScript檔案到`dist`目錄中，並將原始程式碼存放在`src`目錄中。

## 建立程式碼

現在，我們可以開始編寫我們的Node.js應用程式程式碼。在`src`資料夾中，建立一個名為`server.ts`的檔案，並加入以下程式碼：

```typescript
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (_req, res) => {
  res.send('Hello, Express with TypeScript and ECMAScript 2022!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

這個程式碼使用 Express 框架建立一個簡單的 HTTP 伺服器，並在根路由處回傳一個字串。

## 建立腳本

為了更方便地運行我們的應用程式，我們可以在 `package.json` 中添加一些腳本。請將以下腳本添加到 `scripts` 區域中：

```json
"scripts": {
  "start": "tsc && node dist/server.js",
  "dev": "nodemon --exec ts-node src/server.ts"
}
```

這些腳本允許我們使用 `npm start` 指令來啟動我們的應用程式（編譯 TypeScript 並運行JavaScript），以及使用 `npm dev` 指令在開發模式下啟動應用程式（使用 nodemon 監控檔案並自動重新啟動）。

## 結語

現在，你已經完成了一個 Node.js 專案的初始化，並配置了 TypeScript 和 ESM 的環境。

如果你有任何疑問或需要進一步的幫助，請隨時查閱相關文件或向寄信給我。Happy Coding！
