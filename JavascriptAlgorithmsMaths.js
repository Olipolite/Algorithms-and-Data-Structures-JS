// Problem - Give a number 'n', find the first 'n' elemtns of the Fibonacci sequence.
// In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
// The first twot numbers in the sequence are 0 and 1.
// fibonacci(2) = [0,1], fibonacci(3) = [0,1,1]
// fibonacci(7) = [0,1,1,2,3,5,8]

function fibonacci(n) {
 const fib = [0, 1]
 for (let i = 2; i < n; i++) {
    fib[i] = fib[i-1] + fib[i-2];
 }   
 return fib;
}

// Big-O = =(n) becasue it's linear. Space and time complexity is dependet of the size of n. (For loop)

console.log(fibonacci(2)) // [0,1]
console.log(fibonacci(3)) // [0,1,1]
console.log(fibonacci(7)) // [0,1,1,2,3,5,8]

// -------------------------------------------------------

// FACTORIAL
// Give an integer 'n', find the factorial of that integer.-
// In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive intergers less than or equal to 'n'.

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    const arr = [];
    for ( let i = 1; i <= n; i++) {
        arr[i] = i;
    }
     return arr.reduce((acc, curr) => acc * curr)
}

function improvedFactorial(n) {
    let result = 1;
    for ( let i = 2; i <= n; i++) {
        result *= i
    }
    return result;
}
// Big O = O(n)

console.log(factorial(0))
console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(7)) 
console.log(improvedFactorial(5))

// -------------------------------------------------------

// PROBLEM - Give a natural number 'n', determine if the number is prime or not.
// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
// isPrime(5)=true(1*5 or 5*1)  -------  isPrime(4)=false(1*4 or 2*" or 4*1")

function isPrime(n) {
    if (n < 2) {
        return false
    }
    for ( let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true;
}

// Big-O = O(n)

console.log(isPrime(5), "isPrime") // true
console.log(isPrime(4)) // false
console.log(isPrime(17)) // true
console.log(isPrime(16)) // false

// -------------------------------------------------------

//Problem - Give a positive integer 'n', determine if the number is a power of 2 or not. An integer is a power of two if there exists 'x' such that 'n' === 2^x

const isPowerofTwo = (n) => {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n/2
    }
    return true
}

// Big = O(logn) (Because the input size is getting divided by half each iteration)

const isPowerofTwoBitWise = (n) => {
    if(n < 1) {
        return false;
    }
    return (n & (n-1)) === 0;
}

// Big O = O(n) (Because the code only needs to run once, its a constant)

console.log(isPowerofTwo(1), "isPowerofTwo") // true(2^0)
console.log(isPowerofTwo(2)) // true(2^1)
console.log(isPowerofTwo(5)) // false

// -------------------------------------------------------

// Recursive Fibonacci sequence - (Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem, a function that calls itself)
//
//PROBLEM - Give a number 'n', find the nth element of the Fibonacci sequence. (Explanation of Fibonacci on top)^
//

const recursiveFibonacci = (n) => {
    if ( n < 2) {
        return n
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(0), "recursiveFibonacci") // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(6)) // 8
console.log(recursiveFibonacci(7)) // 13

// Big O = O(2^n) - worse than the iteration method in this instance.

const recursiveFactorialNumber = (n) => {
    if (n === 0) {
     return 1
    }
    return recursiveFactorialNumber(n - 1) * n;
}

console.log(recursiveFactorialNumber(4), "recursiveFactorialNumber") // 24
console.log(recursiveFactorialNumber(5)) // 120
console.log(recursiveFactorialNumber(6)) // 720

// Big O = 0(n)
