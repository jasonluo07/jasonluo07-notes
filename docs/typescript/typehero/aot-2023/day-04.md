---
sidebar_position: 4
title: Day 4 - Christmas Present Delivery Addresses 整理中
---

## 題解

這個挑戰中，我們創建了一個泛型 `PresentDeliveryList`，將物件轉換為其每個 key 對應到 `Address` 類型的新物件。

## Key Learnings

- 映射類型
- `keyof`
- 泛型

## 題目

```ts
type Address = { address: string; city: string };
type PresentDeliveryList<T> = unknown;
```

## 解答

```ts
type PresentDeliveryList<T> = {
  [K in keyof T]: Address;
};
```

- `keyof T` 會回傳 `T` 所有 key 值的聯合類型。
  - `keyof { a: 1, b: 2 }` 會回傳 `'a' | 'b'`。

## 參考資料

- [Day Four](https://typehero.dev/challenge/day-4)
