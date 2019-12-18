import operate from './operate.js';

const calculate = (calc, name) => {
  let { total, next, operation } = calc;
  switch (name) {
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case '.':
      total = parseFloat(`${`${total}.${next}`}`);
      break;
    case 'AC':
      total = 0;
      next = 0;
      break;
    default:
      total = operate(total, next, operation);
      break;
  }
  return { total, next, operation };
};

export default calculate;
