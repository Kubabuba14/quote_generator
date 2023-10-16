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
// Check if author fieldcis blank and replace it with 'Unknown'
if(!quote.author) {
    authorText.textContent = 'Unknown';
    } else {
    authorText.textContent = quote.author;
    }
    // Check quote length to determine the styling
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
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