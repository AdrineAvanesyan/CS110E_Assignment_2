function binaryAddition(num1, num2) {
    let result = [];
    let carry = 0;
    

    for(let i = num1.length-1; i >= 0; i--) {
      if((num1[i] === 1 && num2[i] === 1)) {
        if(carry) {
         result.unshift(1) 
        } else {
         result.unshift(0);  
        }
        carry = 1;
      } else if((num1[i] === 0 && num2[i] === 0)) {
        if(carry) {
         result.unshift(1) 
        } else {
         result.unshift(0);  
        } 
        carry = 0;
      } else if((num1[i] === 1 && num2[i] === 0) || (num1[i] === 0 && num2[i] === 1)) {
        if(carry) {
         result.unshift(0)
         carry = 1;
        } else {
         result.unshift(1);  
        }
      }  
    }
    if(carry) result.unshift(1);
    return result;
  } 