---
sidebar_position: 5
title: '使用 `var`、`let` 或 `const` 創建變數之間有什麼不同？'
tags:
  - High
  - Medium
---

> What are the differences between variables created using `var`, `let` or `const`?

`var`、`let` 和 `const` 都是用來宣告變數的關鍵字，它們之間的差異主要有以下幾點：

- 作用域

  - 使用 `var` 宣告的變數，其作用域是函式作用域或全域作用域。
  - 使用 `let` 和 `const` 宣告的變數，其作用域是區塊作用域。

- 重複宣告變數

  - 只有 `var` 允許重複宣告變數
  - 而 `let` 和 `const` 不允許重複宣告變數，否則會拋出錯誤。

- 變數提升

  - `var` 允許變數提升，也就是說，可以在宣告變數之前使用它，但是它的值會是 `undefined`。
  - `let` 和 `const` 也會允許變數提升，但不同的是，它們在宣告之前變數會處於暫時性死區（TDZ），也就是說，如果在宣告之前使用變數，會拋出錯誤。

- `let` 和 `const` 不同在於，`const` 宣告的變數不能被重新賦值。

## 參考資料

- [ExplainThis | 在 JavaScript 中用 var, let, 以及 const 有什麼差別？什麼時候該用哪個？ ](https://www.explainthis.io/zh-hant/swe/js-var-let-const-in-javascript)
- [GreatFrontEnd | What are the differences between variables created using `let`, `var` or `const`?](https://www.greatfrontend.com/questions/quiz/what-are-the-differences-between-variables-created-using-let-var-or-const)
