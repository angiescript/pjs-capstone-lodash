const _ = {
  clamp(currentNumber, lowerNumber, upperNumber) {
    if (currentNumber < lowerNumber) {
      return lowerNumber;
    } else if (currentNumber > upperNumber) {
      return upperNumber;
    } else {
      return currentNumber;
    }
  },

  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    } else if (start > end) {
      temp = end;
      end = start;
      start = temp;
    }
    let isInRange = start <= number && number < end;
    return isInRange;
  },

  words(sentence) {
    arrayOfWords = sentence.split(' ');
    return arrayOfWords;

  },

  pad(string, length) {
    if (string.length >= length) {
      return string;
    }
      let startPadding = Math.floor((length - string.length)/2);
      let endPadding = length - string.length - startPadding;
   let paddedString = ' '.repeat(startPadding) + string + ' '.repeat(endPadding);
   return paddedString;

  },

  has(object, key) {
    let hasValue = (key in object ==! undefined);
    return hasValue;

  },

  invert(object) {
    let invertedObject = {};
    for (const originalKey in object) {
      let originalValue = object.originalKey;
      invertedObject[originalValue] = originalKey;
    }
    return invertedObject;

  },

  findKey(object, predicate) {
    for (let key in object) {
      const value = object.key;
      const predicateReturnValue= predicate(object[key]);
      if (predicateReturnValue) {
        return key;
      }

  }
   return undefined;

  },

  drop(array, number) {
    if (number === undefined) {
      number = 1;
    }

    let newArray = array.slice(number);
    
    return newArray;

  },

  dropWhile(array, predicate) {
    let dropNumber = array.findIndex((element, index) => !predicate(element, index, array));
    let droppedArray = this.drop(array, dropNumber);

    return droppedArray;

  },

  chunk(array, size) {
    if (size === undefined) {
    size = 1;
    };

    let newArray = [];

    for (let i = 0; i < array.length; i = (i+size)) {
     let arrayChunk = array.slice(i, i+size);
     newArray.push(arrayChunk);

    }

    return newArray;
  },

}



// Do not write or modify code below this line.
module.exports = _;
