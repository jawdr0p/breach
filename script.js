// Card data
const cards = [
  { image: '/breach/images/Card1.png', probability: 0.1}, // 6.25%
  { image: '/breach/images/Card2.png', probability: 0.1 }, // 6.25%
  { image: '/breach/images/Card3.png', probability: 0.1 }, // 6.25%
  { image: '/breach/images/Card4.png', probability: 0.1 }, // 6.25%
  { image: '/breach/images/Card5.png', probability: 0.6 }, // 75%
];

let lastCard = null;

// Function to pick a random card based on probabilities
function getRandomCard() {
  const rand = Math.random(); // Random number between 0 and 1
  let cumulativeProbability = 0;

  for (const card of cards) {
    cumulativeProbability += card.probability;
    if (rand < cumulativeProbability) {
      return card.image;
    }
  }
  return cards[cards.length - 1].image; // Fallback to the last card
}

// Function to update the displayed card
function updateCard() {
  const cardDiv = document.getElementById('card');
  const cardContainer = document.getElementById('card-container');
  
  const cardImage = getRandomCard();
  
  // Apply flip effect
  cardDiv.classList.add('flip');
  
  // Wait for the flip animation to finish before updating the card
  setTimeout(() => {
    cardDiv.style.backgroundImage = `url(${cardImage})`;
    cardDiv.classList.remove('flip');
  }, 600); // Match the duration of the flip animation (0.6s)
  
  lastCard = cardImage;
}

// Add event listener to the button
document.getElementById('next-button').addEventListener('click', updateCard);

// Initialize the first card
updateCard();