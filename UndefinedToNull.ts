
function undefinedToNull(arg) {

  if (arg === undefined) {return null};

  // arg is data type
    // arg is array
  if(Array.isArray(arg)) {
    return arg.map(undefinedToNull);
  }
  if (typeof(arg) !== 'object') {
    return arg === undefined ? null : arg
  }
    // arg is object
  for (let key in arg) {
    arg[key] = undefinedToNull(arg[key])
  }

  // arg isnt undefined
  return arg;
}


// console.log('object', undefinedToNull({a: undefined, b: 'BFE.dev'}))
// console.log('object of array', undefinedToNull({a: ['BFE.dev', undefined, 'bigfrontend.dev']}))

// console.log(undefinedToNull(undefined))

// console.log(undefinedToNull(['a', null, undefined]))

console.log(undefinedToNull({a: {b: ['s', undefined, undefined, null]}}))