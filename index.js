// Code your solution in this file!
const returnFirstTwoDrivers = function (beep) {
return beep.slice(0,2);
};

const returnLastTwoDrivers = function (boop) {
return boop.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
return function (multiplier) {
return multiplier * integer;

    };
}
const fareDoubler = createFareMultiplier(2) ;
const fareTripler = createFareMultiplier(3) ;

const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers){
return returnFirstTwoDrivers(drivers);
};