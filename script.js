
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

    movies.forEach((movie, index) => {

        if (movieId !== null && index !== movieId) {
            return; 
        }

        const tr = document.createElement("tr");

        /* const li = document.createElement("li");
        li.textContent = movie.title + " - Röster: " + movie.voting + " - Sett: " + (movie.watched ? "Ja" : "Nej"); */

        const titleTd = document.createElement("td");
        titleTd.textContent = movie.title;

        const votingTd = document.createElement("td");
        votingTd.textContent = movie.voting + " ";
        
        const voteButton = document.createElement("button");
        voteButton.textContent = "👍";
        voteButton.addEventListener("click", function () {
            movie.voting++;
            console.log("Röst tillagd för film:", movie.title);
            renderMovieList(movieId); 
        });
        votingTd.appendChild(voteButton);

        const watchedTd = document.createElement("td");
        watchedTd.textContent = (movie.watched ? "Ja " : "Nej ");
        
        const watchedButton = document.createElement("button");
        watchedButton.textContent = "👁️";
        watchedButton.addEventListener("click", function () {
            movie.watched = !movie.watched; 
            renderMovieList(movieId);
        });
        watchedTd.appendChild(watchedButton);

        const deleteTd = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click", function () {
            movies.splice(index, 1);
            renderMovieList(movieId);
        });
        deleteTd.appendChild(deleteButton);


        /*
        movieList.appendChild(li);
        li.appendChild(voteButton);
        li.appendChild(watchedButton);
        li.appendChild(deleteButton);
        */

        tr.appendChild(titleTd);
        tr.appendChild(votingTd);
        tr.appendChild(watchedTd);
        tr.appendChild(deleteTd);
        
        movieList.appendChild(tr);
    });
    
    console.log("Aktuell filmlista:", movies);
}

const movieInput = document.getElementById("movieInput");
const addMovieButton = document.getElementById("addMovieButton");

addMovieButton.addEventListener("click", function () {

    const newTitle = movieInput.value;

    if (newTitle !== "") {

        const newMovie = {
            id: Math.max(0, ...movies.map(movie => movie.id)) + 1,
            title: newTitle,
            voting: 0,
            watched: false
        };

        movies.push(newMovie);

        console.log("Ny film tillagd:", newMovie);


        renderMovieList();

        movieInput.value = "";
    }
});

// Sebbe kod *******************************************
document.getElementById("randomButton").addEventListener("click", function () {
    // Kontrollera om listan är tom
    if (movies.length === 0) {
        document.getElementById("favoriteResult").textContent = "Inga filmer finns att slumpa bland!";

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

favoriteButton.addEventListener("click", function () {

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
showAllMovies.addEventListener("click", function () {
    renderMovieList();
});

//Sebbe ************************************************************************
/* Skapar knapp för att radera filmen *
const deleteButton = document.createElement("buttons");
deleteButton.textContent = "❌";
deleteButton.addEventListener("click", function () {
    // Hitta index för filmen som matchar ID:t
   
        
        // Uppdatera listan på skärmen
        renderMovieList();
    }
});

// Lägg till raderingsknappen i listelementet (li)
li.appendChild(deleteButton);*/