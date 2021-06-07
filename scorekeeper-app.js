const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetButton = document.querySelector('#resetButton')
const winScoreInput = document.querySelector('#winScoreInput')

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;


p1Button.addEventListener('click', function () {
    if (p2Score !== winningScore) {
        if (p1Score !== winningScore) {
            p1Score++;
            p1Display.textContent = p1Score;
            if (p1Score === winningScore) {
                p1Display.classList.add("winner");
                p2Display.classList.add("loser");
            }
        }
    }

})
p2Button.addEventListener('click', function () {
    if (p1Score !== winningScore) {
        if (p2Score !== winningScore) {
            p2Score++;
            p2Display.textContent = p2Score;
            if (p2Score === winningScore) {
                p2Display.classList.add("winner");
                p1Display.classList.add("loser");
            }
         }
    }
})

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('winner')
    p2Display.classList.remove('winner')
    p1Display.classList.remove('loser')
    p2Display.classList.remove('loser')
}

winScoreInput.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})


resetButton.addEventListener('click', reset)
