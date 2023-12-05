<!-- 請你完成以下文章草稿 -->

# 設計模式：Proxy 教學的逐字稿

## 什麼是 Proxy？

今天要來講解的設計模式是 Proxy。Proxy 這個詞翻譯成中文是「代理」或「代理人」的意思。更進一步地將「代理」白話一點，就是別人的替身。以真實世界的例子來說，我們在銀行辦理業務的時候，遇到的櫃檯人員就是銀行的代理人。我們不直接和銀行溝通，而是透過代理人來溝通。在程式設計中，Proxy 是一個類別或物件，它可以代理其他類別或物件的行為，像是讀取或修改屬性。

## Proxy 的好處

Proxy 可以在不修改原始物件的情況下，對原始物件進行擴充或修改。Proxy 可以將代理的邏輯與原始物件的邏輯分離，讓程式碼更容易維護。比如：

- 紀錄物件的存取紀錄
- 驗證物件的存取權限

## 如何實現 Proxy？

給定一個 person 物件

```js
const person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American',
};
```

我們可以透過 Proxy 來存取 person 物件的屬性

```js
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${String(prop)} is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${String(prop)} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
  },
});
```

透過 Proxy 存取 person 物件的屬性

```js
personProxy.name; // The value of name is John Doe
personProxy.age; // The value of age is 42
```

## Proxy 的優點

- Proxy 可以在不修改原始物件的情況下，對原始物件進行擴充或修改。
- Proxy 可以將代理的邏輯與原始物件的邏輯分離，讓程式碼更容易維護。
