function binarySearch(target, arr) {
  if(arr.length === 0) return -1

  for(let left=0, right = arr.length - 1; left < right;) {
    const mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return -1
}

console.log('expected: 0', 'answer: ', binarySearch(2, [2, 3, 5, 6, 9, 10, 11]))
console.log('expected: -1', 'answer: ', binarySearch(1, [2, 3, 5, 6, 9, 10, 11]))
console.log('expected: 0', 'answer: ', binarySearch(2, [2, 3, 5, 6, 9, 10]))
console.log('expected: -1', 'answer: ', binarySearch(1, [2, 3, 5, 6, 9, 10]))
