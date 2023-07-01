const clock = document.querySelector('.clock');


//This function gets the hours, minutes, and seconds and displays it on the browser.
const tick = () => {
  const time = new Date();
  
  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();

  const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;

    clock.innerHTML = html;
  };

  //This function refreshes the browser every second allowing us to see the changes in real time.
  setInterval(tick, 1000);

