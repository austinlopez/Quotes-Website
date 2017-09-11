/*Directions:
1. Find 10 of your favorite quotes
2. Make an array containing the quotes
3. Have a webpage get one quote at random and display it
*/


var quoteArea = document.getElementById("htmlQuoteArea");
var authorArea = document.getElementById("htmlAuthorArea");


var quotes = [
  "\"Don\'t cry because it\'s over, smile because it happened.\"",
  "\"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.\"",
  "\"Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.\"",
  "\"You\'ve gotta dance like there\'s nobody watching, <br />Love like you\'ll never be hurt, <br />Sing like there's nobody listening, <br />And live like it\'s heaven on earth.\"",
  "\"A room without books is like a body without a soul.\"",
  "\"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.\"",
  "\"You only live once, but if you do it right, once is enough.\"",
  "\"Be the change that you wish to see in the world.\"",
  "\"In three words I can sum up everything I\'ve learned about life: it goes on.\"",
  "\"If you tell the truth, you don't have to remember anything.\""
]

var quotesAuthor = [
  "― Dr. Suess",
  "― Albert Einstein",
  "― Bernard M. Baruch",
  "― William W. Purkey",
  "― Marcus Tullius Cicero",
  "― Dr. Suess",
  "― Mae West",
  "― Mahatma Gandhi",
  "― Robert Frost",
  "― Mark Twain"
]

function chooseQuote(){
  var numQuote = Math.floor(Math.random()*10);
  quoteArea.innerHTML = quotes[numQuote];
  authorArea.innerHTML = quotesAuthor[numQuote];
}

chooseQuote();
//quoteArea.innerHTML = quotes[3];
//authorArea.innerHTML = quotesAuthor[3];
