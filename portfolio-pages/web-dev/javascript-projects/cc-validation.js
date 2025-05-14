// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above except mystery6
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// An array of all the arrays above + mystery6
// const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, mystery6];


// Add your functions below:
// const numbersArr = [0, 0 , 8, 1, 2, 3, 4, 5];

// Add your functions below:
function validateCred(arr) {
  let sum = 0;
  let evenArr = [];
  let revArr = [];

  for (i=arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  // console.log(revArr);
  for (i=0; i <= revArr.length -1 ; i++) {
    if (i % 2 === 0) {
      evenArr.push(revArr[i])
      // console.log(evenArr);
    } else {
      let oddSpot = revArr[i] * 2;
      if (oddSpot > 9 && oddSpot !== 0) {
        evenArr.push(oddSpot - 9)
        // console.log(evenArr);
      } else {
        evenArr.push(oddSpot)
        // console.log(evenArr);
      }
    }
  }

  evenArr.forEach(num => sum += num);
  // return (sum); // with numbersArr Output: 28
  return sum % 10 === 0 ? true : false;
  // return evenArr
}

function findInvalidCards(cardArr) {
  // const invalidCards = [];
  // for (n=0; n <= cardArr.length -1; n++) {
  //   validateCred(cardArr[n]) === false ? invalidCards.push(cardArr[n]) : null;
  // }
  const invalidCards = cardArr.filter(card => !validateCred(card));
  
  return invalidCards;
}

function findValidCards(cardArr) {
  // const validCards = [];
  // for (n=0; n <= cardArr.length -1; n++) {
  //   validateCred(cardArr[n]) === true ? validCards.push(cardArr[n]) : null;
  // }
  const validCards = cardArr.filter(card => validateCred(card));

  return validCards;
}

function idInvalidCardCompanies(coArr) {
  const invalidCardCompanies = [];
  const notFound =[];
  for(x = 0; x <= coArr.length -1; x++) {
    checkArr = coArr[x];
    // console.log(checkArr[0]);
    switch (checkArr[0]) {
      case 3:
        invalidCardCompanies.push('Amex');
        break;
      case 4:
        invalidCardCompanies.push('Visa');
        break;
      case 5:
        invalidCardCompanies.push('Mastercard');
        break;
      case 6:
        invalidCardCompanies.push('Discover');
        break;
      default:
      notFound.push(checkArr[0]);
    }
  }
  // console.log(notFound);
  // console.log(notFound.length);
  // const notFoundCount = notFound.length;
  // if (notFoundCount > 0) {
  //   invalidCardCompanies.push(`${notFoundCount} not found`)
  // }
  const noDupesArr = [...new Set(invalidCardCompanies)];
  
  return noDupesArr
}

// console.log(validateCred(numbersArr))
console.log(validateCred(valid1))
console.log(validateCred(valid2))
console.log(validateCred(valid3))
console.log(validateCred(valid4))
console.log(validateCred(valid5))
console.log(validateCred(invalid1))
console.log(validateCred(invalid2))
console.log(validateCred(invalid3))
console.log(validateCred(invalid4))
console.log(validateCred(invalid5))
console.log(validateCred(mystery1))
console.log(validateCred(mystery2))
console.log(validateCred(mystery3))
console.log(validateCred(mystery4))
console.log(validateCred(mystery5))
// console.log(validateCred(mystery6) + '\n')
console.log('\n')
console.log('invalid cards:')
console.log(findInvalidCards(batch).length)
console.log('valid cards:')
console.log(findValidCards(batch).length)
console.log('\n')
console.log(idInvalidCardCompanies(findInvalidCards(batch)));