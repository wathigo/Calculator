/* eslint-disable import/extensions */

const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '÷':
      result = num1 / num2;
      break;
    case 'X':
      result = num1 * num2;
      break;
    default:
      break;
  }
  return result;
};

export default operate;
