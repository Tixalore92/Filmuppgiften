
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