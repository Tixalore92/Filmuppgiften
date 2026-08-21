
let movies = [];

document.addEventListener("DOMContentLoaded", function () {
    renderMovieList();
});

/* function showMovieList() {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";
} */

function renderMovieList(movieId = null) {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";

    /* const movies = JSON.parse(localStorage.getItem("movies")) || []; */

    movies.forEach(movie => {

        // Om movieId är angivet och filmen inte har rätt ID, hoppa över den
        if (movieId !== null && movie.id !== movieId) {
            return;
        }

        const li = document.createElement("li");

        /* Skapar textinnehåll för varje film i listan */
        li.textContent = movie.title + " - Röster: " + movie.voting + " - Sett: " + (movie.watched ? "Ja" : "Nej");

        /* Skapar knapp för att rösta på filmen */

        voteButton = document.createElement("button");
        voteButton.textContent = "👍";
        voteButton.addEventListener("click", function () {
            movie.voting++;
            renderMovieList(movieId); // 
        });


        /* Lägger till objekten i listan */
        movieList.appendChild(li);
        li.appendChild(voteButton);

    });
}

const movieInput = document.getElementById("movieInput");
const addMovieButton = document.getElementById("addMovieButton");

addMovieButton.addEventListener("click", function () {

    const newTitle = movieInput.value;

    if (newTitle !== "") {

        const newMovie = {
            id: movies.length,
            title: newTitle,
            voting: 0,
            watched: false
        };

        movies.push(newMovie);

        console.log("Ny film tillagd:", newMovie);
        console.log("Aktuell filmlista:", movies);

        renderMovieList();

        movieInput.value = "";
    }
});

// Sebbe kod *******************************************
document.getElementById("randomButton").addEventListener("click", function () {
    // Kontrollera om listan är tom
    if (movies.length === 0) {
        document.getElementById("result").textContent = "Inga filmer finns att slumpa bland!";
        return;
    }

    // Slumpa ett index mellan 0 och movies.length - 1
    const randomIndex = Math.floor(Math.random() * movies.length);
    console.log("Slumpat index:", randomIndex);
    renderMovieList(randomIndex); // Rendera endast den slumpade filmen

    /*     
        const randomMovie = movies[randomIndex];
    
        // Visa resultatet i ul-listan med id="movieList"
        const resultDiv = document.getElementById("movieList");
        resultDiv.textContent = `Slumpad film: ${randomMovie.title} - Röster: ${randomMovie.voting} - Sett: ${randomMovie.watched ? "Ja" : "Nej"}`;
     */

});

//Slut Sebbekod***********************************************


const favoriteButton = document.getElementById("favoriteButton");
const favoriteResult = document.getElementById("favoriteResult");

favoriteButton.addEventListener("click", function() {
    
    if (movies.length === 0) {
        favoriteResult.textContent = "Det finns inga filmer i listan!";
        return;
    }

    let topMovie = movies[0];

    movies.forEach(movie => {
        if (movie.voting > topMovie.voting) {
            topMovie = movie;
        }
    });

    if (topMovie.voting === 0) {
        favoriteResult.textContent = "Ingen film har fått några röster än!";
    } else {
        favoriteResult.textContent = `Favoritfilm: ${topMovie.title} (${topMovie.voting} röster)`;
    }
});



const showAllMovies = document.getElementById("showAllMovies");
showAllMovies.addEventListener("click", function() {
    renderMovieList();
});
