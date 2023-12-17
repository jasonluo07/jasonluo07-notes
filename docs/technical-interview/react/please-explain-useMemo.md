---
title: 請你說明 `useMemo`
---

> Please explain `useMemo`

## 擬答

### 介紹

- `useCallback` 是用在組件重新渲染之間，快取計算結果的 hook。

### 用法

### 運作

### 範例

```tsx
import { useMemo } from 'react';

const TodoList = ({ todos, tab, theme }: TodoListProps) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
```

## 參考資料

- [React Dev | useMemo](https://react.dev/reference/react/useMemo)
