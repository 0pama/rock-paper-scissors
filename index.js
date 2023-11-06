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
  // gettin player choice
  function playerchoice(player){
  player = prompt("what is your choice")
  if (/paper/i.test(player)     // validating player input
     ||/rock/i.test(player)                 
     || /scissors/i.test(player)) {
     return player
     } else {
      return undefined
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
  
  function game(){
    let playerScore = 0;      
    let computerScore = 0;
    let roundsPlayed = 0;
    let roundstied = 0;


    for (let i = 0; i < 5; i++) {
   const  player = playerchoice();
   const  computer = computerchoice();

    if (player == undefined) {
   return console.log("errror wrong input"); // stoping the the game if the player input is wrong


   } else {   // if player input is right start playing the game
      const result = playround(computer,player); // intialize the return value from the function to the  result
      console.log(`round:${i+1} ${result}`);

      if(result === `player wins, ${player} beats ${computer} `) {   // if the result is == "player wins" 
      playerScore++ // increment player score by 1 if player wins 
      } 
      
      else if(result === `computer wins, ${computer} beats ${player} `) {  //else  if the result is == "computer wins"
      computerScore++; // increment computer score by 1 if computer wins
      } 
      
      else {  // if the result is not = "player wins" and "computer wins"
         roundstied++  // increment roundstied score by 1 if no one wins 
      }

    }
    roundsPlayed++ // increment roundsPlayed by 1 after every round
    
    }
    
    document.getElementById("result").innerHTML = `Player won: ${playerScore} times. Computer won: ${computerScore} times. Rounds played: ${roundsPlayed}. Rounds tied: ${roundstied}`;    }
    
  
  // invoke the game 





  // show game result in the dome 
