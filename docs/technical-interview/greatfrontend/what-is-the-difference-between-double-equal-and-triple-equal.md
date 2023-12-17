---
title: '`==` 和 `===` 有什麼不同？'
tags:
  - High
  - Easy
---

- 兩個等號的運算子會先進行型別轉換，再進行比較，而三個等號的運算子則不會進行型別轉換，而是直接比較。
- 一般來說，應該使用三個等號來進行比較，因為這樣可以避免無法預期的型別轉換。但是對於比較 `null` 和 `undefined` 時，兩個等號的運算子會比較方便。

  ```js
  console.log(a == null); // Prints: true if a is undefined or null
  console.log(a == undefined); // Prints: true if a is null or undefined
  ```

## 參考資料

- [GreatFrontEnd | What is the difference between `==` and `===`?](https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-double-equal-and-triple-equal)
- [Web Dev Simplified Blog | Stop Using Double Equals in JavaScript](https://blog.webdevsimplified.com/2020-08/==-vs-===/)
