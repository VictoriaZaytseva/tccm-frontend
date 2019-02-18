'use strict'

import Moment from "moment"; 
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment); 

var now = moment();
console.log("now");
console.log(now)
console.log("days in month")
console.log(moment().daysInMonth())
console.log("weekdays")
console.log(moment.weekdays())
console.log("day of the week")
console.log(now.day())
console.log("current day number")
console.log(now.date())
console.log("current month")
console.log(now.month)

// year and month are variables
var year = 2015
var month = 7 // August (0 indexed)
var startDate = moment([year, month])

//Get the first and last day of the month
var firstDay = moment(startDate).startOf('month')
var endDay = moment(startDate).endOf('month')

// Create a range for the month we can iterate through
var monthRange = moment.range(firstDay, endDay)

// Get all the weeks during the current month
var  weeks = []

for (let day of monthRange.by('days')) {
  	if (!weeks.includes(day.week()))
  		weeks.push(day.week())
}

// Create a range for each week
var  calendar = []
var arrayLength = weeks.length;
var week;
for (var i = 0; i < arrayLength; i++) {
week = weeks[i];
//Create a range for that week between 1st and 7th day
var     firstWeekDay = moment().week(week).day(1)
var     lastWeekDay = moment().week(week).day(7)
var     weekRange = moment.range(firstWeekDay, lastWeekDay)
 calendar.push(weekRange)

}
console.log(calendar)
