"use strict"

var users = [{
    first_name: "Josephine",
    last_name: "Robinson",
    birthday: "1996-09-26",
  },
  {
    first_name: "Dean",
    last_name: "long",
    birthday: "1984-10-23",
  },
  {
    first_name: "Sonia",
    last_name: "Holmes",
    birthday: "1958-06-21",
  },
  {
    first_name: "June",
    last_name: "Mcdonalid",
    birthday: "1960-05-06",
  },
  {
    first_name: "ella",
    last_name: "Lane",
    birthday: "1991-12-11",
  },
  {
    first_name: "Felecia",
    last_name: "Stone",
    birthday: "1958-04-21",
  },
  {
    first_name: "Elmer",
    last_name: "George",
    birthday: "1987-12-10",
  }
];

///task-1//
function User(first_name, last_name, birthday) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.birthday = birthday;
} //создаю юзера

var input = function(minLength, question) {
  let result;
  do {
    result = prompt(question);
    if (result === null) {
      break;
    }
  } while (result.trim().length < minLength);
  return result;
} // функция для ввода данных имени и фамилии

var newUsers = function() {
  let users = [];
  let amountOfusers = prompt("Please enter amount of users")
  i = 0;
  for (i; i < amountOfusers; i++) {
    let first_name = input(3, "Enter First Name")
    let last_name = input(3, "Enter Last Name")
    let birthday = prompt("Enter birthday")
    let user = new User(first_name, last_name, birthday);
    users.push(user) 
  }
  console.log(users)
}
newUsers()

//task-2//
arr2 = [];
for (el of users) {

  el.first_name = toCapitalize(el.first_name)
  el.last_name = toCapitalize(el.last_name)
  arr2.push(el)
}
console.log(arr2)

function toCapitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1)
}

//task3//
var names = users.filter(function(e) {
  return e.first_name.charAt(0) == "E" || e.last_name.charAt(0) == "E";
});
console.log(names);

//task4//
var under30 = users.filter(function(user) {
  let ageInSeconds = new Date().getTime() - new Date(user.birthday).getTime();
  return ageInSeconds > 30 * 365 * 86400 * 1000;
})
under30.sort(function(a, b) {
  let dateA = new Date(a.birthday),
    dateB = new Date(b.birthday)
  return dateA - dateB
})