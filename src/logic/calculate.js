/* eslint-disable import/extensions */
/* eslint-disable prefer-const */

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
      if(parseInt(total) !== NaN || parseInt(next) !== NaN){
        newTotal = operate(total, next, operation);
      }
      break;
  }
  return { total: newTotal, next: newNext, operation };
};

export default calculate;
