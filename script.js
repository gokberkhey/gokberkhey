
// Scroll to top button
window.addEventListener("scroll", function () {
  const scrollBtn = document.getElementById("scrollToTop");
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Quote of the day
const quotes = [
  "Sapere aude — Dare to know.",
  "The life of the intellect is the most divine.",
  "History is philosophy teaching by examples.",
  "All men by nature desire to know. — Aristotle",
  "Cogito, ergo sum. — Descartes",
  "Those who do not learn history are doomed to repeat it. — Santayana"
];

window.addEventListener("DOMContentLoaded", () => {
  const quoteElement = document.getElementById("dailyQuote");
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  if (quoteElement) quoteElement.textContent = quote;
});
