function convert_cube(arr){
    return arr.map(num =>num * num * num);
}

function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function findPrimes(numbers) {
    return numbers.filter(isPrime);
}

function averageOfSquaredOdds(numbers) {
    const oddNumbers = numbers.filter(num => num % 2 !== 0);
    const squaredOdds = oddNumbers.map(num => num ** 2);
    const sumOfSquares = squaredOdds.reduce((acc, num) => acc + num, 0);
    return squaredOdds.length ? sumOfSquares / squaredOdds.length : 0;
}

function findLongestString(strings) {
    return strings.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

function capitalizeFirstLetter(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


function findPassedStudents(students) {
    return students.filter(student => student.score >= 60);
}

// Example usage:
let students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 55 },
    { name: 'Charlie', score: 70 }
];
console.log(findPassedStudents(students)); // Output: [{ name: 'Alice', score: 85 }, { name: 'Charlie', score: 70 }]
Task 8: Create a Private Counter for Multiple Instances
javascript
Copy code
function createInstanceCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

// Example usage:
const counter1 = createInstanceCounter();
const counter2 = createInstanceCounter();

console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter2()); // Output: 1
console.log(counter2()); // Output: 2
Task 9: Promise-Based Calculator
javascript
Copy code
function calculate(a, b, operation) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return reject('Invalid input: Both arguments must be numbers.');
        }
        switch (operation) {
            case 'add':
                resolve(a + b);
                break;
            case 'subtract':
                resolve(a - b);
                break;
            case 'multiply':
                resolve(a * b);
                break;
            case 'divide':
                if (b === 0) return reject('Division by zero is not allowed.');
                resolve(a / b);
                break;
            default:
                reject('Invalid operation. Use add, subtract, multiply, or divide.');
        }
    });
}

// Example usage:
calculate(10, 5, 'add')
    .then(result => console.log(result)) // Output: 15
    .catch(error => console.log(error));
Task 10: Calculate Total Score
javascript
Copy code
function calculateTotalScore(objects) {
    let totalScore = 0;
    objects.forEach(obj => totalScore += obj.score);
    return totalScore;
}

// Example usage:
let scores = [
    { score: 10 },
    { score: 20 },
    { score: 30 }
];
console.log(calculateTotalScore(scores))


let arr=[1,2,3,4];
convert_cube(arr);
console.log(find_sum(arr));

