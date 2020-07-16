const fs = require('fs')
const dataFile = fs.readFileSync('./owid-covid-usa-data.csv', 'utf-8')
const getRows = require('./get-rows.js')
const getTotalCasesByDay = require('./get-total-cases-by-day.js')
const getNewCasesByDay = require('./get-new-cases-by-day.js')
const inputCmd = process.argv[2]
const inputDate = process.argv[3]
const covidData = getRows(dataFile)

if (inputCmd === 'total'){
  console.log(getTotalCasesByDay(inputDate, covidData))
} else if (inputCmd === 'new'){
  console.log(getNewCasesByDay(inputDate, covidData))
} else {
  console.log('incorrect command - use total or new')
}
