---
sidebar_position: 2
title: Day 2 - Christmas Cookie Inventory
---

## 題解

在這個挑戰中，將 `CookieSurveyInput` 修改成一個泛型類型，它能根據傳入的類別產生一個所有 key 值的聯合類型。

## Key Learnings

- `typeof` - JavaScript 語法，用來取得變數的類型。
  - `typeof 42` 會回傳 `'number'`
  - `typeof {}` 會回傳 `'object'`。
- `keyof` - 用來取得物件所有 key 值的聯合類型。
  - `keyof { a: 1, b: 2 }` 會回傳 `'a' | 'b'`。
- generics（泛型） - 用來不具體指定類型，而是在使用時才決定類型。
  - `function identity<T>(arg: T): T { return arg; }`，這裡的 `T` 是使用時才決定的型別。

## 題目

```ts
type CookieSurveyInput = unknown;
```

## 解答

```ts
typeof CookieSurveyInput<T> = keyof T;
```

## 參考資料

- [Day Two](https://typehero.dev/challenge/day-2)
