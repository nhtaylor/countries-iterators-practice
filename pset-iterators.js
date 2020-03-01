/*
Instructions:

For this problem set you will be working with a
list of Countries stored as an array of
objects. The array has **already been provided for
you** as a variable named "countries".

You can see the full list of us countries in the
provided file named `countries.js`

All of the following problems require that you
use the `countries` array to solve them.

Use any variables or methods deemed necessary
to solve each problem.

You can use either regular functions or
arrow functions for your callbacks
*/

const countries = require('./countries.js') // <- DO NOT Remove; this represents an array consisting of countries

/***********
Sample Problem:

1. Using the `countries` array, return the **name** of the
first country that was listed that is located in South America.
Save the data in a variable called `firstListedSouthAmericanCountry`,
declared with const

2. Print `firstListedSouthAmericanCountry` to the console

************/
console.log('Sample Problem:')

// Add your code below this line

const firstListedSouthAmericanCountry = countries.find(function (country) {
  return country.continentName === 'South America'
})

console.log(firstListedSouthAmericanCountry.countryName)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 1:

1. Using the `countries` array,
return a list (an array) of all the
countries that have names that begin with a "c".
Save the data in a variable called `countriesWithNamesStartingWithC`,
declared with const

2. Print `countriesWithNamesStartingWithC` to the console

************/
console.log('Problem 1:')

// Add your code below this line
const countriesWithNamesStartingWithC = countries.filter(function (country) {
  return country.countryName.charAt(0) === 'C'
})

console.log(countriesWithNamesStartingWithC.countryName)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 2:

1. Using the `countries` array, return a list (an array) of just the "name" of every country in the world.
Save the data in a variable called `allCountryNames`,
declared with const

2. Print `allCountryNames` to the console

************/
console.log('Problem 2:')

// Add your code below this line
const allCountryNames = countries.map((country) => {
  return country.countryName
})

console.log(allCountryNames.countryName)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 3:

1. Using the `coutries` array, return a
list of the countries that have a population
of less than 1,000,000 people. Save the data in a variable called `smallCountries`, declared with const

2. Print `smallCountries` to the console

************/
console.log('Problem 3:')

// Add your code below this line
const smallCountries = countries.filter((country) => {
  return country.population > 1000000
})

console.log(smallCountries)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 4:

1. Using the `countries` array, return a list of the
countries in Africa
Save the data in a variable called `africanCountries`,
declared with const

2. Print `africanCountries` to the console

************/
console.log('Problem 4:')

// Add your code below this line
const africanCountries = countries.filter((country) => {
  return country.continentName === 'Africa'
})

console.log(africanCountries)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 5:

1. Using the `countries` array,
return the name of the all countries that
list english ("en") as one of their
official languages
Save the data in a variable
called `englishSpeakingCountries`, declared with const

2. Print `englishSpeakingCountries` to the console

************/
console.log('Problem 5:')

// Add your code below this line
const englishSpeakingCountries = countries.filter((country) => {
  return country.languages.includes('en')
})

console.log(englishSpeakingCountries)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 6:

1. Using the `countries` array,
return the name of the all countries that
have 4 or more official languages

Save the data in a variable
called `countriesWithFourOrMoreLanguages`, declared with const

2. Print `countriesWithFourOrMoreLanguages` to the console

************/
console.log('Problem 6:')

// Add your code below this line
const countriesWithFourOrMoreLanguages = countries.filter((country) => {
  return (country.languages.split(",")).length > 4
})


// console.log(countriesWithFourOrMoreLanguages)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 7:

1. Using the `countries` array,
return the average population of all of
the countries in South America

Save the data in a variable
called `avgPopulationOfSouthAmericanCountries`, declared with const

2. Print `avgPopulationOfSouthAmericanCountries` to the console

************/
console.log('Problem 7:')

// Add your code below this line
const southAmericanCountries = countries.filter((country) => {
    return country.continentName === 'South America'
})
// printing south american countries, to know what we're dealing with
// console.log(southAmericanCountries)

const sumPopulationOfSouthAmericanCountries = southAmericanCountries.reduce((sum, country) => {
  return sum + parseInt(country.population)
}, 0)

console.log(sumPopulationOfSouthAmericanCountries)

const avgPopulationOfSouthAmericanCountries = sumPopulationOfSouthAmericanCountries / southAmericanCountries.length

console.log(avgPopulationOfSouthAmericanCountries)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
