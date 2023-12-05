---
sidebar_position: 1
---

# What is a pattern? / 什麼是設計模式？

---

**Design patterns** are typical solutions to commonly occurring problems in software design. They are like pre-made blueprints that you can customize to solve a recurring design problem in your code.

**設計模式**是軟體設計中常見問題的典型解決方案。它們就像預先製作的藍圖，你可以自定義以解決程式碼中反覆出現的設計問題。

You can’t just find a pattern and copy it into your program, the way you can with off-the-shelf functions or libraries. The pattern is not a specific piece of code, but a general concept for solving a particular problem. You can follow the pattern details and implement a solution that suits the realities of your own program.

你不能像使用現成的函式或函式庫那樣，僅僅找到一個模式並將其複製到你的程式中。模式不是特定的程式碼片段，而是解決特定問題的一般概念。你可以遵循模式的細節並實現適合自己程式實際情況的解決方案。

Patterns are often confused with algorithms, because both concepts describe typical solutions to some known problems. While an algorithm always defines a clear set of actions that can achieve some goal, a pattern is a more high-level description of a solution. The code of the same pattern applied to two different programs may be different.

模式經常與演算法混淆，因為這兩種概念都描述了對一些已知問題的典型解決方案。雖然演算法總是定義一套清晰的行動組合可以達成某個目標，但模式是對解決方案的更高層次的描述。相同模式應用於兩個不同的程式的程式碼可能會有所不同。

An analogy to an algorithm is a cooking recipe: both have clear steps to achieve a goal. On the other hand, a pattern is more like a blueprint: you can see what the result and its features are, but the exact order of implementation is up to you.

演算法的一個類比是食譜：兩者都有清晰的步驟來實現一個目標。另一方面，模式更像是一個藍圖：你可以看到結果及其特徵是什麼，但具體的實施順序則由你決定。

## 模式由什麼組成？ / What does the pattern consist of?

Most patterns are described very formally so people can reproduce them in many contexts. Here are the sections that are usually present in a pattern description:

大多數模式都被非常正式地描述，以便人們可以在許多情境中複製它們。以下是模式描述中通常存在的部分：

- **Intent** of the pattern briefly describes both the problem and the solution.
  **意圖**簡要描述了問題和解決方案。
- **Motivation** further explains the problem and the solution the pattern makes possible.
  **動機**進一步解釋了模式可能實現的問題和解決方案。
- **Structure** of classes shows each part of the pattern and how they are related.
  類別的**結構**顯示了模式的每個部分以及它們之間的關係。
- **Code example** in one of the popular programming languages makes it easier to grasp the idea behind the pattern.
  流行程式語言中的**程式碼範例**使得更容易掌握模式背後的想法。

Some pattern catalogs list other useful details, such as applicability of the pattern, implementation steps and relations with other patterns.

一些模式目錄列出了其他有用的細節，例如模式的適用性、實施步驟和與其他模式的關係。
