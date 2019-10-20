---
title: Set Uniqueness and Ordering
tags:
  - Set
  - spread
order: 12
date: '2019-09-29'
answers:
  - '5 2'
  - '5 3'
  - '4 2 // correct'
  - '4 3'
allocatedTime: 40
---

In the following problem, we use the `Set` object and spread operator to create a new array. What gets logged (to consider: Are items forced to be unique? Are they sorted?)

```javascript
const arr = [...new Set([3, 1, 2, 3, 4])];
console.log(arr.length, arr[2]);
```

<!-- explanation -->

The `Set` object will force unique elements but will not change order. The resultant `arr` array will be `[3, 1, 2, 4]`, meaning `arr.length` is `4` and `arr[2]` (the third element of the array) is `2`.
