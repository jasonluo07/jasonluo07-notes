---
sidebar_position: 2
title: '什麼是事件循環？'
tags:
  - High
  - Hard
---

> What is event loop?

事件循環是一種讓 JavaScript 執行非同步操作的機制，它會監聽呼叫堆疊和任務佇列，並在呼叫堆疊為空時，將任務佇列中的任務推入呼叫堆疊中執行。

## 範例

### 基礎題

```js
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve()
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(4);
  });

console.log(5);
```

印出順序為 `1 -> 5 -> 3 -> 4 -> 2`。

- `Promise` 進到微任務佇列，而 `setTimeout` 進到宏任務佇列。

## 參考資料

- [PJCHENder | 理解 JavaScript 中的事件循環、堆疊、佇列和併發模式（Learn event loop, stack, queue, and concurrency mode of JavaScript in depth](https://pjchender.blogspot.com/2017/08/javascript-learn-event-loop-stack-queue.html)
- [ExplainThis | 請說明瀏覽器中的事件循環 (Event Loop)](https://www.explainthis.io/zh-hant/swe/what-is-event-loop)
- [GreatFrontEnd | What is event loop?](https://www.greatfrontend.com/questions/quiz/what-is-event-loop-what-is-the-difference-between-call-stack-and-task-queue)
