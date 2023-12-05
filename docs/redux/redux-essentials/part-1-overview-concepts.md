---
sidebar_position: 1
---

# Part 1: Redux Overview and Concepts

import DetailedExplanation from '../../../src/components/DetailedExplanation'

:::tip What You'll Learn

- What Redux is and why you might want to use it
- Key Redux terms and concepts
- How data flows through a Redux app

:::

## Introduction

Welcome to the Redux Essentials tutorial! **This tutorial will introduce you to Redux and teach you how to use it the right way, using our latest recommended tools and best practices**. By the time you finish, you should be able to start building your own Redux applications using the tools and patterns you've learned here.

In Part 1 of this tutorial, we'll cover the key concepts and terms you need to know to use Redux, and in [Part 2: Redux App Structure](./part-2-app-structure) we'll examine a basic React + Redux app to see how the pieces fit together.

Starting in [Part 3: Basic Redux Data Flow](./part-3-data-flow), we'll use that knowledge to build a small social media feed app with some real-world features, see how those pieces actually work in practice, and talk about some important patterns and guidelines for using Redux.

### How to Read This Tutorial

This page will focus on showing you _how_ to use Redux the right way, and explain just enough of the concepts so that you can understand how to build Redux apps correctly.

We've tried to keep these explanations beginner-friendly, but we do need to make some assumptions about what you know already:

:::important Prerequisites

- Familiarity with [HTML & CSS](https://internetingishard.netlify.app/html-and-css/index.html).
- Familiarity with [ES2015 syntax and features](https://www.taniarascia.com/es6-syntax-and-feature-overview/)
- Knowledge of React terminology: [JSX](https://react.dev/learn/writing-markup-with-jsx), [State](https://react.dev/learn/state-a-components-memory), [Function Components](https://react.dev/learn/your-first-component), [Props](https://react.dev/learn/passing-props-to-a-component), and [Hooks](https://react.dev/reference/react)
- Knowledge of [asynchronous JavaScript](https://javascript.info/promise-basics) and [making AJAX requests](https://javascript.info/fetch)

:::

**If you're not already comfortable with those topics, we encourage you to take some time to become comfortable with them first, and then come back to learn about Redux**. We'll be here when you're ready!

You should make sure that you have the React and Redux DevTools extensions installed in your browser:

- React DevTools Extension:
  - [React DevTools Extension for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  - [React DevTools Extension for Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- Redux DevTools Extension:
  - [Redux DevTools Extension for Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
  - [Redux DevTools Extension for Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

<DetailedExplanation title="Detailed Explanation: Why Are They Called 'Reducers?'" >

The [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method lets you take an array of values, process each item in the array one at a time, and return a single final result. You can think of it as "reducing the array down to one value".

`Array.reduce()` takes a callback function as an argument, which will be called one time for each item in the array. It takes two arguments:

- `previousResult`, the value that your callback returned last time
- `currentItem`, the current item in the array

The first time that the callback runs, there isn't a `previousResult` available, so we need to also pass in an initial value that will be used as the first `previousResult`.

If we wanted to add together an array of numbers to find out what the total is, we could write a reduce callback that looks like this:

```js
const numbers = [2, 5, 8];

const addNumbers = (previousResult, currentItem) => {
  console.log({ previousResult, currentItem });
  return previousResult + currentItem;
};

const initialValue = 0;

const total = numbers.reduce(addNumbers, initialValue);
// {previousResult: 0, currentItem: 2}
// {previousResult: 2, currentItem: 5}
// {previousResult: 7, currentItem: 8}

console.log(total);
// 15
```

Notice that this `addNumbers` "reduce callback" function doesn't need to keep track of anything itself. It takes the `previousResult` and `currentItem` arguments, does something with them, and returns a new result value.

**A Redux reducer function is exactly the same idea as this "reduce callback" function!** It takes a "previous result" (the `state`), and the "current item" (the `action` object), decides a new state value based on those arguments, and returns that new state.

If we were to create an array of Redux actions, call `reduce()`, and pass in a reducer function, we'd get a final result the same way:

```js
const actions = [{ type: 'counter/increment' }, { type: 'counter/increment' }, { type: 'counter/increment' }];

const initialState = { value: 0 };

const finalResult = actions.reduce(counterReducer, initialState);
console.log(finalResult);
// {value: 3}
```

We can say that **Redux reducers reduce a set of actions (over time) into a single state**. The difference is that with `Array.reduce()` it happens all at once, and with Redux, it happens over the lifetime of your running app.

</DetailedExplanation>
