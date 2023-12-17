---
title: 請你說明 `useCallback`
---

> Please explain `useCallback`

## 擬答

### 介紹

- `useCallback` 是用在組件重新渲染之間，快取函式的 hook。

### 用法

- **用法**：`useCallback` 接受兩個參數。
  - 第一個參數是一個函式，是要快取的函式。
  - 第二個參數是一個陣列，特別稱為 dependencies（依賴項陣列）。dependencies 是用來決定什麼時候要重新快取函式。當這個陣列中的一個 dependency 的值被改變時，會重新快取函式。

### 運作

- **運作**：`useCallback` 的運作方式是

### 範例

```tsx
import { useCallback, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

## 參考資料

- [React Dev | useCallback](https://react.dev/reference/react/useCallback)
- [React Dev | How is useCallback related to useMemo?](https://react.dev/reference/react/useCallback#how-is-usecallback-related-to-usememo)
