// Code your solution in this file!

const returnFirstTwoDrivers = function (arr) {return arr.slice(0,2)}

const returnLastTwoDrivers = function (arr) {return arr.slice(-2)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const  createFareMultiplier = function (int) {return (function (fare) {return int * fare})}

const fareDoubler = function (fare) {return createFareMultiplier(fare)(2)}

const fareTripler = function (fare) {return createFareMultiplier(fare)(3)}

const fetchSpecifiedDrivers = function (arr, meth) {return meth(arr)}

