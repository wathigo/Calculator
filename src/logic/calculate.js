
const calculate = (calc, name) => {

  const {total, next, operation} = calc;
  switch (name) {
    case '+/-':
      total = total * -1
      next = next * -1
      break;
    case '.':
      total = parseFloat(`${total + '.' + next}`);
      break;
    case 'AC':
      total = 0;
      next = 0;
    default:
      total = operate(total, next, operation);
      break;
  }
  return {total, next, operation}
};

export default calculate;
