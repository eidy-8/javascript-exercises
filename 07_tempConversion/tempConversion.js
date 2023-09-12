function convertToCelsius(f) {
  c = (f-32) / 1.8;
  return Math.round(c * 10) / 10
};

function convertToFahrenheit(c){
  f = 1.8 * c + 32;
  return Math.round(f * 10) / 10
};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
