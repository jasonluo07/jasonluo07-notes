---
title: 聯合型別
---

## 簡單範例

<!-- prettier-ignore -->
```ts
let myFavoriteNumber: string | number;

myFavoriteNumber = 'seven'; // OK
myFavoriteNumber = 7;       // OK
myFavoriteNumber = true;    // Error
```

`let myFavoriteNumber: string | number` 的意思是，允許 `myFavoriteNumber` 的型別是 `string` 或 `number`，但是不能是其他型別。

## 存取聯合型別的屬性或方法

- 只能存取所有型別裡共有的屬性或方法：
  ```ts
  function getLength(something: string | number): number {
    return something.length;
  }
  ```
- 在被賦值的時候，會根據斷出一個型別：
  ```ts

  ```

## 參考資料

- [TypeScript 新手指南 | 聯合型別](https://willh.gitbook.io/typescript-tutorial/basics/union-types)
