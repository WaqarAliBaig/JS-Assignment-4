// Chapter 17 - 20 (for loops)
// Home Assignment

// Q1:
for (var a = 1; a <= 10; a++) {
  console.log(a);
}

// Q2:
for (var b = 0; b <= 12; b++) {
  console.log(b);
}

// Q3:
document.write("Complete Statement. <br>");
for (var i = 0; i <= 4; i++) {
  document.write(i);
}

// Q4:
for (var c = 0; b < 100; c++) {
  console.log(c);
}

// Q5:
for (var d = 3; d > 0; d--) {
  console.log(d);
}

// Q6
var arrayAssign = ["string", "number", "boolean", "undefined", "null"];

// Q7:
var flag = true;

// Q8:
var pets = ["Cat", "Horse", "Parrot", "Goat"];
for (var e = 0; e < pets.length; e++) {
  document.write(e + " " + pets[e] + "<br>");
}

// Q9:
var counter = 1;
for (var f = 0; f <= 10; f++) {
  if (counter === 1) {
    alert(counter);
  }
  break;
}

// Q10:
var userNames = ["waqar", "junaid", "bilal", "asad"];
var userResponse = prompt("Enter first name.");
var firstName = userResponse;

for (var g = 0; g <= userNames.length; g++) {
  if (firstName === userNames[g]) {
    alert("Enter");
  } else {
    alert("Please write a correct user name.");
  }
}

// Q11:

var list = ["apple, banana, orange, grapes"];
var userInput = prompt("Enter the correct fruit.");
var matchFound = false;
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}

// Q12:
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var y = 0; y < firstArr.length; y++) {
  for (var z = 0; z < secondArr.length; z++) {
    document.write(firstArr[y].concat(secondArr[z]) + "<br>");
  }
}
