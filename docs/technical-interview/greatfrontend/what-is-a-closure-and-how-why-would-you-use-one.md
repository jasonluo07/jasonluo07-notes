---
sidebar_position: 1
title: '什麼是閉包，以及你如何/為何會使用它？'
tags:
  - High
  - Medium
---

> What is a closure, and how/why would you use one?

閉包是一個函式，它捕獲了該函式被宣告時的詞彙作用域，也就是說，它可以存取並操作外部作用域的變數，即使那個作用域已經結束。

## 範例

```js
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // Prints: 1
console.log(counter()); // Prints: 2
```

## 用途

1. 資料封裝：將變數封裝在函式內部，避免變數被外部誤用。
2. currying：將多個參數的函式轉換成單個參數的函式。

## 參考資料

- [ExplainThis | 什麼是閉包 (Closure)？](https://www.explainthis.io/zh-hant/swe/what-is-closure)
- [GreatFrontEnd | What is a closure, and how/why would you use one?](https://www.greatfrontend.com/questions/quiz/what-is-a-closure-and-how-why-would-you-use-one)
