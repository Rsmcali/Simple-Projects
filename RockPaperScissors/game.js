//Variable declaration globally
const buttons = document.querySelectorAll('.buttons button');
const reset = document.querySelector('.reset');

//This variable checks to see if there is anything in score in local storage, and it there is not it sets values to zero to start a new game.
const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0
};

  
//Iterate through the buttons to make a selection.
buttons.forEach(choice => {

  choice.addEventListener('click', () => {

    const user = choice.className;
    const computer = Math.floor(Math.random() * 3);
    let compChoice = '';

    //Logic of the main game
    if
      ((user === 'rock' && computer === 0) || 
      (user == "paper" && computer === 1) || 
      (user === 'scissors' && computer ===2))
      {
      document.querySelector('h6').innerHTML = "its a tie!";
      score.ties ++;
      }
      else if
      ((user === 'rock' && computer === 2) || 
      (user === 'paper' && computer === 0) || 
      (user === 'scissors' && computer === 1))
      {
      document.querySelector('h6').innerHTML = "You win!";
      score.wins ++;
      }
      else
      {
      document.querySelector('h6').innerHTML = "Computer wins!";
      score.losses ++;
    }

    //Store the score in local storage so it doesn't clear it when the page is refreshed.
    localStorage.setItem("score", JSON.stringify(score));

    //Displays the current store on the screen.
    document.querySelector('.result3')
    .innerHTML = `
      Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}
    `

    //This is the reset button logic and funtionality.
    reset.addEventListener('click', () => {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;

      //This removes the score stored in local storage.
      localStorage.removeItem('score');

      document.querySelector('.result3')
      .innerHTML = `
      Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}
    `
      
    });


    //This piece of logic will display the user choice and the computer choice on the screen.
    if(computer === 0){
      compChoice = 'rock';
    }else if(computer === 1){
      compChoice = 'paper';
    }else{
      compChoice = 'scissors';
    }

    document.querySelector('.result2')
    .innerHTML = `
      You =>
      <img src="${user}.png" alt="">
      <img src="${compChoice}.png" alt=""> <= Computer
      `
    
  });
  
})



