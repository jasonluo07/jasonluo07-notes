# UI: Date Range Picker

## 說明

- A date range picker is a component that allows the user to select a range of dates.

## 樣式

- Date Range Picker

- Header

- Month Select
  - hover

## 邏輯

### 顯示月份

```tsx
const [currentMonth, setCurrentMonth] = useState(dayjs());

currentMonth.format('YYYY年M月'); // 2023年11月
```

### 切換月份

```tsx
function handleGoToPrevMonth() {
  setCurrentMonth(currentMonth.subtract(1, 'month'));
}

function handleGoToNextMonth() {
  setCurrentMonth(currentMonth.add(1, 'month'));
}

<button onClick={handleGoToPrevMonth}>&lt;</button>
<button onClick={handleGoToNextMonth}>&gt;</button>
```

### Date Range Picker 的高度調整

因為每個月的天數不同，例如：有些月份，星期數只有 4 個，而有些月份，星期數有 6 個，所以要調整 Date Range Picker 的高度。

二月 28 天，又剛好星期一是 1 號，所以星期數有 4 個。
1,2,3,4,5,6,7
8,9,10,11,12,13,14
15,16,17,18,19,20,21
22,23,24,25,26,27,28

假設一個月有 31 天，星期日是 1 號，所以星期數有 6 個。
-,-,-,-,-,-,1
2,3,4,5,6,7,8
9,10,11,12,13,14,15
16,17,18,19,20,21,22
23,24,25,26,27,28,29
30,31,-,-,-,-,-

### 顯示日期

除了要顯示當月的日期，還要顯示上個月和下個月的日期。

### 選擇日期範圍

### 視覺上突出顯示選擇的日期範圍

## 要如何測試？

## 問題

1. Date 和 Day 的名詞差異
   Date 指的是日期，例如：2021/10/10，而 Day 指的是星期幾，例如：星期日、星期一、星期二、星期三、星期四、星期五、星期六。

## 參考

- https://www.robinwieruch.de/vitest-react-testing-library/
