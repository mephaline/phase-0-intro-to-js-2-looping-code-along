// Code your solutions in this file
function writeCards(names) {
    const thankYouMessages = [];
  
    for (const name of names) {
      thankYouMessages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
    }
    
    return thankYouMessages;
  }
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }