document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            let movieList = document.getElementById('movie-list');
            data.movies.forEach(movie => {
                let movieCard = document.createElement('div');
                movieCard.classList.add('movie');
                movieCard.innerHTML = `
                    <img src="${movie.image}" alt="${movie.title}" class="movie-image">
                    <h3>${movie.title}</h3>
                `;
                movieList.appendChild(movieCard);
            });
        })
        .catch(error => console.log('Error:', error));
});

    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            button.classList.toggle('active');
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        const movies = [
            {
                "title": "The Matrix",
                "image": "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg"
            },
            {
                "title": "Inception",
                "image": "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_SY679_.jpg"
            },
            {
                "title": "Interstellar",
                "image": "https://resizing.flixster.com/7c3qnZfPzZgID7Ft97PccFwEf9U=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg"
            },
            {
                "title": "The Dark Knight",
                "image": "https://resizing.flixster.com/dJM7TJzf7qEp9NA2Kni0Cug9myc=/206x305/v2/https://resizing.flixster.com/Wg25mLoPWxjcxXzNyaSF4VGgGE4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZiNjZiNWFkLWVhNzEtNDRhMC1iNGIwLTFmY2FkNzllNTJlMi5qcGc="
            },
            {
                "title": "Avengers: Endgame",
                "image": "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg"
            }
        ];
    
        const movieList = document.getElementById('movie-list');
    
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie';
            
            const movieImage = document.createElement('img');
            movieImage.src = movie.image;
            movieImage.alt = movie.title;
            
            const movieTitle = document.createElement('div');
            movieTitle.className = 'movie-title';
            movieTitle.textContent = movie.title;
    
            movieCard.appendChild(movieImage);
            movieCard.appendChild(movieTitle);
            movieList.appendChild(movieCard);
        });
    });
    

