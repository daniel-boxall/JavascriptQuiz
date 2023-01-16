//empty variable to hold the scores
let scores = [];
//selects "#highscores" ol
const highscoreList = document.querySelector("#highscores");

//for loop for sorting scores
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("score")) {
        scores.push(JSON.parse(localStorage.getItem(key)));
    }

}
scores.sort((a, b) => b.score - a.score);

//for loop for displaying scores as 'li' elements
for (let i = 0; i < scores.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${scores[i].initials} - ${scores[i].score}`;
    highscoreList.appendChild(li);
}

//button for clearing localStorage in turn clearing highscore 'ol'
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  localStorage.clear();
  highscoreList.innerHTML = "";
});