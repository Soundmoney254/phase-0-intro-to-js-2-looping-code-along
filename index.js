const nameArray =["Ada", "Brendan", "Ali"];
const theOccasion = "birthday";

function writeCards(nameArray, theOccasion){
  const card =[];
  for(let e = 0; e < nameArray.length; e++) {
    card.push(`Thank you, ${nameArray[e]}, for the wonderful ${theOccasion} gift!`);
   }
   return card;
  }
const cards = writeCards(nameArray,theOccasion)
console.log(cards)


function countDown(inputNum){
  while (inputNum >= 0) {
    console.log(inputNum--);
  }
}

countDown(5);