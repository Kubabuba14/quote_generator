const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBttm = document.getElementById('twitter');
const newWuoteBttn = document.getElementById('new-quote');

let apiQuotes = [];

// Show new quote
function newQuote() {
    // Pick a random quote from API 
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get quotes from API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote()
    } catch (error) {
        // Catch Error Here
    }
}

// On load

getQuotes();