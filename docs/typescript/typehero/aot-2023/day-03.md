---
sidebar_position: 3
title: Day 3 - The Gift Wrapper
---

## 題解

在這個挑戰中，將 `GiftWrapper` 修改成一個泛型類型，它能根據傳入的類別產生一個具有 `present`、`from`、`to` 三個屬性的物件類型。

## Key Learnings

- 多個參數的泛型類型

## 題目

```ts
type GiftWrapper = {
  present: unknown;
  from: unknown;
  to: unknown;
};
```

## 解答

```ts
type GiftWrapper<T, U, V> = {
  present: T;
  from: U;
  to: V;
};
```

## 參考資料

- [Day Three](https://typehero.dev/challenge/day-3)
