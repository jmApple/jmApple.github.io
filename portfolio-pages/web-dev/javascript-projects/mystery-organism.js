// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

let idNumber = 999;

function idCounter() {
  idNumber++;
  return idNumber;
}

// console.log(mockUpStrand());
// console.log(mockUpStrand().length);
// console.log(idCounter());

const pAequorFactory = (idNum, arr) => {
  return {
    // _specimenNum: specimenNum,
    specimenNum: idNum,
    // _dna: dna,
    dna: arr,
    
    // This method randomly selects a base in the DNA and changes it to a different base
    // mutate() {
    //   if (returnRandBase() === arr[0]) {
    //     let updateBaseArr = [];
    //     const dnaBaseVals = ['A', 'T', 'C', 'G'];
    
    //     for (i = 0; i <= dnaBaseVals.length - 1; i++) {
    //       if (arr[0] !== dnaBaseVals[i]) {
    //         updateBaseArr.push(dnaBaseVals[i]);
    //       } 
    //       updateBaseArr
    //     }
    
    //     let updateBase = updateBaseArr[Math.floor(Math.random() * 3)]
    //     return arr 
    //   } else {
    //     return arr
    //   }   
    // },
    
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      const currentBase = this.dna[randomIndex];
      let newBase = returnRandBase();
      while (newBase === currentBase) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },

    compareDNA(pAequor) {
      let compArr = pAequor.dna;
      let curArr = this.dna;
      let comboArr = [];

      for (c = 0; c <= pAequor.length -1; c++) {
        if (compArr[c] === curArr[c]) {
          comboArr.push(compArr[c])
        }
        comboArr
      }
      
      const percentage = ((comboArr.length /  pAequor.length) * 100).toFixed(0);
      // return percentage + '% match';
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage}% DNA in common`);
    },

    willLikelySurvive() {
      let cgArr = []
      for (w = 0; w <= arr.length -1; w++) {
        if (arr[w] === 'C' || arr[w] === 'G') {
          cgArr.push(arr[w])
        }
        cgArr
      }
      const percentage = ((cgArr.length /  arr.length) * 100).toFixed(0);
      // return percentage + '% of survival';
      return percentage >= 60 ? true : false; 
    },

  }
};

const pAequor = (num, idNum, arr) => {
  const pAequor = [];
  while (pAequor.length < num) {
    let build = pAequorFactory(idCounter(idNum),mockUpStrand(arr));
    if (build.willLikelySurvive() === true) {
      pAequor.push(build)
    }
  }
  return pAequor
}

// console.log(returnRandBase());
// console.log(pAequorFactory(idCounter(),mockUpStrand()));
// console.log(pAequorFactory(idCounter(),mockUpStrand()));
// console.log(pAequorFactory(idCounter(),mockUpStrand()));
console.log("HELLO");
console.log(pAequor(3, idCounter(), mockUpStrand()));

// const testArr = [ 'C', 'G', 'C', 'C', 'A', 'C', 'G', 'A', 'C', 'G', 'A', 'G', 'A', 'G', 'A' ];

// function testReplace(arr) {
//   if (returnRandBase() === arr[0]) {
//     let updateBaseArr = [];
//     const dnaBaseVals = ['A', 'T', 'C', 'G'];

//     for (i = 0; i <= dnaBaseVals.length - 1; i++) {
//       if (arr[0] !== dnaBaseVals[i]) {
//         updateBaseArr.push(dnaBaseVals[i]);
//       } 
//       updateBaseArr
//     }

//     let updateBase = updateBaseArr[Math.floor(Math.random() * 3)]
//     // console.log(updateBaseArr);
//     // console.log(updateBase);
//     // console.log(arr[0]);
//     // console.log(arr);
//     // arr[0] = updateBase;
//     return arr 
//   } else {
//     return arr
//   }
// }

// console.log(testReplace(testArr));

let curArr = [ 'C', 'G', 'C', 'C', 'A', 'T', 'C', 'A', 'C', 'G', 'A', 'G', 'A', 'G', 'A' ];
let otherArr = [ 'C', 'G', 'C', 'C', 'A', 'T', 'C', 'T', 'G', 'C', 'T', 'A', 'T', 'A', 'T' ];
let comboArr = [];
let compArr = [];

function compareDNA(arr, arr2) {
      for (c = 0; c <= arr.length -1; c++) {
        if (arr[c] === arr2[c]) {
          comboArr.push(compArr[c])
        }
        comboArr
      }
      
      const percentage = ((comboArr.length /  arr.length) * 100).toFixed(0);
      return percentage + '%';
    }
// console.log(compareDNA(curArr, otherArr));

function willLikelySurvive(arr) {
  let cgArr = []
  for (w = 0; w <= arr.length -1; w++) {
    if (arr[w] === 'C' || arr[w] === 'G') {
      cgArr.push(arr[w])
    }
    cgArr
  }
  const percentage = ((cgArr.length /  arr.length) * 100).toFixed(0);
  // return percentage + '% of survival';
  return percentage >= 60 ? true : false; 
}
// console.log(willLikelySurvive(curArr));
// console.log(willLikelySurvive(otherArr));


// BELOW IS THE GENERATED CODE
// BELOW IS THE GENERATED CODE
// BELOW IS THE GENERATED CODE


// // Returns a random DNA base
// const returnRandBase = () => {
//   const dnaBases = ['A', 'T', 'C', 'G']
//   return dnaBases[Math.floor(Math.random() * 4)] 
// }

// // Returns a random single strand of DNA containing 15 bases
// const mockUpStrand = () => {
//   const newStrand = []
//   for (let i = 0; i < 15; i++) {
//     newStrand.push(returnRandBase())
//   }
//   return newStrand
// }

// console.log(mockUpStrand());
// console.log(mockUpStrand().length);

// let idCounter = 1; // Start with ID 1

// const pAequorFactory = (idNum, arr) => {
//   return {
//     specimenNum: idNum,
//     dna: arr,

//     mutate() {
//       // Randomly select an index in the dna array
//       const randomIndex = Math.floor(Math.random() * this.dna.length);
//       const currentBase = this.dna[randomIndex];

//       // Get a new base that is different from the current base
//       const dnaBases = ['A', 'T', 'C', 'G'];
//       const newBases = dnaBases.filter(base => base !== currentBase);
//       const newBase = newBases[Math.floor(Math.random() * newBases.length)];

//       // Replace the current base with the new base
//       this.dna[randomIndex] = newBase;

//       // Return the mutated dna
//       return this.dna;
//     },

//     compareDNA(otherPAequor) {
//       let identicalBases = 0;

//       // Compare each base in the DNA arrays
//       for (let i = 0; i < this.dna.length; i++) {
//         if (this.dna[i] === otherPAequor.dna[i]) {
//           identicalBases++;
//         }
//       }

//       // Calculate the percentage of identical bases
//       const percentage = ((identicalBases / this.dna.length) * 100).toFixed(2);

//       // Print the result
//       console.log(
//         `specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${percentage}% DNA in common.`
//       );
//     },
//     willLikelySurvive() {
//       const survivalBases = this.dna.filter(base => base === 'C' || base === 'G');
//       const survivalRate = (survivalBases.length / this.dna.length) * 100;
//       return survivalRate >= 60;
//     }
//   }
// }

// const survivingPAequor = []; 
// while (survivingPAequor.length < 30) {
//   const newOrganism = pAequorFactory(idCounter, mockUpStrand());
//   if (newOrganism.willLikelySurvive()) {
//     survivingPAequor.push(newOrganism);
//   }
//   idCounter++;
// }

// const organism1 = pAequorFactory(1, mockUpStrand());
// const organism2 = pAequorFactory(2, mockUpStrand());

// console.log('Organism 1 DNA:', organism1.dna);
// console.log('Organism 2 DNA:', organism2.dna);
// console.log('Will Organism 1 Likely Survive?', organism1.willLikelySurvive());
// console.log('Surviving P. aequor:', survivingPAequor);
// console.log('Number of Surviving P. aequor:', survivingPAequor.length);

// organism1.compareDNA(organism2);

