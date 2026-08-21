
let movies = [];

document.addEventListener("DOMContentLoaded", function () {
    renderMovieList();
});

/* function showMovieList() {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";
} */

function renderMovieList() {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";

    /* const movies = JSON.parse(localStorage.getItem("movies")) || []; */

    movies.forEach(movies => {
        const li = document.createElement("li");

        li.textContent = movies.title + " - Röster: " + movies.voting + " - Sett: " + (movies.watched ? "Ja" : "Nej");

        movieList.appendChild(li);
    });
}

const movieInput = document.getElementById("movieInput");
const addMovieButton = document.getElementById("addMovieButton");

addMovieButton.addEventListener("click", function () {

    const newTitle = movieInput.value;

    if (newTitle !== "") {

        const newMovie = {
            id: movies.length + 1,
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
document.getElementById("randomButton").addEventListener("click", function() {
    // Kontrollera om listan är tom
    if (movies.length === 0) {
        document.getElementById("favoriteResult").textContent = "Inga filmer finns att slumpa bland!";

        return;
    }

    // Slumpa ett index mellan 0 och movies.length - 1
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];

    // Visa resultatet i ul-listan med id="movieList"
    const resultDiv = document.getElementById("movieList");
    resultDiv.textContent = `Slumpad film: ${randomMovie.title} - Röster: ${randomMovie.voting} - Sett: ${randomMovie.watched ? "Ja" : "Nej"}`;
});

//Slut Sebbekod***********************************************