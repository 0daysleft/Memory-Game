//Get The Start Button

document.getElementById('startGame').addEventListener('click', 
     () => {
          document.querySelector('.game-box').style.display = 'flex';
          document.getElementById('startGame').style.display = 'none'
     }
)

//Show Game Rules

// Open modal
document.getElementById('openRulesBtn').onclick = function () {
  document.getElementById('rulesModal').style.display = 'block';
};

// Close modal
document.querySelector('.close-btn').onclick = function () {
  document.getElementById('rulesModal').style.display = 'none';
};

// Close when clicking outside the modal
window.onclick = function (e) {
  const modal = document.getElementById('rulesModal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};




const gridDisplay = document.querySelector('#grid');
let cardsChosen =[]
let cardsChosenIds = []
let cardsWon = [];

const cardArray =[
     {
          name: "fries",
          img: "./images/fries.png"
     },
     {
          name: "cheeseburger",
          img: "./images/cheeseburger.png"
     },
     {
          name: "hotdog",
          img: "./images/hotdog.png"
     },
     {
          name: "ice-cream",
          img: "./images/ice-cream.png"
     },
     {
          name: "milkshake",
          img: "./images/milkshake.png"
     },
     {
          name: "pizza",
          img: "./images/pizza.png"
     },
      {
          name: "fries",
          img: "./images/fries.png"
     },
     {
          name: "cheeseburger",
          img: "./images/cheeseburger.png"
     },
     {
          name: "hotdog",
          img: "./images/hotdog.png"
     },
     {
          name: "ice-cream",
          img: "./images/ice-cream.png"
     },
     {
          name: "milkshake",
          img: "./images/milkshake.png"
     },
     {
          name: "pizza",
          img: "./images/pizza.png"
     }           
]


function shuffle(array){
     for(let i = array.length -1; i >= 0; i--){
          let j = Math.floor(Math.random() * i + 1);

          [array[i], array[j]] = [array[j], array[i]]
     }

     return array;
}

let shuffledArray = shuffle(cardArray);

function createBoard() {

     for(let i =0; i < shuffledArray.length; i++){
          const card = document.createElement('img');
          card.style.cursor = 'pointer';
          card.setAttribute('src',  './images/blank.png')
          card.setAttribute('data-id', i)
          card.addEventListener('click', flipCard)
          gridDisplay.append(card)
     }
}

createBoard();

function checkMatch(){
     const cards = document.querySelectorAll("#grid img");
     //console.log(cards.getAttribute('data-id'))
     console.log(cardsChosenIds)
     if(cardsChosenIds[0] === cardsChosenIds[1])
     {
          cards[cardsChosenIds[0]].setAttribute('src', './images/blank.png')
          cardsChosen = []
          cardsChosenIds = []
          
     }
     else{
     
          if(cardsChosen[0] === cardsChosen [1]){
               cardsWon.push(cardsChosen);
               document.getElementById('result').innerHTML = cardsWon.length;
               cards[cardsChosenIds[0]].style.cursor = 'not-allowed'
               cards[cardsChosenIds[1]].style.cursor = 'not-allowed'
               cards[cardsChosenIds[0]].setAttribute('src', './images/white.png')
               cards[cardsChosenIds[1]].setAttribute('src', './images/white.png')
               cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
               cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
               document.body.classList.remove('change-red')
               document.body.classList.add('change-green')
               
               if(cardsWon.length == cardArray.length/2){
                    gridDisplay.classList.add('restart-game')
                    gridDisplay.innerHTML = 
                                   `Congratulations 🥳🥳. You Just Won!! </br>
                                   <button id='restartGame' onclick='location.reload()'>Restart The Game</button>`
               }
          
          }
          else{

               cards[cardsChosenIds[0]].setAttribute('src', './images/blank.png')
               cards[cardsChosenIds[1]].setAttribute('src', './images/blank.png')
               console.log(cardsChosen[0])
               document.body.classList.remove('change-green')
               document.body.classList.add('change-red')
          }
     }
          cardsChosen = []
          cardsChosenIds = []
     
}


function flipCard(){
     const cardId = this.getAttribute('data-id')
     cardsChosen.push(shuffledArray[cardId].name)
     cardsChosenIds.push(cardId);
     this.setAttribute('src', cardArray[cardId].img)
     console.log(cardsChosen)
          if(cardsChosen.length == 2){
               setTimeout(
                    checkMatch, 500
               )
               
          }
}








