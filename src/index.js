import './styles/index.css';

import Axios from './scripts/adapters';
import _throttle from 'lodash/throttle';

const promiseSayHello = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('Hello world with delay!');
    }, 100)
  })
};

const promiseSayHelloWithoutDelay = () => {
  return new Promise(resolve => {
    resolve('Hello world without delay!');
  })
};

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};


const button = document.querySelector('button');

button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 1'));
  console.log('Listener 1');
});

button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 2'));
  console.log('Listener 2');
});

button.click();
