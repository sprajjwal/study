

function ObjectGroupBy<T, K extends keyof any>(
  items: Array<T>,
  callback: (item: T) => K
): Record<K, Array<T>> {
  // Your code here

  const newItems = Object.create(null);
  for(const item of items) {
    const key = callback(item);
    if(!newItems[key]) {
      newItems[key] = [];
    }
    newItems[key].push(item);
  }
  return newItems;
}

// Test case
const groups = ObjectGroupBy([0, 1, 2, 3, 4, 5], (item) => item % 2 === 0 ? 'even' : 'odd')

console.log(groups)