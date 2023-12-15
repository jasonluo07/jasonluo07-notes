---
title: '什麼是 Redux？'
tags:
  - transcript
---

- Redux 是一個單一資料來源的狀態管理工具，也就是說，所有的狀態都會被集中儲存在一個地方，這個地方稱為 store，所以狀態管理，這件事，會變得更加一致且容易預測。在大型應用程式中特別有幫助，因為 Redux 有效地解決狀態在多個組件中散亂分布的問題，避免了在組件之間的不斷傳遞 prop。
- 可以將 Redux 想像成一個客戶端的資料庫。比如說，點擊一個按鈕，會派遣一個動作（action），這個動作是一個物件，裡面包含了一個類型（type）和一個負載（payload）。
  - type 是用來描述發生的特定事件，
  - payload 是用來這個事件的相關資訊。
- 這個動作會被傳遞到 reducer，reducer 是一個純函式，它會根據動作的 type 和 payload 來更新 store。
- 當 store 更新時，Redux 會通知所有訂閱的組件，然後組件就可以從 store 中取得最新的狀態。

## 參考資料

- [Fireship | Redux in 100 Seconds](https://www.youtube.com/watch?v=_shA5Xwe8_4)
