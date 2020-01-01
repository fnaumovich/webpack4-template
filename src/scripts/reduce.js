const euros = [29.76, 41.85, 46.5];
const numbers = [1, 2, 3, 4, 5, 6];
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];
const dataObj = [
  {a: 'happy', b: 'robin', c: ['blue','green']},
  {a: 'tired', b: 'panther', c: ['green','black','orange','blue']},
  {a: 'sad', b: 'goldfish', c: ['green','red']}
];

export const sum = numbers.reduce((sum, item) => sum + item, 0);

export const doubleArray = numbers.reduce((arr, next, index) => {
  arr[index] = next * 2;
  return arr;
}, []);

const count = fruitBasket.reduce((obj, fruit) => {
  // obj[fruit] = obj[fruit] ? obj[fruit] + 1 : 1;
  obj[fruit] = (obj[fruit] || 0) + 1;
  return obj;
}, {});

const flat = data.reduce((arr, item) => {
  arr.push(...item);
  return arr;
}, []);

const colors = dataObj.reduce((arr, item) => {
  item.c.forEach(color => {
    arr.push(color)
  });
  return arr;
}, []);

/* Pipelines */
const increment = input => input + 1;
const decrement = input => input - 1;
const double = input => input * 2;
const halve = input => input / 2;

const pipeline = [increment, double, decrement, halve];

export const result = pipeline.reduce((total, func) => func(total), 12);
