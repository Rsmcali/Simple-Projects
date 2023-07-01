const amount = document.querySelector('input');
const button = document.querySelector('.press');

const percent = document.querySelectorAll('.percent button');

//This foreach loop allows us to grab each individual button and make the choices we want accordinly.
percent.forEach(buttons => {

  buttons.addEventListener('click', () => {
   

    if(buttons.className === 'b1')
  
    button.addEventListener('click', () => {
      
      calculation(.10);
    
    });
    else if(buttons.className === 'b2'){
      button.addEventListener('click', () => {
        
        calculation(.15);
      
      });
    }else{
      button.addEventListener('click', () => {
        
        calculation(.20);
      
      });
    }
  })
  
});
  
  
//This function does the calculation of the tip and displays on the html document.
const calculation = (tipAmount) => {

  const tip = Number(amount.value) * tipAmount;

  const total = Number(amount.value) + tip;

  document.querySelector('.h1').innerHTML = `Bill: $${amount.value}`;
  document.querySelector('.h2').innerHTML = `Tip: $${tip.toFixed(2)}`;
  document.querySelector('.h3').innerHTML = `Total: $${total.toFixed(2)}`;
};
