---
title: 渲染和提交
---

## 問題

- 什麼是渲染？
- 什麼時候以及為什麼會渲染組件？
- 在螢幕上顯示組件會涉及哪些步驟？
- 為什麼渲染並不總是產生 DOM 更新？

## 筆記

- 請求和提供 UI 的過程分成三個步驟

  1. Triggering a render（觸發渲染）
  1. Rendering the component（渲染組件）
  1. Committing to the DOM（提交到 DOM）

- 什麼原因會觸發渲染？

  1. 初始渲染

     ```tsx
     import App from '@/App';
     import React from 'react';
     import { createRoot } from 'react-dom/client';

     import './index.css';

     const root = createRoot(document.getElementById('root')!);
     root.render(
       <React.StrictMode>
         <App />
       </React.StrictMode>
     );
     ```

1. 狀態更新

- 什麼是渲染？
  - 渲染是 React 呼叫組件。

## 參考資料

- [React Dev | Render and Commit](https://react.dev/learn/render-and-commit)
