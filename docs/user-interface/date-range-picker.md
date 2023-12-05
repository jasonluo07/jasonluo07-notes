---
sidebar_position: 1
title: '實作 Date Range Picker'
---

本文旨在詳細介紹如何從頭開始實作一個 React 日期範圍選擇器組件。這將包括設置開發環境、構建核心功能，以及測試。

## 開發環境設置

開發初期，我們需確保具備合適的工具和依賴。本案例使用 React 18、Day.js、normalize.css，以及一系列開發工具，如 TypeScript、Vite、Vitest。這些工具和庫的組合為我們提供了一個強大、高效的開發環境。

```json title="package.json"
{
  // ...
  "dependencies": {
    "clsx": "^2.0.0",
    "dayjs": "^1.11.10",
    "normalize.css": "^8.0.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.1.4",
    "@testing-library/react": "^14.1.2",
    "@trivago/prettier-plugin-sort-imports": "^4.3.0",
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "@typescript-eslint/eslint-plugin": "^6.10.0",
    "@typescript-eslint/parser": "^6.10.0",
    "@vitejs/plugin-react": "^4.2.0",
    "eslint": "^8.53.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.4",
    "jsdom": "^23.0.0",
    "prettier": "3.1.0",
    "typescript": "^5.2.2",
    "vite": "^5.0.0",
    "vite-tsconfig-paths": "^4.2.1",
    "vitest": "^0.34.6"
  }
  // ...
}
```

## 專案結構

在專案結構上，我們將所有的組件放在 `src/components` 文件夾下，並將工具函式放在 `src/utils` 文件夾下。`src/main.tsx` 是應用的入口文件，而 `src/App.tsx` 則是應用的主要組件。`src/App.tsx` 包含了 `DateRangeDisplay` 和 `DateRangePicker` 組件，前者用於顯示選擇的日期範圍，後者用於選擇日期範圍。`DateRangePicker` 組件是我們的核心組件，它將被用於測試。

```
.
├── src
│   ├── components
│   │   ├── DateRangeDisplay
│   │   │   ├── index.module.css
│   │   │   └── index.tsx
│   │   └── DateRangePicker
│   │       ├── __tests__
│   │       │   └── DateRangePicker.test.tsx
│   │       ├── Calendar.module.css
│   │       ├── Calendar.tsx
│   │       ├── DateButton.module.css
│   │       ├── DateButton.tsx
│   │       ├── Header.module.css
│   │       ├── Header.tsx
│   │       ├── index.module.css
│   │       └── index.tsx
│   ├── utils
│   │   └── date.ts
│   ├── App.module.css
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 核心邏輯實現

首先，我們需要處理日期邏輯。在 `src/utils/date.ts` 文件中，我們實現了幾個關鍵函式。`getIsDateInRange` 函式判斷特定日期是否在選定的日期範圍內。而 `getDatesInCurrentMonth`、`getPartialDatesInPrevMonth` 和 `getPartialDatesInNextMonth` 函式則分別用於獲取當前月份、前一月份和後一月份的部分日期，以實現日曆的連續顯示。

```tsx title="src/utils/date.ts"
import dayjs, { type Dayjs } from 'dayjs';

export const getIsDateInRange = (date: Dayjs, startDate: Dayjs | null, endDate: Dayjs | null) => {
  if (!startDate) return false;
  if (!endDate) return date.isSame(startDate, 'day');
  return date.isBetween(startDate, endDate, 'day', '[]');
};

export const getDatesInCurrentMonth = (currentMonth: Dayjs) => {
  return Array.from({ length: currentMonth.daysInMonth() }, (_, i) => i + 1);
};

export const getPartialDatesInPrevMonth = (currentMonth: Dayjs) => {
  const firstDayOfCurrentMonth = currentMonth.startOf('month').day() || 7;
  const prevMonth = currentMonth.subtract(1, 'month');
  const daysInPrevMonth = prevMonth.daysInMonth();

  return Array.from(
    { length: firstDayOfCurrentMonth - 1 },
    (_, i) => daysInPrevMonth - (firstDayOfCurrentMonth - 1) + 1 + i
  );
};

export const getPartialDatesInNextMonth = (currentMonth: Dayjs) => {
  const lastDayOfCurrentMonth = currentMonth.endOf('month').day() || 7;
  return Array.from({ length: 7 - lastDayOfCurrentMonth }, (_, i) => i + 1);
};

export const formatMonth = (date: Dayjs) => dayjs(date).format('YYYY年M月');
```

## 基礎組件

### src/main.tsx

```tsx title="src/main.tsx"
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### src/App.tsx

