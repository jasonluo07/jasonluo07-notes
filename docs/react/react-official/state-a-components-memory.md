---
sidebar_position: 1
title: '狀態：組件的記憶'
---

## 概述

Components often need to change what's on the screen as a result of an interaction. Typing into the form should update the input field, clicking "next" on an image carousel should change which image is displayed, clicking "buy" should put a product in the shopping cart. Components need to "remember" things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called _state_.

組件經常需要因互動而改變螢幕上的內容。在表單中打字應該更新輸入欄，點擊圖片輪播中的“下一張”應該更改顯示的圖片，點擊“購買”應該將商品放入購物車。組件需要“記住”一些事情：當前輸入值、當前圖片、購物車。在 React 中，這種特定於組件的記憶稱為狀態​​。

## 什麼是狀態？為什麼我們需要它？

- 在 React 中，狀態是特定組件的記憶，用於記住組件在不同渲染之間的資訊。
- 這對於實現使用者介面的動態行為非常重要，例如：表單輸入的即時更新、圖片輪播的圖片切換⋯⋯等等。狀態讓組件能夠回應使用者互動並對應地更新顯示內容。

[來源](https://react.dev/learn/state-a-components-memory#)

## 為什麼 JavaScript 一般變數不能作為 React 狀態？

- 局部變數在渲染之間不會持續存在。
- 局部變數的變更不會觸發重新渲染。

[來源](https://react.dev/learn/state-a-components-memory#when-a-regular-variable-isnt-enough)

## 狀態是如何隔離和保持私有的？

狀態是組件實例特有的，局部於特定實例。也就是說，在不同位置渲染相同的組件，每個副本都會擁有完全隔離的狀態。更改其中一個組件的狀態不會影響另一個​​。

[來源](https://react.dev/learn/state-a-components-memory#state-is-isolated-and-private)

## 實作：計數器

- 使用函式組件實作一個計數器（Counter）。
- 計數器顯示一個數字，預設為 0，代表計數器的數字。
- 計數器有兩個按鈕，分別是「增加」與「減少」。
  - 按下「增加」按鈕時，計數器的數字會加 1。
  - 按下「減少」按鈕時，計數器的數字會減 1。

```tsx title="src/components/Counter.tsx"
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
```
