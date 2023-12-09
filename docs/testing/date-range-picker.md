---
sidebar_position: 1
title: '測試 React 組件：使用 Vitest 的 DateRangePicker 測試實例'
---

在現代的前端開發中，測試是確保我們的應用程式或組件可靠性和穩定性的關鍵。在這篇文章中，我們將探討如何使用 Vitest 和 Testing Library 進行 React 組件測試，以 `DateRangePicker` 組件為例。

## 測試的重要性

在開發過程中，測試可以幫助我們確保代碼的行為符合期望，並及早發現和修復錯誤。這對於維持代碼質量和提高開發效率至關重要。

## 使用 Vitest 的優勢

Vitest 是一款輕量級的測試運行器和斷言庫，專為現代 JavaScript 生態系統設計。它與 Vite 緊密集成，提供快速的測試運行和簡潔的 API。

## 完整程式碼

```tsx title="src/components/DateRangePicker/__tests__/DateRangePicker.test.tsx"
import DateRangePicker from '@/components/DateRangePicker';
import { formatMonth } from '@/utils/date';
import { fireEvent, render, screen } from '@testing-library/react';
import dayjs from 'dayjs';

describe('DateRangePicker Component', () => {
  beforeEach(() => {
    render(<DateRangePicker />);
  });

  describe('Date Button Functionality', () => {
    test('marks the button representing today\'s date with a "today" class', () => {
      const today = dayjs().format('YYYY-MM-DD');
      const todayButton = screen.getByText(
        (_content, element) =>
          element!.tagName.toLowerCase() === 'button' && element!.getAttribute('data-date') === today
      );
      expect(todayButton.getAttribute('class')).toMatch('today');
    });
  });

  describe('Month Selection Functionality', () => {
    const currentMonth = dayjs();
    const prevMonth = currentMonth.subtract(1, 'month');
    const nextMonth = currentMonth.add(1, 'month');

    test('displays current month', () => {
      expect(screen.getByText(formatMonth(currentMonth))).toBeInTheDocument();
    });

    test('displays October 2023 when previous month button is clicked', () => {
      fireEvent.click(screen.getByRole('button', { name: '<' }));
      expect(screen.getByText(formatMonth(prevMonth))).toBeInTheDocument();
    });

    test('displays December 2023 when next month button is clicked', () => {
      fireEvent.click(screen.getByRole('button', { name: '>' }));
      expect(screen.getByText(formatMonth(nextMonth))).toBeInTheDocument();
    });
  });

  describe('Date Selection Functionality', () => {
    test('activates selected start and end dates', () => {
      const startButton = screen.getByRole('button', { name: '10日' });
      const endButton = screen.getByRole('button', { name: '15日' });

      fireEvent.click(startButton);
      expect(startButton.getAttribute('class')).toMatch('active');

      fireEvent.click(endButton);
      expect(endButton.getAttribute('class')).toMatch('active');
    });

    test('updates start date when a prior date is selected as end date', () => {
      const startButton = screen.getByRole('button', { name: '10日' });
      const endButton = screen.getByRole('button', { name: '9日' });

      fireEvent.click(startButton);
      fireEvent.click(endButton);

      expect(startButton.getAttribute('class')).not.toMatch('active');
      expect(endButton.getAttribute('class')).toMatch('active');
    });

    test('resets end date and sets start date when a new date is selected after a range', () => {
      const startButton = screen.getByRole('button', { name: '10日' });
      const endButton = screen.getByRole('button', { name: '15日' });
      const newStartButton = screen.getByRole('button', { name: '20日' });

      fireEvent.click(startButton);
      fireEvent.click(endButton);
      fireEvent.click(newStartButton);

      expect(newStartButton.getAttribute('class')).toMatch('active');
      expect(startButton.getAttribute('class')).not.toMatch('active');
      expect(endButton.getAttribute('class')).not.toMatch('active');
    });
  });
});
```

## 測試案例設計

### 初始化測試

在每個測試開始前，我們使用 `beforeEach` 來渲染 `DateRangePicker` 組件。這確保了每個測試案例都從一個乾淨的狀態開始。

