const getTemp = (kelvin) => {
  let k = kelvin; 
  let c = kelvin - 273;
  let f = Math.floor(c*(9/5) + 32);
  let n = Math.floor(c * (33/100));

  return `if the temp is ${k} kelvin:` + '\n' + `${f} degrees fahrenheit` + '\n' + `${c} degrees celsius` + '\n' +  `${n} Newton(s)`
}

console.log(getTemp(293));