```tsx title="src/App.tsx"
import DateRangeDisplay from '@/components/DateRangeDisplay';
import DateRangePicker from '@/components/DateRangePicker';
import type { Dayjs } from 'dayjs';
import { useState } from 'react';

import styles from './App.module.css';

const App = () => {
  const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null]>([null, null]);

  const handleChange = (startDate: Dayjs | null, endDate: Dayjs | null) => {
    setDateRange([startDate, endDate]);
  };

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <h1>Date Range Picker</h1>
        <DateRangeDisplay dateRange={dateRange} />
        <DateRangePicker onChange={handleChange} />
      </div>
    </div>
  );
};

export default App;
```

## 組件結構與實現

在組件的實現上，我們將功能拆分為 `Header`, `Calendar`, 和 `DateButton`。`Header` 組件負責顯示和切換月份。`Calendar` 組件則根據當前月份渲染日期按鈕，並使用 `DateButton` 組件來展示每一天。`DateButton` 組件是一個靈活的小部件，根據其是否被選中、是否為今天、是否屬於當前月份來改變樣式。

```tsx title="src/components/DateRangePicker/index.tsx"
import dayjs, { type Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import { useCallback, useEffect, useState } from 'react';

import Calendar from './Calendar';
import Header from './Header';
import styles from './index.module.css';

dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);

type DateRangePickerProps = {
  onChange?: (startDate: Dayjs | null, endDate: Dayjs | null) => void;
};

const DateRangePicker = ({ onChange }: DateRangePickerProps) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const handleGoToPrevMonth = useCallback(() => {
    setCurrentMonth(currentMonth.subtract(1, 'month'));
  }, [currentMonth]);

  const handleGoToNextMonth = useCallback(() => {
    setCurrentMonth(currentMonth.add(1, 'month'));
  }, [currentMonth]);

  const handlePickDateRange = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as HTMLButtonElement;
    if (target.tagName !== 'BUTTON') return;

    const pickedDate = dayjs(target.dataset.date);

    if (!startDate || pickedDate.isBefore(startDate) || (startDate && endDate)) {
      setStartDate(pickedDate);
      setEndDate(null);
    } else if (pickedDate.isSameOrAfter(startDate)) {
      setEndDate(pickedDate);
    }
  };

  useEffect(() => {
    if (onChange) {
      onChange(startDate, endDate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  return (
    <div className={styles.dateRangePicker}>
      <Header currentMonth={currentMonth} onGoToPrevMonth={handleGoToPrevMonth} onGoToNextMonth={handleGoToNextMonth} />
      <Calendar
        startDate={startDate}
        endDate={endDate}
        currentMonth={currentMonth}
        onPickDateRange={handlePickDateRange}
      />
    </div>
  );
};

export default DateRangePicker;
```

```tsx title="src/components/DateRangePicker/Header.tsx"
import { formatMonth } from '@/utils/date';
import type { Dayjs } from 'dayjs';

import styles from './Header.module.css';

type HeaderProps = {
  currentMonth: Dayjs;
  onGoToPrevMonth: () => void;
  onGoToNextMonth: () => void;
};

const Header = ({ currentMonth, onGoToPrevMonth, onGoToNextMonth }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <button className={`${styles.monthSelect} ${styles.prevMonth}`} onClick={onGoToPrevMonth}>
        &lt;
      </button>
      <span>{formatMonth(currentMonth)}</span>
      <button className={`${styles.monthSelect} ${styles.nextMonth}`} onClick={onGoToNextMonth}>
        &gt;
      </button>
    </div>
  );
};

export default Header;
```