```tsx
beforeEach(() => {
  render(<DateRangePicker />);
});
```

### 日期按鈕功能測試

```tsx
describe('Date Button Functionality', () => {
  // ...
});
```

#### 是否正確標記當前日期按鈕

```tsx
test('marks the button representing today\'s date with a "today" class', () => {
  const today = dayjs().format('YYYY-MM-DD');
  const todayButton = screen.getByText(
    (_content, element) => element!.tagName.toLowerCase() === 'button' && element!.getAttribute('data-date') === today
  );
  expect(todayButton.getAttribute('class')).toMatch('today');
});
```

### 月份選擇功能測試

```tsx
describe('Month Selection Functionality', () => {
  const currentMonth = dayjs();
  const prevMonth = currentMonth.subtract(1, 'month');
  const nextMonth = currentMonth.add(1, 'month');

  // ...
});
```

#### 是否正確顯示當前月份

我們使用 `dayjs` 庫來處理日期，並使用 `formatMonth` 函式來格式化月份。我們使用 `getByText` 來確保當前月份正確顯示。

```tsx
test('displays current month', () => {
  expect(screen.getByText(formatMonth(currentMonth))).toBeInTheDocument();
});
```

#### 點擊前一個月份按鈕後，是否正確顯示相應月份

這裡我們測試點擊前後月份按鈕後，是否正確顯示相應月份。

```tsx
test('displays October 2023 when previous month button is clicked', () => {
  fireEvent.click(screen.getByRole('button', { name: '<' }));
  expect(screen.getByText(formatMonth(prevMonth))).toBeInTheDocument();
});
```

#### 點擊下個月份按鈕後，是否正確顯示相應月份

```tsx
test('displays December 2023 when next month button is clicked', () => {
  fireEvent.click(screen.getByRole('button', { name: '>' }));
  expect(screen.getByText(formatMonth(nextMonth))).toBeInTheDocument();
});
```

### 日期選擇功能測試

```tsx
describe('Date Selection Functionality', () => {
  // ...
});
```

#### 正常選擇日期範圍

```tsx
test('activates selected start and end dates', () => {
  const startButton = screen.getByRole('button', { name: '10日' });
  const endButton = screen.getByRole('button', { name: '15日' });

  fireEvent.click(startButton);
  expect(startButton.getAttribute('class')).toMatch('active');

  fireEvent.click(endButton);
  expect(endButton.getAttribute('class')).toMatch('active');
});
```

#### 如果第二次選擇的日期早於第一次選擇的日期，則會更新開始日期

```tsx
test('updates start date when a prior date is selected as end date', () => {
  const startButton = screen.getByRole('button', { name: '10日' });
  const endButton = screen.getByRole('button', { name: '9日' });

  fireEvent.click(startButton);
  fireEvent.click(endButton);

  expect(startButton.getAttribute('class')).not.toMatch('active');
  expect(endButton.getAttribute('class')).toMatch('active');
});
```

#### 如果已經選擇了日期範圍，那麼再一次選擇日期時，會重置結束日期並且設置新的開始日期

```tsx
test('resets end date and sets start date when a new date is selected after a range', () => {
  const startButton = screen.getByRole('button', { name: '10日' });
  const endButton = screen.getByRole('button', { name: '15日' });
  const newStartButton = screen.getByRole('button', { name: '20日' });

  fireEvent.click(startButton);
  fireEvent.click(endButton);
  fireEvent.click(newStartButton);

  expect(newStartButton.getAttribute('class')).toMatch('active');
  expect(startButton.getAttribute('class')).not.toMatch('active');
  expect(endButton.getAttribute('class')).not.toMatch('active');
});
```

## 結論

這些測試不僅幫助我們確保 `DateRangePicker` 組件的可靠性，還展示了 Vitest 和 Testing Library 在現代 React 開發中的實際應用。透過這些工具，開發者可以高效地寫出具有自我驗證能力的代碼，提升整體的開發質量和用戶體驗。
