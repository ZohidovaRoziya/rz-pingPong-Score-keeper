const cardPlayer1_El = document.querySelector(".card-player1");
const cardPlayer2_El = document.querySelector(".card-player2");
const formSelect_El = document.querySelector(".form_select");
const btnPlayer1_El = document.querySelector(".btn-player1");
const btnPlayer2_El = document.querySelector(".btn-player2");
const btnReset_El = document.querySelector(".btn-reset");


let scorePlayer1 = 0;
let scorePlayer2 = 0;
let gameLevel = 3;
let gameOver = false;

btnPlayer1_El.addEventListener("click", ()=> {
    if(!gameOver) {
        scorePlayer1++

            if (scorePlayer1 >= gameLevel) {
                gameOver = true
                cardPlayer1_El.style.color = "green";
                cardPlayer2_El.style.color = "red";
            }
    }

    cardPlayer1_El.textContent = scorePlayer1
})

btnPlayer2_El.addEventListener("click", ()=> {
    if(!gameOver) {
        scorePlayer2++

            if (scorePlayer2 >= gameLevel) {
                gameOver = true
                cardPlayer2_El.style.color = "green";
                cardPlayer1_El.style.color = "red";
         
            }
    }

    cardPlayer2_El.textContent = scorePlayer2
})


formSelect_El.addEventListener("change" , ()=> {
    gameLevel = +formSelect_El.value
    reset()
})

btnReset_El.addEventListener("click", reset)

function reset() {
    scorePlayer1 = 0
    scorePlayer2 = 0
    gameOver = false
    cardPlayer1_El.style.color = "black"
    cardPlayer2_El.style.color = "black"
    cardPlayer1_El.textContent = "0"
    cardPlayer2_El.textContent = "0"
}