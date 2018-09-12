function forLoop(array) {
  var myArray = {};
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      return '';
    }
    else if (i === 1) {
      myNewArray = myArray.push(`'I am ${i} strange loop'`);
      console.log(myNewArray);
    }
    else if (i < 25) {
      mySecondArray = myArray.push(`'I am ${i} strange loops.'`);
      console.log(mySecondArray);
    }
  }
}