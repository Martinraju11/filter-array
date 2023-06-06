const numbers = [2, 56, 89, 33, 57, 44, 21, 90];
var b = numbers.filter(function even(number) {
    return (number % 2 == 0);
})
document.write("even numbers in the array are " + b);