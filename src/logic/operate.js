const Big = require('big.js');

const operate = (total, next, operation) => {
  const num1 = Big(total);
  const num2 = Big(next);
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
