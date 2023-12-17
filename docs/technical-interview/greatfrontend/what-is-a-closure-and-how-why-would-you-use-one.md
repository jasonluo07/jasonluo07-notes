---
sidebar_position: 1
title: 什麼是閉包？
tags:
  - High
  - Medium
---

> What is a closure?

- 閉包是一個函式以及這個函式被宣告時的詞彙作用域的組合，也就是說，這個函式可以存取並操作外部作用域的變數，即使那個作用域已經結束。
- 舉個具體的例子，定義一個叫做 `createCounter` 的函式，在函式內部定義一個叫做 `count` 的變數 ，並且回傳一個匿名函式，這個匿名函式可以存取 `count` 變數，並將這個值加 1。

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

- 用途

  1. 資料封裝：將變數封裝在函式內部，避免變數被外部作用域影響。
  2. currying：將多個參數的函式轉換成單個參數的函式。

- 缺點

  1. 記憶體洩漏：閉包會將外部作用域的變數綁定在函式內部，因此這些變數不會被回收。

## 參考資料

- [ExplainThis | 什麼是閉包 (Closure)？](https://www.explainthis.io/zh-hant/swe/what-is-closure)
- [GreatFrontEnd | What is a closure, and how/why would you use one?](https://www.greatfrontend.com/questions/quiz/what-is-a-closure-and-how-why-would-you-use-one)
