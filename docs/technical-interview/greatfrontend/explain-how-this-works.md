---
sidebar_position: 3
title: '解釋 `this` 如何運作。'
tags:
  - Finished
  - High
  - Hard
---

> Explain how `this` works.

在 JavaScript 中，`this` 是一個關鍵字，它的值是由呼叫函式的方式來決定的。其規則如下：

1. 如果使用 `new` 關鍵字來呼叫函式（執行建構函式），那麼函式內部的 `this` 會指向一個全新的物件。
1. 如果使用 `apply`、`call` 或 `bind` 方法來呼叫函式，那麼函式內部的 `this` 會指向作為參數傳入的物件。
1. 如果以物件方法的形式呼叫函式（使用點符號），那麼函式內部的 `this` 會指向函式所屬的物件。
1. 如果直接呼叫函式（不符合上述情況）的時候，那麼在非嚴格模式下 `this` 會指向全域物件，否則會值會是 `undefined`。
   - 在瀏覽器中，全域物件是 `window`。
   - 在 Node.js 中，全域物件是 `global`。
1. 如果當多個規則都適用，那麼排在前面的規則會優先決定 `this` 的值。
1. 對於 ES6 箭頭函式，忽略上述所有規則。`this` 會捕獲到它被創建時所處的作用域的 `this` 值。

## 參考資料

- [ExplainThis | 解釋 JavaScript 中 `this` 的值？](https://www.explainthis.io/zh-hant/swe/what-is-this)
- [Arnav Aggarwal | The Simple Rules to ‘this’ in Javascript](https://medium.com/codeburst/the-simple-rules-to-this-in-javascript-35d97f31bde3)
- [GreatFrontEnd | Explain how `this` works in JavaScript](https://www.greatfrontend.com/questions/quiz/explain-how-this-works-in-javascript)
