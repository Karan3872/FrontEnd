var inches = 42;
var feet = inches/12;
console.log(feet);

var FeetInMeters = 0.3048;
var lengthInFeet = 60;
var BreadthInFeet = 40;
var lengthInMeters = 60*FeetInMeters;
var BreadthInMeters = 40*FeetInMeters;
console.log(lengthInMeters);
console.log(BreadthInMeters);
var plot = lengthInMeters*BreadthInMeters;
console.log(plot);

var noOfPlots = 25;
var totalPlotsInMeters=noOfPlots*plot;
var totalPlotsInAcres = totalPlotsInMeters/4047;
console.log(totalPlotsInAcres);