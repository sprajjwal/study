const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

function curry(fn) {
  return function curried (...args) {
    if(fn.length === args.length) {
      return (fn(...args))
    } else {
      return function newCurry(...newArgs) {
        return curried(...args,...newArgs)
      }
    }
  }
}

const curriedJoin = curry(join)
curriedJoin(1, 2, 3) // '1_2_3'
console.log(curriedJoin(1)(2) (2)) // '1_2_3'
// curriedJoin(1, 2)(3) // '1_2_3'

