// ********************************
// Converting Kelvin to 
// Celsius, Fahrenheit, and Newton
// ********************************
const getTemp = (kelvin) => {
  let k = kelvin; 
  let c = kelvin - 273;
  let f = Math.floor(c*(9/5) + 32);
  let n = Math.floor(c * (33/100));

  return `if the temp is ${k} kelvin:` + '\n' + `${f} degrees fahrenheit` + '\n' + `${c} degrees celsius` + '\n' +  `${n} Newton(s)`
}

console.log(getTemp(293));

// ********************************
// Creating a pyramid 
// ********************************
// <!-- pyramid -->
const character = '^';
const count = 5;
const rows = [];
let result = ""
        
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

console.log(padRow(1, 5)); // "    ^    "
// console.log(padRow(2, 5)); // "   ^^^   "
// console.log(padRow(3, 5)); // "  ^^^^^  "

for (let i = 1; i < count; i++) {
  rows.push(padRow(i, count));
}

for (let i = count; i > 0; i -= 1) {
  rows.push(padRow(i, count));
}

for (const row of rows) {
  result = result + row + "\n";
  console.log("ROW: " + row + "\n" + "RESULT: " + "\n" + result);
}

function pyramid(character, count) {
  const rows = [];
  let result = ""
  function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  }
  for (let i = 1; i < count; i++) {
    rows.push(padRow(i, count));
  }
  for (let i = count; i > 0; i -= 1) {
    rows.push(padRow(i, count));
  }
  for (const row of rows) {
    result = result + row + "\n";
  }
  return result;
}

console.log(result);

function pyramid(character, count) {
  const rows = [];
  let result = ""
  function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  }
  for (let i = 1; i < count; i++) {
    rows.push(padRow(i, count));
  }
  for (let i = count; i > 0; i -= 1) {
    rows.push(padRow(i, count));
  }
  for (const row of rows) {
    result = result + row + "\n";
  }
  return result;
}

console.log(pyramid('#', 7));

// const brick = "#";
// const maxBrickCount = 5;

function fullPyramid(brick, maxBrickCount) {
  let builtRows = [];
  let thePyramid = '';

  function pyramidRow(rowNumber, maxBrickCount) {
    return "-".repeat(maxBrickCount - rowNumber) + brick.repeat(2 * rowNumber - 1);
  }
  // console.log("THIS: " + pyramidRow5(4, 5));
  for (let rowNumber = 1; rowNumber < maxBrickCount; rowNumber++) {
    // builtRows.push(brick.repeat(i + 1));
    builtRows.push(pyramidRow(rowNumber, maxBrickCount));
  }

  for (const x of builtRows) {
    thePyramid += x + "\n";
  }

  return "PYRAMID: \n" + thePyramid;

}

console.log(fullPyramid("#", 5));

const brick = '<>';
// create array of 'bricks'
const brickArray = [];
// create array of 'bricks'
for (let i = 1; i < 7; i++) {
  brickArray.push(brick.repeat(i));
}

// build pyramid rows from array
let pyramidRows = "";
for (const buildPyramid of brickArray) {
  pyramidRows += buildPyramid + "\n";
}
console.log(`BRICK ARRAY: \n${brickArray}`);
console.log(`PYRAMID ROW: \n${pyramidRows}`);

function pyramidRowContent(rowCount, maxBrickCount) {
  return '-'.repeat(maxBrickCount - rowCount) + brick.repeat(2 * rowCount - 1);
}

const maxBrickCount = 5;
const rowBrickArray = [];
// create array of 'bricks' using pyramidRowContent
for (let i = 1; i < maxBrickCount; i++) {
  rowBrickArray.push(pyramidRowContent(i, maxBrickCount));
}

// put it all together

// pryamid1.innerText = "Don't sell your only weapon!";
const pryamid1 = document.querySelector("#pyramid-1");

function buildPyramid(brick, maxBrickCount, inverted = false) {
  const brickArray = [];
  let pyramidRows = "";
  

  function pyramidRowContent(rowCount, maxBrickCount) {
    return '&emsp;&ensp;'.repeat(maxBrickCount - rowCount) + brick.repeat(2 * rowCount - 1) + "<br>";
  }

  for (let i = 1; i < maxBrickCount; i++) {
    brickArray.push(pyramidRowContent(i, maxBrickCount));
  }

  if (inverted) {
    for (let i = maxBrickCount; i > 0; i -= 1) {
      brickArray.push(pyramidRowContent(i, maxBrickCount));
    }
  } else {}

  for (const buildPyramid of brickArray) {
    pyramidRows += buildPyramid;
  }

  return  pryamid1.innerHTML = pyramidRows;
  
}

console.log(`PYRAMID ROW 1 CONTENT: \n${pyramidRowContent(1, 5)}`);
console.log(`BRICK ARRAY FROM pyramidRowContent: \n${rowBrickArray}`);
// pryamid-1
console.log(`BUILD PYRAMID: \n${buildPyramid("<>", 5)}`);
// console.log(`BUILD DIAMOND: \n${buildPyramid("M", 3, true)}`);

// console.log([] + [])
// console.log(Number("5") + Boolean(0) + String(3));
// console.log(Number("5") + Boolean(1) + String(3));


function tryPyramid(character, count) {
  const rows = [];
  let result = ""
  function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  }
  for (let i = 1; i < count; i++) {
    rows.push(padRow(i, count));
  }
  for (let i = count; i > 0; i -= 1) {
    rows.push(padRow(i, count));
  }
  for (const row of rows) {
    result = result + row + "\n";
  }
  return result;
}

console.log(tryPyramid("&", 5));

// new pyramid
theBrick = "#";
theMax = 13;
theArray = [];
theString = "";

function makeArrayRows(rowNum, theMax) {
  return " ".repeat(theMax-rowNum) + theBrick.repeat(2*rowNum - 1);
}

// for (let i=0; i<theMax; i++) {
//   theArray.push(theBrick.repeat(i));
// }
for (let i = 1; i < theMax; i++) {
  theArray.push(makeArrayRows(i, theMax));
}

for (const x of theArray) {
    theString += x + "\n";
}

console.log(theArray);
console.log(theString);

function putItTogether (brick, theMax) {
  theArray = [];
  theString = "";

  function makeArrayRows(rowNum, theMax) {
    return " ".repeat(theMax-rowNum) + brick.repeat(2*rowNum - 1);
  } 

  for (let i = 1; i < theMax; i++) {
    theArray.push(makeArrayRows(i, theMax));
  } 
  
  for (let i = theMax; i > 0; i -= 1) {
    theArray.push(makeArrayRows(i, theMax));
  }

  for (const x of theArray) {
    theString += x + "\n";
  } 

  return theString;
}

console.log(putItTogether("$", 7));
