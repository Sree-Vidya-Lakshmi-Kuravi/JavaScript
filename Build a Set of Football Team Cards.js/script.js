// Football team object
const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    { name: "Diego Maradona", position: "midfielder", isCaptain: true },
    { name: "Jorge Valdano", position: "forward", isCaptain: false },
    { name: "Oscar Ruggeri", position: "defender", isCaptain: false },
    { name: "Nery Pumpido", position: "goalkeeper", isCaptain: false }
  ]
};

// Select elements
const headCoachEl = document.getElementById("head-coach");
const teamEl = document.getElementById("team");
const yearEl = document.getElementById("year");
const playerCardsContainer = document.getElementById("player-cards");
const positionSelect = document.getElementById("players");

// Display team info
headCoachEl.textContent = footballTeam.headCoach;
teamEl.textContent = footballTeam.team;
yearEl.textContent = footballTeam.year;

// Function to render players
function displayPlayers(players) {
  playerCardsContainer.innerHTML = players
    .map(player => {
      return `
        <div class="player-card">
          <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
          <p>Position: ${player.position}</p>
        </div>
      `;
    })
    .join("");
}

// Initial render (all players)
displayPlayers(footballTeam.players);

// Filter players by position
positionSelect.addEventListener("change", (e) => {
  const selectedPosition = e.target.value;

  if (selectedPosition === "all") {
    displayPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(
      player => player.position === selectedPosition
    );
    displayPlayers(filteredPlayers);
  }
});


