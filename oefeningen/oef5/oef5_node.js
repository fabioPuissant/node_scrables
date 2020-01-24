var createPerson = require('./Person');
require('colors');
var _ = require('underscore');

var persons = [];
var mark = createPerson('Mark', 'Zuckerberg', 'mark.zuckerberg@facebook.com');
var steve = createPerson('Steve', 'Jobs', 'steve.jobs@apple.com');
var bill = createPerson('Bill', 'Gates', 'bill.gates@microsoft.com');

persons.push(mark);
persons.push(steve);
persons.push(bill);

persons.forEach(p => {
  console.log(p.email.underline.blue);
});

// First
console.log(`First in list is: ${_.first(persons).voornaam.red}`);

// Last
console.log(`Last in list is: ${_.last(persons).voornaam.green}`);

// Sorted by 'achternaam'
const sortedList = _.sortBy(persons, 'achternaam');
console.log(`Sorted by last name:`.bgYellow.black);
sortedList.forEach(p => console.log(p.achternaam.rainbow + ' '));
