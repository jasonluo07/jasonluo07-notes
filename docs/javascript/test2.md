# 正向布林值

## 範例

```javascript
// Bad
if (!isRunning) {
  // ...
}

// Good
if (isStopped) {
  // ...
}
```

<!-- 變數名稱 -->

```javascript
if (不下雨) {
  出去玩();
} else {
  呆在家();
}
```

```javascript
if (下雨) {
  呆在家();
} else {
  出去玩();
}
```

## 參考

- [Google Testing Blog: Improve Readability With Positive Booleans](https://testing.googleblog.com/2023/10/improve-readability-with-positive.html)