```tsx title="src/components/DateRangePicker/Calendar.tsx"
import {
  getDatesInCurrentMonth,
  getIsDateInRange,
  getPartialDatesInNextMonth,
  getPartialDatesInPrevMonth,
} from '@/utils/date';
import dayjs, { type Dayjs } from 'dayjs';
import { useMemo } from 'react';

import styles from './Calendar.module.css';
import DateButton from './DateButton';

type CalendarProps = {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  currentMonth: Dayjs;
  onPickDateRange: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Calendar = ({ startDate, endDate, currentMonth, onPickDateRange }: CalendarProps) => {
  const today = dayjs();

  const { partialDatesInPrevMonth, partialDatesInNextMonth, datesInCurrentMonth } = useMemo(() => {
    return {
      datesInCurrentMonth: getDatesInCurrentMonth(currentMonth),
      partialDatesInPrevMonth: getPartialDatesInPrevMonth(currentMonth),
      partialDatesInNextMonth: getPartialDatesInNextMonth(currentMonth),
    };
  }, [currentMonth]);

  const renderDateButtons = () => {
    const prevMonth = currentMonth.subtract(1, 'month');
    const nextMonth = currentMonth.add(1, 'month');

    return (
      <>
        {partialDatesInPrevMonth.map((date) => {
          const dayjsDate = prevMonth.set('date', date);
          const isDateInRange = getIsDateInRange(dayjsDate, startDate, endDate);

          return <DateButton date={dayjsDate} isDateInRange={isDateInRange} key={`prev-${date}`} />;
        })}
        {datesInCurrentMonth.map((date) => {
          const dayjsDate = currentMonth.set('date', date);
          const isDateInRange = getIsDateInRange(dayjsDate, startDate, endDate);
          const isToday = dayjsDate.isSame(today, 'day');

          return (
            <DateButton
              date={dayjsDate}
              isToday={isToday}
              isCurrentMonth
              isDateInRange={isDateInRange}
              key={`current-${date}`}
            />
          );
        })}
        {partialDatesInNextMonth.map((date) => {
          const dayjsDate = nextMonth.set('date', date);
          const isDateInRange = getIsDateInRange(dayjsDate, startDate, endDate);

          return <DateButton date={dayjsDate} isDateInRange={isDateInRange} key={`next-${date}`} />;
        })}
      </>
    );
  };

  return (
    <div className={styles.calendar} onClick={onPickDateRange}>
      {renderDateButtons()}
    </div>
  );
};

export default Calendar;
```

```tsx title="src/components/DateRangePicker/DateButton.tsx"
import clsx from 'clsx';
import type { Dayjs } from 'dayjs';

import styles from './DateButton.module.css';

type DateButtonProps = {
  date: Dayjs;
  isToday?: boolean;
  isCurrentMonth?: boolean;
  isDateInRange: boolean;
};

const DateButton = ({ date, isToday, isCurrentMonth, isDateInRange }: DateButtonProps) => {
  const className = clsx(styles.dateButton, {
    [styles.today]: isToday,
    [styles.nonCurrentMonth]: !isCurrentMonth,
    [styles.active]: isDateInRange,
  });
  const dateText = date.date() + '日';

  return (
    <button data-date={date.format('YYYY-MM-DD')} className={className}>
      {dateText}
    </button>
  );
};

export default DateButton;
```

## 集成與測試

對於 DateRangePicker 組件的測試部分，我們採用了 Vitest 和 Testing Library 進行集成測試。這些測試聚焦於驗證組件的關鍵功能，例如選擇特定日期、切換月份、以及反應日期選擇的改變。

測試案例涵蓋了以下方面：

- 今日日期標記：測試確保當前日期被正確標記。
- 月份切換功能：透過用戶交互測試月份的前後切換，確保組件能夠正確響應。
- 日期選擇邏輯：測試日期範圍的選擇，包括開始日期和結束日期的設定，並確認選中的日期會正確顯示。

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
    it('marks the button representing today\'s date with a "today" class', () => {
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

    it('displays current month', () => {
      expect(screen.getByText(formatMonth(currentMonth))).toBeInTheDocument();
    });

    it('displays October 2023 when previous month button is clicked', () => {
      fireEvent.click(screen.getByRole('button', { name: '<' }));
      expect(screen.getByText(formatMonth(prevMonth))).toBeInTheDocument();
    });

    it('displays December 2023 when next month button is clicked', () => {
      fireEvent.click(screen.getByRole('button', { name: '>' }));
      expect(screen.getByText(formatMonth(nextMonth))).toBeInTheDocument();
    });
  });

  describe('Date Selection Functionality', () => {
    it('activates selected start and end dates', () => {
      const startButton = screen.getByRole('button', { name: '10日' });
      const endButton = screen.getByRole('button', { name: '15日' });

      fireEvent.click(startButton);
      expect(startButton.getAttribute('class')).toMatch('active');

      fireEvent.click(endButton);
      expect(endButton.getAttribute('class')).toMatch('active');
    });

    it('updates start date when a prior date is selected as end date', () => {
      const startButton = screen.getByRole('button', { name: '10日' });
      const endButton = screen.getByRole('button', { name: '9日' });

      fireEvent.click(startButton);
      fireEvent.click(endButton);

      expect(startButton.getAttribute('class')).not.toMatch('active');
      expect(endButton.getAttribute('class')).toMatch('active');
    });

    it('resets end date and sets start date when a new date is selected after a range', () => {
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

## 結論

透過這次實作，我們不僅學到了如何從零開始構建一個實用的 React 組件，而且還深入了解了 React 組件的最佳實踐、狀態管理和單元測試的重要性。這個 `DateRangePicker` 組件不僅能被用於各種專案中，也為那些希望學習現代前端開發的開發者提供了一個寶貴的學習資源。
