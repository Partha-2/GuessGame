var randomNumber = Math.floor(Math.random() * 10) + 1
    var scoreNumber = 10


function check() {
    var number = document.getElementById("guessNumber")
    var result = document.getElementById("result")
    var score = document.getElementById("score")


    var enterNumber = number.value
    if (randomNumber == enterNumber) {
        result.textContent = "You Are Right"
        alert("YOU WON")
    }
    else {
        scoreNumber = scoreNumber-1;
        score.textContent = "score :" + scoreNumber
        result.textContent = "You Are Wrong"
    }
}
