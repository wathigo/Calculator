/* eslint-disable import/extensions */
/* eslint-disable prefer-const */
/* eslint-disable use-isnan */

import operate from './operate.js';

const calculate = (calc, name) => {
  const { total, next, operation } = calc;
  let newTotal = total;
  let newNext = next;
  switch (name) {
    case '+/-':
      newTotal *= -1;
      newNext *= -1;
      break;
    case '.':
      newTotal = parseFloat(`${`${total}.${next}`}`);
      break;
    case 'AC':
      newTotal = '';
      break;
    default:
      if (parseInt(total, 10) !== NaN || parseInt(next, 10) !== NaN) {
        newTotal = operate(total, next, operation);
      }
      break;
  }
  return { total: newTotal, next: newNext, operation };
};

export default calculate;
