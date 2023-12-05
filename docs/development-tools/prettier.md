---
sidebar_position: 1
title: '使用 Prettier 美化你的程式碼'
---

在現代軟體開發中，程式碼的可讀性和一致性非常重要。Prettier 是一個受歡迎的程式碼格式化工具，可以幫助你自動地美化程式碼，保持一致的風格。本文將介紹 Prettier 的基本用法和一些進階設定。

## 基本安裝和設定

首先，你需要在你的專案中安裝 Prettier。使用 npm，你可以這樣做：

```bash
npm install -D prettier
```

安裝完成後，你可以在專案根目錄下建立一個 `.prettierrc` 檔案來自定義格式化規則。例如：

以下是我的個人偏好：

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 120,
  "tabWidth": 2,
  "jsxSingleQuote": false,
  "arrowParens": "avoid"
}
```

增加 `.prettierignore` 檔案，以避免格式化特定的檔案或目錄：

```plain
package-lock.json
yarn.lock
pnpm-lock.yaml
```

## 整合至編輯器

為了提高效率，將 Prettier 整合到你的程式碼編輯器是一個好主意。以 Visual Studio Code 為例，你可以安裝 Prettier 插件，並在設定中啟用格式化。這樣一來，每次儲存檔案時，Prettier 就會自動格式化你的程式碼。

## 與 ESLint 搭配使用

如果你在使用 ESLint 來管理程式碼品質，Prettier 可以與 ESLint 相結合，確保格式化不會與你的 linting 規則衝突。使用 `eslint-config-prettier` 和 `eslint-plugin-prettier` 可以讓兩者和諧共處。

## @trivago/prettier-plugin-sort-imports

這個 Prettier 插件專門用於對 import 語句進行排序，以提升程式碼的整潔性和一致性。安裝此插件後，你可以在 .prettierrc 檔案中配置相關規則，例如指定排序標準或選擇是否分組排序。

## prettier-plugin-tailwindcss

對於使用 Tailwind CSS 的專案，這個插件能夠自動對 Tailwind CSS 類名進行排序和格式化。這有助於保持樣式聲明的一致性和可讀性。安裝並配置後，Prettier 將會在格式化時考慮 Tailwind CSS 的特定規則。

## 結語

使用 Prettier 可以讓你的程式碼更加整潔一致。雖然一開始可能需要一些時間來設定和習慣，但長遠來看，它將大大提高你的開發效率和程式碼品質。
