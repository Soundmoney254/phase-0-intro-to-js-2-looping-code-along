const nameArray =["Ada", "Brendan", "Ali"];
const theOccasion = "birthday";

function writeCards(nameArray, theOccasion){
  const cards =[];
  for(let e = 0; e < nameArray.length; e++) {
    cards.push(`Thank you, ${nameArray[e]}, for the wonderful ${theOccasion} gift!`);
   }
   return cards;
  }

  const cards = writeCards(nameArray,theOccasion)
  console.log(cards)


function countDown(inputNum){
  while (inputNum >= 0) {
    console.log(inputNum--);
  }
}

inputNum = 13
console.log(countDown(inputNum))