---
title: Basic Recursion
tags:
  - recursion
  - slice
order: 17
date: '2019-09-29'
answers:
  - 'Hello World'
  - 'ello World'
  - 'H'
  - 'd // correct'
allocatedTime: 30
---

Consider the following recursive function. If we pass the string `"Hello World"` to it, what gets logged?

```javascript
const myFunc = str => {
  if (str.length > 1) {
    return myFunc(str.slice(1));
  }

  return str;
};

console.log(myFunc('Hello world'));
```

<!-- explanation -->

The first time we call the function, `str.length` is greater than 1 ("Hello World" is 11 characters), so we return the same function called on `str.slice(1)`, which is the string "ello World". We repeat this process until the string is only one character long: the character "d". We then log that character.
