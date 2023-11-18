var colorsList = [
  "#2ecc51", //verde
  "#939393", // cinza
  "#ef4836", //vermelho
  "#4183d7", //azul
  "#e67e22", // laranja
  "#bf55ec", // roxo
  "#c7a720", //amarelo
  "#16a085", //verde escuro
  "#fc6399", //rosa
  "#e65722" //laranja escuro
];
var teamsList = [
  {
    name: "Palmeiras",
    logo:
      "https://imagepng.org/wp-content/uploads/2018/03/escudo-palmeiras.png",
    color: "#2ecc51",
    games: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0
  },
  {
    name: "Botafogo",
    logo:
      "https://i.pinimg.com/originals/90/d1/08/90d1087eb716719ddda0a34141d797d0.png",
    color: "#939393",
    games: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0
  },
  {
    name: "Flamengo",
    logo:
      "https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-0.png",
    color: "#ef4836",
    games: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0
  },
  {
    name: "Grêmio",
    logo:
      "https://logodownload.org/wp-content/uploads/2017/02/gremio-logo-escudo-1.png",
    color: "#4183d7",
    games: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0
  }
];

renderTeams();
document.getElementById("teamName").focus();

function renderTeams() {
  var teamsTable = document.getElementById("teamsTable");
  teamsTable.innerHTML = "";

  teamsList
    .sort(function (a, b) {
      if (b.points !== a.points) {
        return b.points - a.points;
      }
      return b.wins - a.wins;
    })
    .forEach((team, index) => {
      var teamRow = document.createElement("tr");

      var teamLogo = document.createElement("img");
      teamLogo.src = team.logo;
      teamLogo.onerror = function () {
        this.src = "https://pngimg.com/d/football_PNG52737.png";
      };
      teamLogo.className = "teamLogo";

      var teamPosition = document.createElement("td");
      teamPosition.textContent = `${index + 1}º`;
      if (team.games == 10) teamPosition.style.backgroundColor = "#9d8319";
      var teamName = document.createElement("td");
      teamName.textContent = team.name;
      var teamPoints = document.createElement("td");
      teamPoints.textContent = team.points;
      var teamGames = document.createElement("td");
      teamGames.textContent = team.games;
      var teamWins = document.createElement("td");
      teamWins.textContent = team.wins;
      var teamDraws = document.createElement("td");
      teamDraws.textContent = team.draws;
      var teamLoses = document.createElement("td");
      teamLoses.textContent = team.loses;

      var actionButtons = document.createElement("td");
      actionButtons.className = "actionButtonsContainer";
      actionButtons.style.width = "30%";

      var winButton = document.createElement("button");
      winButton.textContent = "+ Vitória";
      winButton.className = "button";
      winButton.style.backgroundColor = team.color;
      if (team.games == 10) winButton.disabled = true;
      winButton.addEventListener("click", function () {
        addWin(team);
        renderTeams();
      });

      var drawButton = document.createElement("button");
      drawButton.textContent = "+ Empate";
      drawButton.className = "button";
      drawButton.style.backgroundColor = team.color;
      if (team.games == 10) drawButton.disabled = true;
      drawButton.addEventListener("click", function () {
        addDraw(team);
        renderTeams();
      });

      var defeatButton = document.createElement("button");
      defeatButton.textContent = "+ Derrota";
      defeatButton.className = "button";
      defeatButton.style.backgroundColor = team.color;
      if (team.games == 10) defeatButton.disabled = true;
      defeatButton.addEventListener("click", function () {
        addDefeat(team);
        renderTeams();
      });

      actionButtons.appendChild(winButton);
      actionButtons.appendChild(drawButton);
      actionButtons.appendChild(defeatButton);

      teamRow.appendChild(teamPosition);
      teamRow.appendChild(teamLogo);
      teamRow.appendChild(teamName);
      teamRow.appendChild(teamPoints);
      teamRow.appendChild(teamGames);
      teamRow.appendChild(teamWins);
      teamRow.appendChild(teamDraws);
      teamRow.appendChild(teamLoses);

      teamRow.appendChild(actionButtons);

      teamsTable.appendChild(teamRow);
    });
}

function addWin(team) {
  team.games += 1;
  team.wins += 1;
  team.points += 3;
}
function addDraw(team) {
  team.games += 1;
  team.draws += 1;
  team.points += 1;
}
function addDefeat(team) {
  team.games += 1;
  team.loses += 1;
}

function addTeam() {
  if (teamsList.length == 10) {
    alert("Já existem 10 times cadastrados no campeonato!");
    document.getElementById("teamName").focus();
    return;
  }
  const teamName = document.getElementById("teamName").value;
  const teamLogo = document.getElementById("teamLogo").value;
  const foundTeam = teamsList.find((team) => team.name == teamName);

  if (teamName == "") {
    alert("Obrigatório informar o Nome do Time!");
  } else if (foundTeam) {
    alert("Este time já foi cadastrado.");
  } else {
    teamsList.push({
      name: teamName,
      logo: teamLogo,
      color: colorsList[teamsList.length],
      games: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      points: 0
    });
    renderTeams();
    clearInputs();
  }
}

//Clear Input Fields =============================
function clearInputs() {
  document.getElementById("teamName").value = "";
  document.getElementById("teamLogo").value = "";
  document.getElementById("teamName").focus();
}

//ERASE ALL DATA ==========================================
function eraseData() {
  if (
    confirm(
      "Deseja mesmo recomeçar o campeonato?\nTodos os dados serão zerados. Os times cadastrados permanecerão."
    )
  ) {
    teamsList.forEach((team) => {
      team.games = 0;
      team.wins = 0;
      team.draws = 0;
      team.loses = 0;
      team.points = 0;
    });
    renderTeams();
  }
}
