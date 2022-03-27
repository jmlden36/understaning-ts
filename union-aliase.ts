// alias can be any name that is not built into JS or TS
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
function combine(
  
  input1: Combinable,
  //union types
  input2: number | string, 
  //literal types
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result;
  // }
  
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combinedNames = combine('Matt', 'Briana', 'as-text');
console.log(combinedNames);