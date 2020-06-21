const logger = function (array) {
  array.forEach((elements) => console.log(elements));
};
logger([1, 9, 9, 4]);

//____________________________________________________________________
const toCelsius = function (temperatures) {
  return temperatures.map((tempInC) => (tempInC - 32) * (5 / 9));
  //return Celsius,
};
console.log(toCelsius([32, 59, 122, 28.4]));
//____________________________________________________________________
const hottestDays = function (temperatures, threshhold) {
  return temperatures.filter(
    (largerthanthreshhold) => largerthanthreshhold > threshhold
  );
};

console.log(hottestDays([32, 59, 122, 28.4], 35));
//____________________________________________________________________
const logHottestDays = function (temperatures, threshhold) {
  const hd = hottestDays(temperatures, threshhold);
  const hCd = toCelsius(hd);
  logger(hCd);
};
logHottestDays([32, 59, 122, 28.4], 35);
//____________________________________________________________________
module.exports = { logger, toCelsius, hottestDays, logHottestDays };
