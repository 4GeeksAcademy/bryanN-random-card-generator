import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");

  function randomfigure() {
    let figures = ['♦', '♥', '♠', '♣'];
    let rndm = Math.floor(Math.random() * figures.length)
    let assignedfig = figures[rndm]
    let number = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    
    let rndmnumber = Math.floor(Math.random() * 13);
    
    if (rndm <= 1) {
      document.getElementById('cardfigure1').style.color = 'red'
      document.getElementById('cardfigure2').style.color = 'red'
      document.getElementById('cardfigure1').innerHTML = assignedfig
      document.getElementById('cardfigure2').innerHTML = assignedfig
      document.getElementById('cardnumber').innerHTML = number[rndmnumber]
      
    }else{
    document.getElementById('cardfigure1').innerHTML = assignedfig
    document.getElementById('cardfigure2').innerHTML = assignedfig
    document.getElementById('cardnumber').innerHTML = number[rndmnumber]
    }
  }

  // <i class="fa-regular fa-chess-king"></i>
  // <i class="fa-regular fa-chess-queen"></i>
  // <i class="fa-solid fa-a"></i>
  // <i class="fa-solid fa-j"></i>

  randomfigure()



};
