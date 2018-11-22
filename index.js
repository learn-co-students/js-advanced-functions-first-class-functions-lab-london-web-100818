// Code your solution in this file!

const returnFirstTwoDrivers = (array) => {
  let returnArray = [];
    returnArray.push(array[0])
    returnArray.push(array[1])
    return returnArray;
}


const returnLastTwoDrivers = (array) => {
  let returnArray = [];
  returnArray.push(array[array.length -2])
  returnArray.push(array[array.length -1])
  return returnArray;
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


const createFareMultiplier = (num) => {
  return function (multi){
    return num * multi;
  }
}

const fareDoubler = (fare) => {
    return fare + fare;
}

const fareTripler = (fare) => {
  return fare * 3;
}

const fetchSpecifiedDrivers = (arrayOfDrivers, aFunction) => {
  return aFunction(arrayOfDrivers) 
}
