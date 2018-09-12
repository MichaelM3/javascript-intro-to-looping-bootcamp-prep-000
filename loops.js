function forLoop(array) {
  myArray = {};
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      return '';
    }
    else if (i === 1) {
      let first = `'I am ${i} strange loop.'`
      myArray.push(first)
    }
    else if (i < 25) {
      console.log(`'I am ${i} strange loops.'`);
    }
  }
}

forLoop(myArray);