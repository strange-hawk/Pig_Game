// in a function call this call refers to the window
// in a method call which is a function attached to an object, this key refers to the object

var scores,roundscore, dice1,dice2,activeplayer,gameplaying,prevval,currval,counter;
init()

document.querySelector(".btn-roll").addEventListener('click',function(){
    if(gameplaying){
    // 1. random number
    dice1 = Math.floor(Math.random()*6)+1
    dice2 = Math.floor(Math.random()*6)+1
    // 2. display result
    var diceDOM1 = document.querySelector('.dice1')
    diceDOM1.style.display = 'block'
    diceDOM1.src = 'dice-' + dice1+'.png'
    var diceDOM2 = document.querySelector('.dice2')
    diceDOM2.style.display = 'block'
    diceDOM2.src = 'dice-' + dice2+'.png'
    // document.querySelector('#current-'+activeplayer).textContent  = dice

    // 3. update the round score if the rolled number is not 1.
    // if(dice !== 1){
    //     if(counter===0){
    //         prevval = dice
    //         counter++
    //     }
    //     else{
    //         if(prevval===6 && dice===6){
    //             roundscore=0
    //             nextplayer()
    //         }
    //         else{
    //             prevval=dice
    //             roundscore+=dice
    //             document.getElementById('current-'+activeplayer).textContent = roundscore
    //             counter++
    //         }
    //     }
    //     // roundscore+=dice
    //     // document.getElementById('current-'+activeplayer).textContent = roundscore
    //     // add score
    // }
    if(dice1!==1 && dice2!==1){
        roundscore+= dice1+dice2
        scores[activeplayer]=roundscore
        document.getElementById('current-'+activeplayer).textContent = roundscore

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

//     // update the UI
    
    document.querySelector('#score-'+activeplayer).textContent = scores[activeplayer]
    // document.querySelector('.dice').style.display = 'none'

//     // check if player win the game
    if(scores[activeplayer] >=1000){
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
        counter=0
}


document.querySelector(".btn-new").addEventListener('click',init)

function init(){
    scores=[0,0]
    roundscore=0;
    activeplayer=0
    gameplaying=true
    document.querySelector('.dice1').style.display = 'none'
    document.querySelector('.dice2').style.display = 'none'
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
    counter=0
}