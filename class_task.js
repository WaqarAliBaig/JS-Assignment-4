// Array and Loop

// Q1 - skipped by sir
// Q2 - skipped by sir

// Q3:
for (var i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}

document.write("<br>", "<br>");

// Q4:
var userInput = +prompt("Enter a number to generate a multiplication table.");
var tableLength = +prompt("Enter table length.");

for (var j = 1; j <= tableLength; j++) {
  document.write(
    userInput + " x " + tableLength + " = " + userInput * j + "<br>"
  );
}

document.write("<br>", "<br>");

// Q5:
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var f = 0; f < fruits.length; f++) {
  document.write(fruits[f] + "<br>");
}

document.write("<br>", "<br>");

for (var x = 0; x < fruits.length; x++) {
  document.write("Element at index " + x + " is " + fruits[x] + "<br>");
}

document.write("<br>", "<br>");

// Q6:
document.write("<h3>a: Counting:</h3>");
for (var a = 1; a <= 15; a++) {
  document.write(a + ",");
}

document.write("<br>", "<br>");

document.write("<h3>b: Reverse counting:</h3>");
for (var b = 10; b > 0; b--) {
  document.write(b + ",");
}

document.write("<br>", "<br>");

document.write("<h3>c: Even:</h3>");
for (var c = 0; c <= 20; c = c + 2) {
  document.write(c + ",");
}

document.write("<br>", "<br>");

document.write("<h3>c: Odd:</h3>");
for (var d = 1; d < 20; d = d + 2) {
  document.write(d + ",");
}

document.write("<br>", "<br>");

document.write("<h3>c: Series:</h3>");
for (var e = 2; e <= 20; e = e + 2) {
  document.write(e + "k, ");
}

document.write("<br>", "<br>");

// Q7:
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var askUser = prompt(
  "Welcome to (Pia In The Sky) What do you want to order sir/ma'am?"
);

for (var g = 0; g < bakeryItems.length; g++) {
  if (askUser === bakeryItems[g]) {
    alert(bakeryItems[g] + "is available at index " + [g] + " in our bakery.");
  } else {
    alert("We are sorry this item is not available in our bakery.");
  }
}

document.write("<br>", "<br>");

// Q8:
var numArray = [24, 53, 78, 91, 12];
document.write("Array items: " + numArray + "<br>");

var maxNumber = numArray[0];
for (var m = 0; m < numArray.length; m++) {
  if (numArray[m] > maxNumber) {
    max = numArray[m];
  }
}
document.write("The largest number is " + max + "<br>");

document.write("<br>", "<br>");

// Q9:
document.write("Array items: " + numArray + "<br>");

var minNumber = numArray[0];
for (var m = 0; m < numArray.length; m++) {
  if (numArray[m] < minNumber) {
    min = numArray[m];
  }
}
document.write("The smallest number is " + min + "<br>");

document.write("<br>", "<br>");

// Q10:
document.write("<h3>Multiples of 5</h3>");
for (var x = 5; x <= 100; x = x + 5) {
  document.write(x + ",");
}
