
let movies = [
    {id: 1, title: "The Shawshank Redemption", voting: 0, watched: false},
    {id: 2, title: "The Godfather", voting: 0, watched: false},
    {id: 3, title: "The Dark Knight", voting: 0, watched: false}
];
console.log(movies);

document.addEventListener("DOMContentLoaded", function() {
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

// Sebbe kod *******************************************
document.getElementById("randomButton").addEventListener("click", function() {
    // Kontrollera om listan är tom
    if (movies.length === 0) {
        document.getElementById("result").textContent = "Inga filmer finns att slumpa bland!";
        return;
    }

    // Slumpa ett index mellan 0 och movies.length - 1
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];

    // Visa resultatet i ul-listan med id="movieList"
    const resultDiv = document.getElementById("moviList");
    resultDiv.textContent = `Slumpad film: ${randomMovie.title} - Röster: ${randomMovie.voting} - Sett: ${randomMovie.watched ? "Ja" : "Nej"}`;
});

//Slut Sebbekod***********************************************