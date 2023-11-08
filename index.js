// comp choice
function computerchoice(){
    let randomnum =  Math.floor(Math.random() * 3);
    if(randomnum == 1) {
    return "Rock"
    }
    else if(randomnum == 2) {
      return "paper"
    } else {
    return "scissors"
    }
  }



  
  // deciding who wins
  function playround(comp,player){
      if(/rock/i.test(comp) && /rock/i.test(player)   // all possible combinations  of a tie
      || /paper/i.test(comp) && /paper/i.test(player)
      || /scissors/i.test(comp) && /scissors/i.test(player)
      ) {
       return `TIE, ${comp} ties with ${player} `


      } else if (/rock/i.test(comp) && /paper/i.test(player)  // all possible combinations of player winning and
        || /paper/i.test(comp) && /scissors/i.test(player)
        || /scissors/i.test(comp) && /rock/i.test(player)){
      return `player wins, ${player} beats ${comp} `
      }
      

      else {
        return `computer wins, ${comp} beats ${player} `
      }
     
  }

  // game section
  



 let buttons = document.getElementsByTagName("button");

 let playerScore = 0;      
 let computerScore = 0;
 let roundsPlayed = 0;
 let roundstied = 0;

 
for (let i = 0 ; i < buttons.length; i++){
buttons[i].addEventListener("click", function(e){
    let playerchoice = e.target.value;
    let compchoice = computerchoice();
    let result = playround(compchoice,playerchoice);
    roundsPlayed++;

    if(result === `computer wins, ${compchoice} beats ${playerchoice} `) {  //else  if the result is == "computer wins"
      computerScore++; // increment computer score by 1 if computer wins
      } 
      if(result === `player wins, ${playerchoice} beats ${compchoice} `) {   // if the result is == "player wins" 
        playerScore++ // increment player score by 1 if player wins 
        } 
        if (playerScore > 5 ) {
           playerScore = 0;      
           computerScore = 0;
           roundsPlayed = 0;
           roundstied = 0;
        }
        if (computerScore == 5) {
          document.getElementById("results").innerHTML = `<h1 id = "extra-large">you lost</h1>`;
        }

      if(playerScore == 5 ) {
        document.getElementById("results").innerHTML = `<h1>you won  ${playerScore}   times </h1>`;
  
       
      } else {
        document.getElementById("results").innerHTML = result ;
        document.getElementById("roundsplayed").innerHTML = "rounds played: " + roundsPlayed ;
        document.getElementById("playerscore").innerHTML = "playerscore: " + playerScore ;
        document.getElementById("compscore").innerHTML = "computer score : " + computerScore ;

        
      }
      
    console.log(roundstied);
    console.log("compscore :" + computerScore + "  player :" + playerScore );
    
    
   


 });

}
  




  
