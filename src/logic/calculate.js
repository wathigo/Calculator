/* eslint-disable import/extensions */
/* eslint-disable prefer-const */
/* eslint-disable use-isnan */

import operate from './operate.js';

const calculate = (calc, name) => {
  const { total, next, operation } = calc;
  let newTotal = total;
  let newNext = next;
  let newOp = operation;
  switch (name) {
    case '+/-':
      newTotal *= -1;
      newNext *= -1;
      break;
    case '.':
      if (operation !== null) {
        newNext = `${`${next}.`}`;
      } else {
        newTotal = `${`${total}.${next}`}`;
      }
      break;
    case 'AC':
      newTotal = '';
      newNext = '';
      newOp = null;
      break;
    default:
      if (parseInt(total, 10) !== NaN || parseInt(next, 10) !== NaN) {
        newTotal = operate(total, next, operation);
      }
      break;
  }
  return { total: newTotal, next: newNext, operation: newOp };
};

export default calculate;
