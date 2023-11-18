//Default Array =============================
var moviesList = [
  {
    name:"Escola de Rock",
    posterUrl:"https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg",
    trailerUrl: "https://www.youtube.com/embed/5afGGGsxvEA",
  },
  {
    name:"A Chegada", 
    posterUrl:"https://br.web.img3.acsta.net/r_1280_720/pictures/16/08/16/17/37/197487.jpg",
    trailerUrl:"https://www.youtube.com/embed/rNciXGzYZms",
  },
  {
    name:"Homem-aranha no Aranhaverso",
    posterUrl:"https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg",
    trailerUrl:"https://www.youtube.com/embed/LZBlXkDvhh4",
  },
  {
    name:"10 Coisas que Eu Odeio em Você",
    posterUrl:"https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg",
    trailerUrl:"https://www.youtube.com/embed/tD76OqlJRwQ",
  },
  {
    name:"Matrix",
    posterUrl:"https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG",
    trailerUrl: "https://www.youtube.com/embed/2KnZac176Hs",
  },
  {
    name: "Matrix Reloaded",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    trailerUrl: "https://www.youtube.com/embed/kYzz0FSgpSU",
  }
]

//First Load =============================
renderMovies()
document.getElementById("movieName").focus()

//Movies Catalog Load =============================
function renderMovies () {
  var catalogContainer = document.getElementById("catalogContainer");
  catalogContainer.innerHTML = '';

  moviesList.forEach(movie => {
    var movieContainer = document.createElement('div');
    movieContainer.className = "movieContainer";

    var img = document.createElement('img');
    img.src = movie.posterUrl;

    var nameContainer = document.createElement('div');
    nameContainer.textContent = movie.name;
    nameContainer.className = "nameContainer";
    
    var buttonsContainer = document.createElement('div');
    buttonsContainer.className = "buttonsContainer";
       
    var trailerButton = document.createElement('button');
    trailerButton.textContent = "Trailer"
    trailerButton.className = "trailerButton"
    trailerButton.addEventListener('click', function () {
      openTrailer(movie.trailerUrl);
    });
    
    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Excluir"
    deleteButton.className = "deleteButton"
    deleteButton.addEventListener('click', function () {
      deleteMovie(movie);
      renderMovies(); 
    });
    
    buttonsContainer.appendChild(trailerButton)
    buttonsContainer.appendChild(deleteButton)
    movieContainer.appendChild(img);
    movieContainer.appendChild(nameContainer);
    movieContainer.appendChild(buttonsContainer);
    catalogContainer.appendChild(movieContainer);
  });
}

//Open Trailer YT =============================
function openTrailer(trailerUrl) {
  window.open(trailerUrl, '_blank');
}

//Add New Movie =============================
function addMovie(){
  const movieName = document.getElementById("movieName").value;
  const posterUrl = document.getElementById("posterUrl").value;
  const trailerUrl = document.getElementById("trailerUrl").value;
  const foundMovie = moviesList.find((movie) => movie.name == movieName);
  
  if (movieName == "") {
    alert("Obrigatório informar o Nome do Filme!");
  } else if (foundMovie) {
    alert("Este filme já foi cadastrado.");
  } else if (posterUrl == "") {
    alert("Obrigatório informar a Url do Poster!");
  } else if (!posterUrl.endsWith("jpeg") && !posterUrl.endsWith("jpg")) {
    alert("Url do poster inválida! A imagem deve ter formato .jpg ou .jpeg");
  } else if (trailerUrl == "") {
    alert("Obrigatório informar a Url do Trailer!");
  } else {
    moviesList.push({ name: movieName, posterUrl: posterUrl, trailerUrl: trailerUrl.replace("watch?v=","embed/") });
    renderMovies();
    
    alert(`O filme ${movieName} foi cadastrado com sucesso!`);
    
    clearInputs()
  }
}

//Clear Input Fields =============================
function clearInputs(){
  document.getElementById("movieName").value = ""
    document.getElementById("posterUrl").value = ""
    document.getElementById("trailerUrl").value = ""
    document.getElementById("movieName").focus()
}

//Delete Movie drom Array =============================
function deleteMovie(movie){
  var index = moviesList.findIndex(m => m.name === movie.name);

  if (index !== -1) {
    moviesList.splice(index, 1);
    alert(`O filme "${movie.name}" foi excluído.`);
  } else {
    alert(`O filme "${movie.name}" não foi encontrado.`);
  }
}

