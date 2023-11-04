---
sidebar_position: 1
---

# Singleton（單例模式）

- Singleton 是一種創建型的設計模式，確保一個類別只會有一個實例。

## Singleton 解決了什麼問題？

1. 確保一個類別只會有一個實例。

   → 存取共用資源（資料庫、檔案），

2. 提供了該實例的全域存取點（實務上，會像是 `Singleton.getInstance()`）

   → 確保不會被其他程式碼覆蓋：由於 Singleton 實例是通過特定的 `getInstance()` 方法獲得的，這確保了無法通過其他方式創建類別的新實例，從而保護了實例不會被覆蓋。

## 程式碼實作

![Singleton](https://refactoring.guru/images/patterns/diagrams/singleton/structure-en-2x.png)

### TypeScript

```tsx
class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public someBusinessLogic() {}
}
```

1. 將建構函式設為 private，所以這個類別是不會被 new 的

   ```tsx
   private constructor() {};
   ```

2. 新增一個作為建構函式的 static 方法

   ```tsx
   public static getInstance()
   ```

   - 如果該實例不在，會建立一個實例；否則，回傳已經存在的實例。

## 資料庫

```tsx
class Database {
  private static instance: Database;

  private constructor() {
    // Initialize your database connection here
    console.log('Database initialized');
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public query(sql: string) {
    // Execute SQL queries here
    console.log(`Executing SQL query: ${sql}`);
  }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();

db1.query('SELECT * FROM users');
db2.query('SELECT * FROM products');

console.log(db1 === db2); // Output should be true
```

## JavaScript 要避免 Singleton

In many programming languages, such as Java or C++, it's not possible to directly create objects the way we can in JavaScript. In many programming languages, such as Java or C++, it's not possible to directly create objects the way we can in JavaScript. That created object has the value of the instance of the class, just like the value of `instance` in the JavaScript example.

→ [patterns.dev](https://www.patterns.dev/posts/singleton-pattern#:~:text=In%20many%20programming,the%20JavaScript%20example.)

### Example

```tsx
class Singleton {
  private static instance: Singleton;
  private someProperty: string;

  private constructor() {
    this.someProperty = 'Initial Value';
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public getSomeProperty(): string {
    return this.someProperty;
  }

  public setSomeProperty(value: string): void {
    this.someProperty = value;
  }

  public someBusinessLogic() {
    // Your business logic here
  }
}

// Usage
const singleton = Singleton.getInstance();
console.log(singleton.getSomeProperty()); // Output: 'Initial Value'

singleton.setSomeProperty('New Value');
console.log(singleton.getSomeProperty()); // Output: 'New Value'
```

```tsx
interface Singleton {
  someProperty: string;
  someBusinessLogic: () => void;
}

const singleton: Singleton = {
  someProperty: 'Initial Value',
  someBusinessLogic() {
    // Your business logic here
  },
};

// Usage
console.log(singleton.someProperty); // Output: 'Initial Value'

singleton.someProperty = 'New Value';
console.log(singleton.someProperty); // Output: 'New Value'
```

## 多執行緒實現 Singleton

在多執行緒中，需要考慮到不會多次建立實例。

- double-checked locking：這是一種在多執行緒環境中常用的技巧，用於減少同步的開銷。在進入同步塊之前和之後都會檢查實例是否已經存在。

  ```csharp
  private static readonly object _lock = new object();

  public static Singleton GetInstance(string value)
  {
      if (_instance == null)
      {
          lock (_lock)
          {
              if (_instance == null)
              {
                  _instance = new Singleton();
              }
          }
      }
      return _instance;
  }
  ```

## 參考

- [Refactoring.Guru](https://refactoring.guru/design-patterns/singleton)
- [patterns.dev](https://www.patterns.dev/posts/singleton-pattern)
