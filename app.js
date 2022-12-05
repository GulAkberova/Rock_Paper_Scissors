const playBtn=document.querySelector('.intro button');
const introScreen=document.querySelector('.intro');
const match=document.querySelector('.match');
let pScore=0
let cScore=0

playBtn.addEventListener('click',()=>{
    introScreen.classList.add('unactive');
    match.classList.add('active')

});

function playMatch(){
    const options=document.querySelectorAll('.options button');
    const computerOptions=['rock','paper','scissors'];
    const playerHand=document.querySelector('.player_hand')
    const computerHand=document.querySelector('.computer_hand')
    const hands=document.querySelectorAll('.hands img')
    options.forEach(option =>{
        option.addEventListener('click',function(){
            const computerNumber=Math.floor(Math.random()*3 )
            const computerChoice=computerOptions[computerNumber];

           setTimeout(()=>{
            computerHands(this.textContent,computerChoice)

            playerHand.src=`./img/icon-${this.textContent}.svg`;
            computerHand.src=`./img/icon-${computerChoice}.svg`;
           },1000)

            playerHand.style.animation='shakePlayer 1s ease';
            computerHand.style.animation='shakeComputer 1s ease';


        })

    })
    hands.forEach(hand=>{
        hand.addEventListener('animationend',function () {
            this.style.animation=""
            
        })
    })
}
playMatch()


function computerHands(playerChoice,computerChoice){
    const winner=document.querySelector('.winner');
    console.log(playerChoice, computerChoice, playerChoice === computerChoice)
    if(playerChoice === computerChoice){
        console.log('acd')
        winner.textContent='It is a Tie';
        console.log('dvd');
        return;
    }
    if(playerChoice === 'rock'){
        if(computerChoice==='scissors'){
            winner.textContent='Player wins';
            pScore++;
            updateScore();
            return
        }else{
            winner.textContent='Computer wins';
            cScore++;
            updateScore();
            return;
        }
    }
    if(playerChoice === 'paper'){
        if(computerChoice==='scissors'){
            winner.textContent='Computer wins';
            cScore++;
            updateScore();
            return
        }else{
            winner.textContent='Player wins';
            pScore++;
            updateScore();
            return;
        }
    }
    if(playerChoice === 'scissors'){
        if(computerChoice==='paper'){
            winner.textContent='Player wins';
            pScore++;
            updateScore();
            return
        }else{
            winner.textContent='Computer wins';
            cScore++;
            updateScore();
            return;
        }
    }
}


function updateScore(){
    const playerScore=document.querySelector('.player_score p')
    const computerScore=document.querySelector('.computer_score p')

    playerScore.textContent=pScore;
    computerScore.textContent=cScore
}



