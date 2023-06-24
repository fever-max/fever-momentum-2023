const quotes = [
  {
    quote:
      "It's only after we've lost everything that we're free to do anything.",
    author: "Fight Club (1999)",
  },
  {
    quote:
      "The past can hurt, but you can either run from it, or learn from it.",
    author: "Lion King (1994)",
  },
  {
    quote:
      "At some point you've got to decide for yourself who you gonna be. Can't let nobody make that decision for you.",
    author: "Moonlight (2016)",
  },
  {
    quote: "Carpe Diem, Seize the day. Make your lives extraordinary.",
    author: "Dead Poets Society (1989)",
  },
  {
    quote: "I don't regret the things I've done, but those I did not do.",
    author: "Empire Records (1995)",
  },
  {
    quote: "Good words, good thoughts and good deeds.",
    author: "Bohemian Rhapsody (2018)",
  },
  {
    quote:
      "You’ll have bad times, but it’ll always wake you up to the good stuff you weren’t paying attention to.",
    author: "Good Will Hunting (1997)",
  },
  {
    quote:
      "Your spark isn’t a soul’s purpose. That last box fills in when you’re ready to come live.",
    author: "Soul (2020)",
  },
  {
    quote:
      "Hope is a good thing. Maybe it's the best of the best. And the good things never go away.",
    author: "The Shawshank Redemption (1994)",
  },
  {
    quote:
      "The more you gain by pretending, the less you're gonna actually have.",
    author: "Aladdin (2019)",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerHTML = `<strong>-${todaysQuote.author}-</strong>`;
