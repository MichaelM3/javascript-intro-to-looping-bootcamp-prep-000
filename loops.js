function forLoop(array) {
  var myArray = {};
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      return '';
    }
    else if (i === 1) {
      myArray.push(`'I am ${i} strange loop'`);
    }
    else {
      myArray.push(`'I am ${i} strange loops.'`);
    }
    return myArray
  }
}