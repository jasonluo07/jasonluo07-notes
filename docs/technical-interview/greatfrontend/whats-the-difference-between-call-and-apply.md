---
sidebar_position: 4
title: '`.bind`、`.call` 和 `.apply` 之間有什麼不同？'
tags:
  - Finished
  - High
  - Easy
---

> What's the difference between `.bind`, `.call` and `.apply`?

- `.bind` 、 `.call` 和 `.apply` 一樣，都是函式原型上的方法，傳入的第一個引數用來指定函式內部的 `this` 值。
- 但是 `.bind` 不會立刻呼叫函式，而是回傳一個新的函式，並且 `this` 的值會被永久綁定在回傳的函式上； 而 `.call` 和 `.apply` 則會立刻呼叫函式。
- `.call` 和 `.apply` 除了第一個引數是用來指定函式內部的 `this` 值之外，剩下的引數都是用來傳入函式的引數。
  - 它們的差異在於傳入引數的方式不同。`.call` 接受以逗號分隔的參數，而 `.apply` 則接受一個參數陣列。

## `.bind` 的範例

<!-- prettier-ignore -->
```js
const john = {
  age: 42,
  getAge: function () {
    return this.age;
  },
};

console.log(john.getAge());    // 42

const unboundGetAge = john.getAge;
console.log(unboundGetAge());  // undefine（因為 `this` 指向全域物件）

const boundGetAge = john.getAge.bind(john);
console.log(boundGetAge());    // 42

const mary = {
  age: 21,
};

const boundGetMaryAge = john.getAge.bind(mary);
console.log(boundGetMaryAge()); // 21
```

## `.call` 和 `.apply` 的範例

<!-- prettier-ignore -->
```js
function add(a, b) {
  return a + b;
}

console.log(add.call(null, 1, 2));    // Prints: 3
console.log(add.apply(null, [1, 2])); // Prints: 3
```

## 參考資料

- [ExplainThis | 解釋 JavaScript 中 `this` 的值？](https://www.explainthis.io/zh-hant/swe/what-is-this)
- [GreatFrontEnd | What's the difference between `.call` and `.apply`?](https://www.greatfrontend.com/questions/quiz/whats-the-difference-between-call-and-apply)
- [GreatFrontEnd | Explain `Function.prototype.bind`](https://www.greatfrontend.com/questions/quiz/explain-function-prototype-bind)
- [Function.prototype.bind() - JavaScript | MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
