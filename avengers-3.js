
    // Replace this with your Dreamer image selector
    const dreamerMovieImage = document.querySelector('#dreamer-movie-image');

    // Replace this with the URL of your movie details page
    const movieDetailsPageURL = 'movie-details.html';

    // Add a click event listener to open the movie details page
    dreamerMovieImage.addEventListener('click', () => {
        window.open(movieDetailsPageURL, '_blank');
    });

