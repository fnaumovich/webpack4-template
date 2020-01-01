export function debounce(fn, interval) {
  let lastCall = null;

  return function (...args) {
    if (lastCall) {
      clearInterval(lastCall)
    }
    lastCall = setTimeout(() => {
      fn(...args);
    }, interval);
  }
}
