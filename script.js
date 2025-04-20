
const gridDisplay = document.querySelector('#grid');

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
     for(let i =0; i < cardArray.length; i++){
          const card = document.createElement('img');
          card.setAttribute('src', shuffledArray[i].img)
          console.log(card);
     }
}

createBoard();













