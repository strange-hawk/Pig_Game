// in a function call this call refers to the window
// in a method call which is a function attached to an object, this key refers to the object

var scores,roundscore, dice,activeplayer,gameplaying;
var winningscore
init()

document.querySelector(".btn-roll").addEventListener('click',function(){
    if(gameplaying){
    // 1. random number
    dice = Math.floor(Math.random()*6)+1
    // 2. display result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block'
    diceDOM.src = 'dice-' + dice+'.png'
    document.querySelector('#current-'+activeplayer).textContent  = dice

    // 3. update the round score if the rolled number is not 1.
    if(dice !== 1){
        roundscore+=dice
        document.getElementById('current-'+activeplayer).textContent = roundscore
        // add score
    }
    else{
        // shift the player
        // activeplayer ===1 ? activeplayer = 0 : activeplayer = 1
        roundscore=0
        nextplayer()
    }
}
})

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameplaying){
    // add current roundscore to player's global score
    scores[activeplayer]+= roundscore
    var input =document.querySelector('.final-score').value
    console.log(input)
    if(input){
        winningscore=input
    }else{
        winningscore=100
    }
//     // update the UI
    
    document.querySelector('#score-'+activeplayer).textContent = scores[activeplayer]
    // document.querySelector('.dice').style.display = 'none'

//     // check if player win the game
    if(scores[activeplayer] >=winningscore){
        document.querySelector('#name-'+activeplayer).textContent="WINNER"
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner')
        document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active')
        gameplaying=false
    }
    else{
        nextplayer();

    }
// })}
}}
)



function nextplayer(){
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    activeplayer ===1 ? activeplayer = 0 : activeplayer = 1
    roundscore=0
    // document.querySelector('.player-0-panel').classList.toggle('active')
    // document.querySelector('.player-1-panel').classList.toggle('active')
        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')
}


document.querySelector(".btn-new").addEventListener('click',init)

function init(){
    scores=[0,0]
    roundscore=0;
    activeplayer=0
    gameplaying=true
    document.querySelector('.dice').style.display = 'none'
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.querySelector('#name-0').textContent = 'Player 1'
    document.querySelector('#name-1').textContent = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
    document.querySelector('.final-score').placeholder='Final_score'
}