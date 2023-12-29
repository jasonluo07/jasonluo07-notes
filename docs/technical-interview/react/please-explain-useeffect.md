---
title: 請你說明 `useEffect`
---

> Please explain `useEffect`

## 擬答

### 介紹

`useEffect` 是用來將組件和外部系統同步的 hook。這裡的外部系統指的是不受 React 控制的程式碼，比方說：從後端 API 取得資料，或是，使用瀏覽器 API，像是 `setTimeout`、`setInterval`、或是事件訂閱，這些之類的。

### 用法

使用 `useEffect` 的時候，有兩個參數要傳入。

- 第一個參數是一個函式，我們叫它 setup function，用來執行 side effect。那麼，它還可以選擇性地回傳另一個函式，我們叫它 cleanup function，用來在不需要 side effect 的時候進行清理。
- 第二個參數是一個陣列，我們叫它 dependencies（依賴項陣列），是一個可選的參數。dependencies 是用來控制 setup function 的執行時機。當這個陣列中的某一項的值被改變，就會再次執行 setup function，如果有 cleanup function 的話，那麼，會先執行 cleanup function，再來執行 setup function。
  - 如果這個參數被省略時，`useEffect` 會在每次渲染之後都執行 setup function。
  - 如果這個參數是一個空陣列，`useEffect` 會在組件被加入 DOM 之後執行 setup function，並且在組件被移除 DOM 之後執行 cleanup function。

### 運作

`useEffect` 的運作方式是

1. 組件掛載後，執行 setup function。
1. dependencies 變化時，會先執行 cleanup function，然後，重新執行 setup function。
1. 組件卸載時，執行 cleanup function。

### 範例

#### 簡單的計數器

下面的範例是一個簡單的計數器，每秒會加 1，並且，當計數器的值是 5 的倍數時，會顯示一個彈出視窗。

<!-- prettier-ignore -->
```tsx
import { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (count % 5 === 0 && count !== 0) {
      alert('count is a multiple of 5');
    }
  }, [count]);

  return <div>{count}</div>;
};

export default Counter;
```

## 參考資料

- [React Dev | useEffect](https://react.dev/reference/react/useEffect)
- [React Dev | Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
