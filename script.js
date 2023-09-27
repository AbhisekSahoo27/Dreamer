const searchInput = document.querySelector('.search-input');
const movieCards = document.querySelectorAll('.movie-card');
const originalDisplay = [];

// Store the original display state of movie cards
movieCards.forEach(card => {
    originalDisplay.push(card.style.display);
});

movieCards.forEach(movieCard => {
    let tapped = false; // Variable to track if the card has been tapped

    movieCard.addEventListener('click', () => {
        if (!tapped) {
            // First tap, show the details
            movieCard.classList.add('active');
            tapped = true;
        } else {
            // Second tap, open the website link
            const websiteLink = movieCard.getAttribute('data-website-link');
            if (websiteLink) {
                window.open(websiteLink, '_blank');
            }
        }
    });
});

searchInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        performSearch();
    }
});

searchInput.addEventListener('input', () => {
    // Check if the search input is cleared
    if (searchInput.value === '') {
        clearSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();

    // Create an array to store matched results
    const matchingMovies = [];

    if (searchTerm === 'avengers' || searchTerm.includes('iron man')) {
        // Handle specific cases for "avengers" and "iron man"
        movieCards.forEach((card, index) => {
            const movieTitle = card.querySelector('h2').textContent.toLowerCase();
            if (movieTitle === searchTerm) {
                matchingMovies.push(card);
            } else {
                card.style.display = 'none';
            }
        });
    } else {
        // Handle other search terms
        movieCards.forEach((card, index) => {
            const movieTitle = card.querySelector('h2').textContent.toLowerCase();
            const movieFeatures = card.querySelectorAll('p')[1].textContent.toLowerCase();
            if (movieTitle.includes(searchTerm) || movieFeatures.includes(searchTerm)) {
                matchingMovies.push(card);
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Show matching movies in the original order
    movieCards.forEach((card, index) => {
        if (matchingMovies.includes(card)) {
            card.style.display = originalDisplay[index];
        }
    });
}

function clearSearch() {
    searchInput.value = '';
    movieCards.forEach((card, index) => {
        card.style.display = originalDisplay[index];
    });
}
