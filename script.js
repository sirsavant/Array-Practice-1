// data we can work with.
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Issac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 }
];

const people = ["Beck, Glenn", "Becker, Carl", "Beckett, Samuel", "Beddoes, Mick", "Beecher, Henry", "Beethoven, Ludwig", "Begin, Menachem", "Belloc, Hilaire", "Bellow, Saul", "Benchley, Robert", "Benenson, Peter", "Ben-Gurion, David", "Benjamin, Walter", "Benn, Tony", "Bennington, Chester", "Benson, Leana", "Bent, Silas", "Bentsen, Lloyd", "Berger, Ric", "Bergman, Ingmar", "Berio, Luciano", "Berle, Milton", "Berlin, Irving", "Berne, Eric", "Bernhard, Sandra", "Berra, Yogi", "Berry, Halle", "Berry, Wendell", "Bethea, Eric", "Bevan, Aneurin", "Bevel, Ken", "Biden, Joseph", "Bierce, Ambrose", "Biko, Steve", "Billings, Josh", "Biondo, Frank", "Birrell, Augustine", "Black Elk", "Blair, Robert", "Blair, Tony", "Blake, William"];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

// Method 1: without the filter method.

// create variable called inventors1500 that is an empty array.
// use the for loop to find out which element in the array has a year value greater than or equal to 1500 and less than 1600. If there is, we will use push() to push the inventor element to the inventors1500 array.

/*
let inventors1500 = [];

  for (i = 0; i < inventors.length; i++) {
    if (inventors[i].year >= 1500 && inventors[i].year < 1600) {
      inventors1500.push(inventors[i]);
    }
  }

console.log(inventors1500);
*/

// Method two: using the filter method
let inventors1500 = inventors.filter(function(e) {
  return e.year > 1500 && e.year < 1600;
});

console.log(inventors1500);

// Method 3: using ES6 arrow function
/*
let inventors1500 = inventors.filter(e => e.year < 1500);

console.log(inventors1500);
*/

// https://www.javascripttutorial.net/javascript-array-filter/

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names.

//array map() method allows you to call a function to modify each item in the array.

let inventorsFandL = inventors.map(function(e) {
  return `${e.first} ${e.last}`;
});

console.log(inventorsFandL);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// https://www.w3schools.com/js/js_array_sort.asp

let sortInventors = inventors.sort(function(a, b) { 
  return (a.year - b.year);
});

console.log(sortInventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

// 5. Sort the inventors by years lived.

// 6. Create a list of Boulevards in Paris that contain "de" anywhere in the name 
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name
