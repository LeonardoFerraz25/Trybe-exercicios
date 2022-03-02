//const sum = (value1, value2) => value1 + value2;

/* const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os Valores devem ser numéricos'
  }
  return value1 + value2;
}; */

/* const sum = (value1, value2) => {
  if(typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numericos')
  }
  return value1 + value2;
} */

const verifyIsNumber = (value1, value2) => {
  if(typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
}

const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1,value2);
    return value1 + value2;
  } catch (error) {
    throw error.message;
  }
};

console.log(sum('5',8));