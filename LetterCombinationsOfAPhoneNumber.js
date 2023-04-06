/**
 * @param {string} digits
 * @return {string[]}
 */

function recursiveCombinator (arr) {
    if(arr.length === 1) {
        return arr[0];
    } else {
    const suffixes = arr.pop();    
    return recursiveCombinator(arr).reduce((acc, combo)=>{
        acc = [...acc, ...suffixes.map(suffix=> combo + suffix)]    //
        return acc;
    }, [])
    }
}

var letterCombinations = function(digits) {

    if(digits.length === 0) return [];

    const keyPad = {
  '2': [ 'a', 'b', 'c' ],
  '3': [ 'd', 'e', 'f' ],
  '4': [ 'g', 'h', 'i' ],
  '5': [ 'j', 'k', 'l' ],
  '6': [ 'm', 'n', 'o' ],
  '7': [ 'p', 'q', 'r', 's' ],
  '8': [ 't', 'u', 'v' ],
  '9': [ 'w', 'x', 'y', 'z' ]
};
    
    const combos = digits
    .split('')
    .map(digit=>keyPad[digit]);
    const result = recursiveCombinator(combos);
    return result;
};
