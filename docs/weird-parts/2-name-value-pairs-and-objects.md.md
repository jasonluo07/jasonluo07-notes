---
sidebar_position: 2
---

# 2. 名稱/值對、物件

## 名詞解釋

### 名稱/值對（Name/Value Pair）

> Weird Parts
>
> - Name/Value Pair: a name which maps to a unique value
>
>   - The name may be defined more than once, but only can have one value in any given context.
>   - The value may be more name/value pairs.

### 物件（Object）

> Weird Parts
>
> - Object: a collection of name/value pairs
>   - The simplest definition when talking about JavaScript.

```javascript
Address = {
  Street: 'Main',
  Number: 100,
  Apartment: {
    Floor: 3,
    Number: 301,
  },
};
```

## 總結

- 名稱/值對（name/value pair）是一個名稱（name）和一個（value）的組合。
- 物件（object）是一個名稱/值對的集合。

## 參考

[8. Conceptual Aside: Name/Value Pairs and Objects](https://www.udemy.com/course/understand-javascript/learn/lecture/2237448#overview)
