const fibonacci = function(userInput) {
    const number = parseInt(userInput);
    if (number < 0) {
        return "OOPS";
    }
    
    let fibonacci_array = [0,1];
    while (fibonacci_array.length <= number) {
        fibonacci_array.push(fibonacci_array[fibonacci_array.length-1] + fibonacci_array[fibonacci_array.length-2]);
    }
    return fibonacci_array[number];
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
