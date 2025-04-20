
const gridDisplay = document.querySelector('#grid');
let cardsChosen =[]

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
          img: "./images/fries.png"
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
          img: "./images/fries.png"
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
          card.setAttribute('src',  './images/blank.png')
          card.setAttribute('data-id', i)
          card.addEventListener('click', flipCard)
          gridDisplay.append(card)
     }
}

createBoard();


function flipCard(){
     const cardId = this.getAttribute('data-id')
     cardsChosen.push(shuffledArray[cardId].name)
     //console.log("card 0: ", cardsChosen[0] , " card 1: ", cardsChosen[1])
     this.setAttribute('src', cardArray[cardId].img)
     console.log(cardsChosen)
          if(cardsChosen.length == 2){
               gridDisplay.innerHTML =""
               createBoard()
               setTimeout(
                    checkMatch, 500
               )
          }
          cardsChosen = []
}


function checkMatch(){
     console.log("card 0: ", cardsChosen[0] , " card 1: ", cardsChosen[1])
     if(cardsChosen[0] === cardsChosen [1]){
          console.log('You Won!!!!!')
          console.log("card 0: ", cardsChosen[0] , " card 1: ", cardsChosen[1])
     }
     else{
          console.log('Not Yet Won')
     }
}








