const playNow = document.getElementById('playNow'),
  start = document.getElementById('start');

playNow.onclick(directions());

function directions() {
  document.location.href =
    'https://cory-risch-smith.github.io/DES149_Final/directions.html';
}

start.onclick(startGame());

function startGame() {
  document.location.href =
    'https://cory-risch-smith.github.io/DES149_Final/game.html';
}