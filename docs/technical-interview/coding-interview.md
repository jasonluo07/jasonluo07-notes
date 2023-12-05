---
sidebar_position: 3
---

# Coding Questions

題目出自於 [Coding Questions ★ Front-end Developer Interview Questions](https://h5bp.org/Front-end-Developer-Interview-Questions/questions/coding-questions/)

## 1. What is the value of `foo`?

```javascript
var foo = 10 + '20';
```

<details open>
<summary>答案</summary>

關鍵：coercion、string concatenation

結果是 <code>'1020'</code>。在 JavaScript 中，當數字和字串相加時，數字會被轉換（coercion）成字串，然後進行字串串接（string concatenation）。

</details>

## 2. What will be the output of the code below?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

<details open>
<summary>答案</summary>

關鍵：浮點數運算

結果是 <code>false</code>。這是因為 JavaScript 中的浮點數運算不總是精確的。

</details>

## 3. How would you make this work?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

<details open>
<summary>答案</summary>

關鍵：currying、function

這需要使用 currying，可以以以下方式來實現：

```javascript
function add(x) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function (y) {
      return x + y;
    };
  }
}
```

</details>

## 4. What value is returned from the following statement?

```javascript
"i'm a lasagna hog".split('').reverse().join('');
```

<details open>
<summary>答案</summary>

關鍵：method chaining

結果是 <code>'goh angasal a m\'i'</code>。`split('')` 將字串轉換成字元陣列，`reverse()` 將陣列反轉，`join('')` 將字元陣列轉換成字串。

</details>

## 5. What is the value of `window.foo`?

<!-- prettier-ignore -->
```javascript
(window.foo || (window.foo = 'bar'));
```

<details open>
<summary>答案</summary>

關鍵：short circuit evaluation、global variable

結果是 <code>'bar'</code>。這是因為 `window.foo` 是 `undefined`，所以 `window.foo || (window.foo = 'bar')` 設定 `window.foo` 的值為 `'bar'`。

</details>

## 6. What is the outcome of the two alerts below?

```javascript
var foo = 'Hello';
(function () {
  var bar = ' World';
  alert(foo + bar);
})();
alert(foo + bar);
```

<details open>
<summary>答案</summary>

關鍵：IIFE、scope

第一個 `alert` 會顯示 <code>'Hello World'</code>，第二個 `alert` 會顯示 <code>ReferenceError: bar is not defined</code>。這是因為 `bar` 變數只存在於 IIFE 的 scope 中。

</details>

## 7. What is the value of `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

<details open>
<summary>答案</summary>

關鍵：array、length

結果是 <code>2</code>。`foo.length` 是 `2`，因為 `foo` 陣列中有兩個元素。

</details>

## 8. What is the value of `foo.x`?

```javascript
var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 };
```

<details open>
<summary>答案</summary>

關鍵：object、reference

結果是 <code>undefined</code>。JavaScript 的賦值運算符是從右向左的，所以最後一行的表達式等同於 `foo.x = (foo = { n: 2 });`。在賦值之前，

<!-- prettier-ignore -->
```javascript
foo.x = (foo = { n: 2 });
```

- [object - JavaScript code trick: What's the value of foo.x - Stack Overflow](https://stackoverflow.com/questions/32342809/javascript-code-trick-whats-the-value-of-foo-x)

</details>

## 9. What does the following code print?

```javascript
console.log('one');
setTimeout(function () {
  console.log('two');
}, 0);
Promise.resolve().then(function () {
  console.log('three');
});
console.log('four');
```

<details open>
<summary>答案</summary>

關鍵：event loop、promise

</details>

## 10. What is the difference between these 4 promises?

```javascript
doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
```

<details open>
<summary>答案</summary>

關鍵：promise

</details>

## 11. What will the code below output to the console and why?

```javascript
(function () {
  var a = (b = 3);
})();

console.log('a defined? ' + (typeof a !== 'undefined'));
console.log('b defined? ' + (typeof b !== 'undefined'));
```

<details open>
<summary>答案</summary>

關鍵：scope、hoisting

</details>

## 12. Consider the two functions below. Will they both return the same thing? Why or why not?

```javascript
function foo1() {
  return {
    bar: 'hello',
  };
}

function foo2() {
  return;
  {
    bar: 'hello';
  }
}
```
