// prime numbers are starting from 2 to 37

let numbers = [];
let primes = []; 
let maxNumber = 37;

for(let i = 2; i<=maxNumber; i++) 
{
 numbers.push(i);   
}

while(numbers.length)
 {
    primes.push(numbers.shift());
    numbers = numbers.filter(
        function(i)
        { return i%primes[primes.length-1]!=0}
    );
}

console.log(primes);