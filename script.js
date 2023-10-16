const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBttn = document.getElementById('twitter');
const newQuoteBttn = document.getElementById('new-quote');
const loader =document.getElementById('loader');

let apiQuotes = [];

// Show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show new quote
function newQuote() {
    loading();
    // Pick a random quote from API 
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
// Check if author field is blank and replace it with 'Unknown'
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
    // Set Quote and hide loader
    quoteText.textContent = quote.text;
    complete();
}

// Get quotes from API
async function getQuote() {
    loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote()
    } catch (error) {
        console.log(error);
        getQuote();
    }
}

// Tweet a quote
function tweetQuote() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterURL, '_blank');
}

// Event listners
newQuoteBttn.addEventListener('click', newQuote);
twitterBttn.addEventListener('click', tweetQuote)

// On load
getQuote();