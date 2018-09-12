function forLoop(array) {
  myArray = {};
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      return '';
    }
    else if (i === 1) {
      myNewArray = myArray.push(`'I am ${i} strange loop'`);
      return myNewArray;
    }
    else if (i < 25) {
      myNewArray = myArray.push(`'I am ${i} strange loops.'`);
      return myNewArray;
    }
  }
}