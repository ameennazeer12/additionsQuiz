const screen = document.getElementById("screen")
let startBtn = document.getElementById("start-btn")
let score = 0
let roundNo = 0

startBtn.addEventListener("click",function(){
    newRound()
})
function newGame(){
    screen.innerHTML = `
                        <p>Final Score: ${score}</p>
                        <p>Would you like to play again?</p>
                        <button id="start-btn">PLAY AGAIN</button>
    `   
    startBtn = document.getElementById("start-btn")
    startBtn.addEventListener("click",function(){
    score = 0
    roundNo = 0
    newRound()
    })
}

function newRound(){
    let firstNum = Math.floor(Math.random()*100)
    let secondNum = Math.floor(Math.random()*100)
    screen.innerHTML =`
                        <h2>Round: ${roundNo}</h2>
                        <p>${firstNum} + ${secondNum}</p>
                        <input id="input-t" type="text" autocomplete="off">
                        <br>
                        <button id="finish-btn">SUBMIT</button>
                        <br>
                        <span>Current Score: ${score}</span>
    `
    const finishBtn = document.getElementById("finish-btn")
    let inputVal = document.getElementById("input-t")

    finishBtn.addEventListener("click",function(){
        if( inputVal.value == firstNum + secondNum){
            score+=10
        }
        roundNo+=1
        if (roundNo == 5){
            newGame()
        }else{
            newRound()
        }
    })
}
