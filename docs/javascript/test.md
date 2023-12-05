# 使用 `==` 比 `===` 好的例子

- 當檢查一個變數是否為 `null` 或 `undefined` 時，使用 `==` 會比較好，因為 `null == undefined` 會回傳 `true`，但 `null === undefined` 會回傳 `false`。

```javascript
if (variable == null) {
  // variable is either null or undefined
}
```
