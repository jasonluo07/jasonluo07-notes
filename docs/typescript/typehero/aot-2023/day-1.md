---
sidebar_position: 1
title: Day 1 - Christmas Cookies
---

## 描述

It's December 1st! That means it's almost time for the big day! Santa has a preparation regimen that involves, of course, eating lots of delicious cookies.

今天是12月1日！這意味著大日子快到了！聖誕老人有一套準備工作，當然包括吃很多美味的餅乾。

Santa's elves have provided Santa an API whereby Santa can submit his favorite cookie flavors. This year his favorites are:

聖誕老人的小精靈提供了一個API給聖誕老人，讓他能提交他最喜歡的餅乾口味。今年他最喜歡的是：

- `ginger-bread`

  `薑餅`

- `chocolate-chip`

  `巧克力碎片`

But the elves have some kind of fancy code-gen build step (built in Rust, of course), so all Santa needs to do is update the `SantasFavoriteCookies` type to accept either of his favorite cookies.

但是精靈們有一些高級的程式碼生成步驟（當然是用Rust建立的），所以聖誕老人只需要更新 `SantasFavoriteCookies` 類型，使其能接受他最喜歡的任一種餅乾。

Can you help?

你能幫忙嗎？

## 題目

```ts
type SantasFavoriteCookies = unknown;
```

## 解答

```ts
type SantasFavoriteCookies = 'ginger-bread' | 'chocolate-chip';
```

## 參考資料

[Day One](https://typehero.dev/challenge/day-1)
