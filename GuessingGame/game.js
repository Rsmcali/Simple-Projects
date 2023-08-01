
const generateNumber = document.querySelector(".generate");

const reset = document.querySelector(".restart");


  generateNumber.addEventListener('click', () => {

    const random = Math.floor(Math.random() * 51);
    

    const input1 = document.querySelector(".input1");

    const submit1 = document.querySelector(".submit1");

    let numberTries = 0, numbersPicked = [];

    document.querySelector(".ranNum").innerHTML = "_";

    generateNumber.disabled = true;

    
    
    submit1.addEventListener('click', () =>{

      if(input1.value < 0 || input1.value > 50){
        alert("Please choose a valid number!");
      }else{
        numbersPicked.push(input1.value);
        numberTries ++;
      }
      
      if(input1.value < random){
        document.querySelector(".result").innerHTML = "Higher";
        document.querySelector(".numTries").innerHTML = `Numbers of guesses: ${numberTries}`;
        document.querySelector(".numPicks").innerHTML = `Guessed Numbers: ${numbersPicked}`
      }else if(input1.value > random){
        document.querySelector(".result").innerHTML = "Lower";
        document.querySelector(".numTries").innerHTML = `Numbers of guesses: ${numberTries}`;
        document.querySelector(".numPicks").innerHTML = `Guessed Numbers: ${numbersPicked}`
      }else{
        document.querySelector(".result").innerHTML = "You guessed it!!!";
        document.querySelector(".ranNum").style.background = "none";
        document.querySelector(".numTries").innerHTML = `Numbers of guesses: ${numberTries}`;
        document.querySelector(".numPicks").innerHTML = `Guessed Numbers: ${numbersPicked}`
        submit1.disabled = true;
        input1.disabled = true;
        document.querySelector(".ranNum").innerHTML = random;
        document.querySelector(".restart").style.display = "block";
        document.querySelector(".restart").innerHTML = "Play again";
        reset.addEventListener('click', () => {
          location.reload();
        })
        
      }
      
    })

  });




