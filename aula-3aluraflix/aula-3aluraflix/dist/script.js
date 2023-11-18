var moviesList = [{name:"Escola de Rock", url:"https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg"},{name:"A Chegada", url:"https://br.web.img3.acsta.net/r_1280_720/pictures/16/08/16/17/37/197487.jpg"},{name:"Homem-aranha no Aranhaverso", url:"https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg"},{name:"10 Coisas que Eu Odeio em Você", url:"https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg"},{name:"Matrix", url:"https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG"},
{name: "Matrix Reloaded", url: "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"}]

//CARREGAR LISTA DE FILMES =============
function renderMovies() {
  var catalogContainer = document.getElementById("catalogContainer");
  catalogContainer.innerHTML = '';

  moviesList.forEach(movie => {
    var movieContainer = document.createElement('div');
    movieContainer.className = "movieContainer";

    var img = document.createElement('img');
    img.src = movie.url;

    var p = document.createElement('p');
    p.textContent = movie.name;

    movieContainer.appendChild(img);
    movieContainer.appendChild(p);
    catalogContainer.appendChild(movieContainer);
  });
}

renderMovies();
document.getElementById("movieName").focus()

//CADASTRAR FILME =================
document.getElementById("submit").onclick = function () {
  const movieName = document.getElementById("movieName");
  const movieUrl = document.getElementById("movieUrl");
  const foundMovie = moviesList.find((movie) => movie.name == movieName.value);
  
  if (movieName.value == "") {
    alert("Obrigatório informar o NOME DO FILME!");
  } else if (foundMovie) {
    alert("Este filme já foi cadastrado.");
  } else if (movieUrl.value == "") {
    alert("Obrigatório informar a URL DO POSTER!");
  } else if (!movieUrl.value.endsWith("jpeg") && !movieUrl.value.endsWith("jpg")) {
    alert("Url do poster inválida! A imagem deve ter formato .jpg ou .jpeg");
  } else {
    moviesList.push({ name: movieName.value, url: movieUrl.value });
    renderMovies();
    
    alert(`O filme ${movieName.value} foi cadastrado com sucesso!`);
    
    document.getElementById("movieName").value = ""
    document.getElementById("movieUrl").value = ""
    document.getElementById("movieName").focus()
  }
};