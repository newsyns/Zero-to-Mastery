// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray1 = [];

array.forEach(user => {
  newArray1.push(user.username + " !")
})

console.log(newArray1);


//Create an array using map that has all the usernames with a "? to each of the usernames
let newArray2 = array.map(user => {
  return user.username + " ?";
})

console.log(newArray2);


//Filter the array to only include users who are on team: red

let filteredArray = array.filter(user => {
  return user.team === "red";
})

console.log(filteredArray);


//Find out the total score of all users using reduce

let totalScore = array.reduce((acc, user) => {
  return acc + user.score;
}, 0)

console.log(totalScore);


// (1), what is the value of i? //index
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

const newArray3 = array.map(num => {
  return num *2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

let newList = array.map(user => {
  user.items = user.items.map(item => {
    return item + " !";
  });
  return user;
})
console.log(newList);