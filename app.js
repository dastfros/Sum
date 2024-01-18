const words = ['Hello', ' ', 'world', '!'];

const concatenatedString = words.reduce((accumulator, currentWord) => accumulator + currentWord, '');

console.log(concatenatedString); 

const numbers = [1, -2, 3, -4, 5];

const positiveNumbers = numbers.filter(number => number > 0);

console.log(positiveNumbers); 


const wor = ['apple', 'banana', 'cherry'];

const wordLengths = words.map(word => word.length);

console.log(wordLengths); 


const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 }
];

const sortedBooksByYear = books.sort((a, b) => a.year - b.year);

console.log(sortedBooksByYear);
