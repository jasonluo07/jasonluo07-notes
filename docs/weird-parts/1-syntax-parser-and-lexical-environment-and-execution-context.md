---
sidebar_position: 1
---

# 1. 語法解析器、詞彙環境、執行上下文

在這篇文章中，我們將深入探討 JavaScript 的三個核心概念：語法解析器、詞彙環境和執行上下文。理解這些概念對於深入理解 JavaScript 的運作原理非常重要。

## 名詞解釋

### 語法解析器（Syntax Parser）

> Weird Parts
>
> - Syntax Parser: a program that reads your code and determines what it does and if its grammar is valid
> - Your code isn't magic. Someone else wrote a program to translate it for the computer.

### 詞彙環境（Lexical Environment）

> Weird Parts
>
> - Lexical Environment: where something sits physically in the code you write
> - 'Lexical' means 'having to do with words or grammar'. A lexical environment exists in programming languages in which **where** you write something is important.

### 執行上下文（Execution Context）

> Weird Parts
>
> - Execution Context: a wrapper to help manage the code that is running
> - There are lots of lexical environments. Which one is currently running is managed via execution contexts. It can contain things beyond what you've written in your code.

## 總結

- 語法解析器（syntax parser）是一個程式，用來判斷程式碼是否合乎語法。此外，它是直譯器（interpreter）的一部份。
- 詞彙環境（lexical environment）是程式碼在實際上被寫下的位置。
- 執行上下文（execution context）是一個包裹程式碼的容器，用來管理程式碼的執行。

## 參考

- [7. Conceptual Aside: Syntax Parsers, Execution Contexts, and Lexical Environments | JavaScript: Understanding the Weird Parts
  ](https://www.udemy.com/course/understand-javascript/learn/lecture/2237446#overview)
- [Syntax Parser - JavaScript Complete Grandmaster 2023 [Video]](https://www.oreilly.com/library/view/javascript-complete-grandmaster/9781804611685/video6_3.html)
