

// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  if(!arr) { return [] };
  if (depth === 0) {
    return arr;
  }
  let newArray = []; 
  arr.forEach(item => {
    if(!Array.isArray(item)) {
      newArray.push(item);
    } else {
      newArray = [...newArray, ...(flat(item, depth - 1))]
    }
  });
  return newArray;
}


// console.log(flat([1, 2, 3, [4], [2, [2,3, 1]]]))
//[ 1, 2, 3, 4, 2, [ 2, 3, 1 ] ]

// console.log(flat([1, 2, 3, [4], [2, [2,3, 1]]], 2))
// [ 1, 2, 3, 4, 2, 2, 3, 1]

// console.log(flat([1, 2, 3, [4], [2, [2,3, 1]]], 3))
// [1, 2, 3, 4, 2, 2, 3, 1]

// console.log(flat([1,[2],[3,[4]]]))
// [ 1, 2, 3, [ 4 ] ]