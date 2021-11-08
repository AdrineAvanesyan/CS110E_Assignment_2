let x = 24;

// the binary value of 24 is 11000 and inverse will be 00111

 result = x.toString(2).replace(/1/g, 'a').replace(/0/g, '1').replace(/a/g, '0');


console.log(result);