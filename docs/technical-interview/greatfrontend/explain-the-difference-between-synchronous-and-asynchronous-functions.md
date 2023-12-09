---
sidebar_position: 99
title: 說明同步與非同步函式之間的差異
tags:
  - Translation
  - Finished
  - High
  - Hard
---

> Explain the difference between synchronous and asynchronous functions

Synchronous functions are blocking while asynchronous functions are not. In synchronous functions, statements complete before the next statement is run. In this case, the program is evaluated exactly in order of the statements and execution of the program is paused if one of the statements take a very long time.

同步函式是阻塞的，而非同步函式則不是。在同步函式中，一個語句完成之後，下一個語句才會執行。在這種情況下，程式按照語句的順序準確地進行執行，如果其中一個語句花費了很長時程式的執行會被暫停。

Asynchronous functions usually accept a callback as a parameter and execution continue on the next line immediately after the asynchronous function is invoked. The callback is only invoked when the asynchronous operation is complete and the call stack is empty. Heavy duty operations such as loading data from a web server or querying a database should be done asynchronously so that the main thread can continue executing other operations instead of blocking until that long operation to complete (in the case of browsers, the UI will freeze).

非同步函式通常接受一個回呼函式作為參數，並且在非同步函式被調用後立即繼續執行下一行程式碼。回呼函式只有在非同步操作完成且呼叫堆疊為空時才會被調用。如從網路伺服器加載資料或查詢資料庫等繁重操作應該以非同步方式進行，這樣主執行緒可以繼續執行其他操作，而不是等待那個長時間的操作完成（在瀏覽器的情況下，使用者界面會被凍結）。

## 參考資料

- [ExplainThis | 請說明瀏覽器中的事件循環 (Event Loop)](https://www.explainthis.io/zh-hant/swe/what-is-event-loop)
- [GreatFrontEnd | Explain the difference between synchronous and asynchronous functions](https://www.greatfrontend.com/questions/quiz/explain-the-difference-between-synchronous-and-asynchronous-functions)
