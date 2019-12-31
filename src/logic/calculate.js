/* eslint-disable import/extensions */
/* eslint-disable prefer-const */
/* eslint-disable use-isnan */
/* eslint-disable no-restricted-globals */

import operate from './operate.js';

const calculate = (calc, name) => {
  const {
    total, next, operation, result,
  } = calc;
  let newTotal = total;
  let newNext = next;
  let newOp = operation;
  let newResult = result;
  if (!isNaN(name)) {
    if (newTotal.length === 0 || newTotal.toString().slice(-1) === '.') {
      newTotal = `${newTotal}${name}`;
      newResult = `${newResult}${name}`;
    } else {
      newNext = `${newNext}${name}`;
      newResult = `${newResult}${name}`;
    }
  } else {
    switch (name) {
      case '+/-':
        newTotal *= -1;
        newNext *= -1;
        newResult = newTotal;
        break;
      case '.':
        if (operation !== null) {
          newNext = `${`${next}.`}`;
          newResult = `${newResult}.`;
        } else {
          newTotal = `${total}.`;
          newResult = `${newResult}.`;
        }
        break;
      case 'AC':
        newTotal = '';
        newNext = '';
        newOp = null;
        newResult = '';
        break;
      case '=':
        if (parseInt(total, 10) !== NaN || parseInt(next, 10) !== NaN) {
          newTotal = operate(total, next, operation);
          newResult = newTotal;
          newNext = '';
          newOp = null;
        }
        break;
      default:
        newOp = name;
        newResult = `${newResult}${newOp}`;
        break;
    }
  }
  return {
    total: newTotal, next: newNext, operation: newOp, result: newResult,
  };
};

export default calculate;
