// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2);
}

const returnLastTwoDrivers = function(array){
    return array.slice(array.length - 2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiply){
    return function(amount){ return amount * multiply};
}

const fareDoubler = function(amount){return amount * 2}; 

const fareTripler = function(amount){return amount * 3};

const fetchSpecifiedDrivers = function(array, func){return func(array)};
