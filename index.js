/* task 1 */
function calculateDifference(a, b) {
    return a - b;
}
/* task 2 */
function isOdd(num) {
    return num % 2 !== 0;
}

/* task 3 */
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
/* task 4 */
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

/* task 5 */
function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}   

/* task 6 */
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}   

/* task 7 */
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];  
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}   

/* task 8 */
function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
