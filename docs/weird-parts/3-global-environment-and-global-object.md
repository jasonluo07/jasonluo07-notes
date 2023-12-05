---
sidebar_position: 3
---

# 3. 全域環境、全域物件

## 全域執行上下文（Global Execution Context）

JavaScript 程式碼的執行開始於全域執行上下文。當運行 JavaScript 程式時，無論程式碼行數長短，都會先創建一個全域執行上下文。這是 JavaScript 程式中最基礎的執行環境，是程式碼運行的起點。

## 全域物件（Global Object）與 `this`

在全域執行上下文中，JavaScript 引擎會創建兩個特殊的元素：

1. **全域物件（Global Object）**：這是一個包含所有全域變數和函式的物件。在瀏覽器中，這個全域物件是 `window`。
2. **`this` 變數**：在全域執行上下文中，`this` 指向全域物件。在瀏覽器中，`this` 通常指向 `window` 物件。

## 第一個 JavaScript 程式

即使 JavaScript 檔案沒有任何程式碼，當它被運行時，一個全域執行上下文將被創建。這意味著全域物件和 `this` 在任何程式碼之前就已經存在。

```html
<!-- index.html -->
<html>
  <head> </head>
  <body>
    <script src="app.js"></script>
  </body>
</html>
```

```javascript
// app.js
```

## 全域中的變數和函式

在全域執行上下文中宣告的變數和函式都會成為全域物件的一部分。當在全域中宣告變數或函式時，它們實際上被附加到了 `window` 物件上（在瀏覽器環境中）。

## 執行上下文的結構

每個執行上下文都包含了幾個重要的組件：

- 全域物件或 `window` 物件。
- 特殊變數 `this`。
- 對外部環境的鏈接（在全域層級上通常為 `null`）。

## 結論

全域執行上下文和全域物件是理解 JavaScript 如何運行的基礎。這些概念不僅對於新手開發者極為重要，即使是經驗豐富的開發者也需時常回顧這些基礎。瞭解這些基本概念有助於更深入地掌握 JavaScript，並為進一步探索更進階的主題打下堅實的基礎。

## 參考

[10. The Global Environment and The Global Object](https://www.udemy.com/course/understand-javascript/learn/lecture/2237450#overview)
