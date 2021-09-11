const moviesArray = JSON.parse(localStorage.getItem("Movies")) || [];
const moviesForm = document.querySelector("#movieForm");
const alertMessage = document.querySelector(".alert")
    //Funtions 

const showAddMoviesModal = () => {

    movieForm.style = "display: flex;";
    alertMessage.innerHTML = ''

};

function hiddingForm() {
    movieForm.style = "display: none;";

}



function showMovies(clearMovies = false) {
    const moviesView = document.querySelector(".content")


    if (clearMovies) {
        moviesView.innerHTML = ""
    }

    if (moviesArray.length > 0) {
        moviesArray.forEach((movie) => {
            moviesView.innerHTML += `<div class='movie-card'>
                <div class="movies-details">
                    <h1> ${movie.title} </h1>
                    Description: <small> ${movie.description}</small> <br> 
                   <h4> Autors: ${movie.actor}</h4>
                </div>
                <image src="${ movie.image} " alt="img do filme"/>
                </div>`
            console.log(movie);
        });
    } else {
        moviesView.innerHTML = "Sem filmes disponiveis"
    }

}



moviesForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // instantiating field alert


    // creating new movie
    const movie = {};
    movie.title = document.querySelector("#movieTitle").value;
    movie.description = document.querySelector("#description").value;
    movie.actor = document.querySelector("#actors").value;
    movie.image = document.querySelector("#image").value;

    // cheacking that the field are not empty
    if (
        movie.title === "" ||
        movie.description === "" ||
        movie.actor === "" ||
        movie.image === ""
    ) {

        // message error
        alertMessage.style = "display: block; color:red;"
        alertMessage.textContent = "Insira as informações que se encontram vazias"

    } else {
        // add movie in array
        moviesArray.push(movie)

        // creating a movie in string format
        const moviesToSubmit = JSON.stringify(moviesArray)

        // submiting movie in localStorage
        localStorage.setItem('Movies', moviesToSubmit)

        // message success
        alertMessage.style = "display: block; color:green; text-align: center;"
        alertMessage.textContent = "Filme adicionado com sucesso"

        showMovies(true)

        // hiding form
        setTimeout(() => {
            alertMessage.style = "display: none;"
            movieForm.style = "display: none;";
            movieForm.reset()

        }, 2000)



    }


});


// setInterval(moviesRecover, 2000)
window.onload = () => {
    showMovies();
}