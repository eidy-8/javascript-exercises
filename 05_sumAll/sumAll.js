function sumAll(min, max) {
      let sum = 0;
      if (min > max) {
        const temp = min;
        min = max;
        max = temp;
      }      
      for (let i = min; i <= max; i++) {
        sum += i;
      }
      return sum;
    };
  
  const result = sumAll(123, 1);
  
  // Do not edit below this line
  module.exports = sumAll;