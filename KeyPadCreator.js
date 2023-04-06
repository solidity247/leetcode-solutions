function keyPadMaker (charCase) {

  
  const result = {};    // we expect something like { 2: ["a", "b", "c"], 2: ... }
  
  let currentChar = charCase === 'upper' ?  65 : 97 ;    // char "a" in UNICODE table 
  
  for(let digit = 2; digit <= 9; digit++){
    let charsQuantity = 3;
    if(digit === 7 || digit === 9){
      charsQuantity = 4;
    }
    result[digit] = [];

    for(let buttonCharIndex = 0; buttonCharIndex < charsQuantity; buttonCharIndex++){
      const charToButton = String.fromCharCode(currentChar);
      result[digit].push(charToButton)
      currentChar++;
    }
  }
  return result;
}

const keyPad = keyPadMaker;

console.log('keyPad1 =', keyPad())
console.log('keyPad2 =', keyPad('upper'))
