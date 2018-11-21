const returnFirstTwoDrivers= function(drivers) {
  return drivers.slice(0,2);
}
const returnLastTwoDrivers= function(drivers) {
  return drivers.slice(drivers.length-2,drivers.length)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplyValue) {
  return function (value) {
    return multiplyValue *value;
  }
}

const fareDoubler=createFareMultiplier(2)
const fareTripler=createFareMultiplier(3)

function fetchSpecifiedDrivers(arrayOfDrivers, functionn) {
  return functionn(arrayOfDrivers);
}
