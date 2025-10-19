import { addQuote, getAllQuotes } from "./quote.js";


// Step 1: Create an array to hold quote objects
let quotes = []

// Step 2: Select the DOM element where quotes will be rendered
const quoteList = document.getElementById('quote-list');

// Step 3: Define a function called renderQuotes()
// This function should:
// - Clear the quoteList element
// - Loop through the quotes array
// - For each quote, create a <p> element with content and author
// - Append each <p> to quoteList


function renderQuotes() {
    quoteList.innerHTML = '';
    quotes.push(...getAllQuotes())
    console.log(quotes);
    quotes.forEach((q)=> {
        const pElement = document.createElement("p")
        pElement.textContent = `"${q.content}" by ${q.author} `
        quoteList.appendChild(pElement)
    })

}

// Step 4: Add test quotes manually and call renderQuotes()
// Example:
// addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
// renderQuotes();

addQuote('Be smart, act dumb', 'PangPond')
addQuote('There is no tomorrow', 'Gammy')
addQuote('ไม่มีใครก้าวเดินลงไปในสายน้ำเดิมครั้งที่สอง', 'Eve')

renderQuotes();