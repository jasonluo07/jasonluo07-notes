---
sidebar_position: 1
title: '如何命名事件處理器？'
---

在 React 中，`handle` 和 `on` 是兩種常見的前綴詞（prefix），用於命名與事件處理相關的函式。它們各自在不同的情境下有一定的使用習慣。

## TL;DR

- 組件內部事件處理器：`handleClick`
- 作為 prop 的回調函式：`onClick`

## 使用前綴詞 `handle`

**組件內部事件處理器**：當函式是用來處理組件內部事件時，通常以 `handle` 開頭。這類函式通常是組件內部邏輯的一部分，用於回應使用者互動或其他事件。例如：

- `handleClick`
- `handleSubmit`
- `handleChange`
- `handleMouseEnter`

這種命名方式有助於強調函式是在組件內部處理特定事件。

## 使用前綴詞 `on`

**作為 prop 的回調函式**：當函式作為 prop 傳遞給子組件，以便在特定事件發生時被子組件調用，這類 prop 通常以 `on` 開頭。這反應了一種期望：子組件在特定事件發生時應該執行這些函式。例如：

- `onClick`
- `onSubmit`
- `onChange`
- `onMouseEnter`

這種命名方法有助於指出這些函式是從父組件接收的事件回調。

## 範例

在父組件中，我們定義一個 `handleClick` 函式，並將其作為 `onClick` prop 傳遞給子組件。

```jsx title="src/components/ParentComponent.tsx"
const ParentComponent = () => {
  const handleClick = () => {
    // 處理點擊事件
  };

  return <ChildComponent onClick={handleClick} />;
};
```

在子組件中，我們接收 `onClick` prop，並定義了自己的 `handleClick` 函式，在按鈕被點擊時執行特定操作，然後調用 `onClick`。

```jsx title="src/components/ChildComponent.tsx"
type ChildComponentProps = {
  onClick: () => void;
};

const ChildComponent = ({ onClick }: ChildComponentProps) => {
  const handleClick = () => {
    // 執行其他操作
    onClick();
  };

  return <button onClick={handleClick}>Click Me</button>;
};
```

這個範例展示了如何在父子組件間使用 `handle` 和 `on` 前綴詞，以提升程式碼的一致性和可讀性。

## 結論

這種命名約定不僅有助於清晰地區分事件處理的責任，也使程式碼的閱讀和維護變得更加容易。正確地在父子組件間使用 handle 和 on 前綴詞，可以幫助維護一致的命名慣例，從而提升整體程式碼質量。

## 參考資料

- [Stack Overflow: What is the right name of event handler? onClick or handleClick?](https://stackoverflow.com/questions/60048249/what-is-the-right-name-of-event-handler-onclick-or-handleclick)
- [Google Search: How to name event handlers](https://www.google.com/search?q=how+to+name+event+handler)
