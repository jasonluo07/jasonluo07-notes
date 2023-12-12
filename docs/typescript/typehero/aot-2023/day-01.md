---
sidebar_position: 1
title: Day 1 - Christmas Cookies
---

## 題解

在這個挑戰中，我們將建立一個 TypeScript 類型 `SantasFavoriteCookies`，它代表聖誕老人最愛的餅乾。這個類型只能接受兩種值：`'ginger-bread'` 和 `'chocolate-chip'`。

## Key Learnings

- `type` - 宣告一個類型
- `|` - 聯合類型：用來表示一個值可以是多種類型之一

## 題目

```ts
type SantasFavoriteCookies = unknown;
```

## 解答

```ts
type SantasFavoriteCookies = 'ginger-bread' | 'chocolate-chip';
```

## 參考資料

- [Day One](https://typehero.dev/challenge/day-1)
