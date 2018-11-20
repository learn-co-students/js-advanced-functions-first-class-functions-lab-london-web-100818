// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
     newArray = [(array[0]), (array [1])];
    return newArray;
}

const returnLastTwoDrivers = function (array) {
    newArray = array.slice(-2);
    return newArray;
}

const selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers
];

const createFareMultiplier = function (num) {
    return function (multiplier) {
        return num * multiplier;
    }
}

fareDoubler = (num) => {
    return num * 2;
}

fareTripler = (num) => {
    return num * 3;
}

const fetchSpecifiedDrivers = function (array, funct) {
    return funct(array);
}
