function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    }
    else {
      array.push("I am " + i + " strange loops.")
    }
  }
  return array
}


function whileLoop(n) {
  while (n > 0) {
    n--
    console.log(n)
  }
  return "done"
}



function doWhileLoop(array) {
 while (){}
}loops.js
Full Screen
Close


loops.js
Last saved at Aug 19, 2018 8:54:14 pm
Javascript Intro To Looping
279 STUDENTS WORKING
DavidAguillon
TheodoreChuang
dontedorsey
jammyfish
kpapacostas
jesCodingHere

Objectives
Build a for loop
Build a while loop
Build a do-while loop
Explain the purpose of a loop
Explain the difference between each type of loop in JS
Introduction
Sometimes, we need to do things repeatedly. Let's say we have a bunch of gifts to wrap. They all happen to be the same size and shape, so for every gift, we need to cut a similarly sized piece of wrapping paper, fold it up over the edges of the gift, tape it together, and add a nice little card. Then we set the wrapped gift aside and moved onto the next gift.

In programming terms, we can think of the gifts as an array and the act of wrapping them as a function. We could, of course, write the following code:

var gifts = ["teddy bear", "drone", "doll"];
 
function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
}
We could then call wrapGift() on each gift individually:

wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[2]);
But if we had more gifts, we'd have to write out more calls to wrapGift() — it'd probably get tiring after a while.

This is where loops come in handy! With a loop, we can just write the repeated action once and perform the action on every item in the collection.

About
Loops are used to execute the same block of code a specified number of times. JavaScript loops come in a few different flavors — namely, for, while, and do-while. We'll cover each of these kinds of loop below.

This is a code-along, so follow along with the instructions in each section. There are tests to make sure you're coding your solutions correctly.

The for Loop
Of the loops in JavaScript, the for loop is the most common. The for loop is made up of four statements and has the following structure:

Syntax
for ([initialization]; [condition]; [iteration]) {
  [loopBody];
}
initialization
An expression (including assignment expressions) or variable declaration. Typically used to initialize a counter variable. This expression may optionally declare new variables with the var keyword
Condition
An expression evaluated before each loop iteration. If this expression evaluates to true, statement is executed
Iteration
A statement executed at the end of each iteration. Typically, this will involve incrementing or decrementing a counter, bringing the loop ever closer to its end
loopBody
Code which runs on every iteration as long as the condition evaluates to true
Use a for loop when you know how many times you want the loop to run (for example, when you have an array of known size).

Example
The code below will print the string "Hello World!" 99 times

// i is set equal to 1
// as long as i is less than 100 execute the code in the loopBody
// - which is print "Hello World"; increment i each time the code in loopBody is executed
 
for (var i = 1; i < 100; i++) {
  console.log("Hello World the " + i + " time");
}
 
// The above prints:
// Hello World the 1 time
// Hello World the 2 time
// Hello World the 3 time
You'll encounter for loops again when you learn about iterating through object literals.

TODO: Build a function forLoop. It takes an array as an argument. Start counting from 0, and, using a for loop, add a string to the array 25 times. But not just any string. If your i value is 1, add the string "I am 1 strange loop."; if your i value is anything else, add the string "I am ${i} strange loops.". (Remember flow control with if and else? And how do we interpolate i?) Then return the array.

HINT: Your for loop could look something like this:

for (let i = 0; i < 25; i++) {
  // ...
}
The while Loop
The while loop is similar to an if statement, except that its body will keep executing until the condition evaluates to false. It has the following structure:

Syntax
while ([condition]) {
  [loopBody];
}
A while loop is best used when we don't know how many times a loop needs to run - that is, the condition is dependent on a dynamic function/return value.

Example
function maybeTrue() {
  return Math.random() >= 0.5; // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
 
// run until `maybeTrue()` returns `false`
// (so the body of the loop might _never_ run!)
while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}
In this example, maybeTrue() returns true 50% of the time, and our loop runs until maybeTrue() returns false. We've used a while loop because we don't have any specific number to count up or down to in our loop — we just want it to run until the condition is no longer met.

But we can also use a while loop in place of a for loop — we just have to remember to change the condition on each pass so that the loop terminates (otherwise it will run forever).

let countdown = 100;
 
while (countdown > 0) {
  console.log(--countdown);
}
TODO: Create a function called whileLoop in loops.js. The function should take a number as an argument. Using a while loop, count down (using console.log) from the passed in number to 0. Then return the string 'done'.

The Do-While Loop
The do-while loop is almost exactly the same as the while loop, except for the fact that the loop's body is executed at least once before the condition is tested. Has the following structure:

Syntax
do {
  [loopBody];
} while ([condition]);
You will rarely see do-while used since very few situations require a loop that blindly executes at least once. That being said, take a look at the example below:

Example
var i = 0;
 
function incrementVariable() {
  i = i + 1;
}
 
do {
  console.log("doo-bee-doo-bee-doo");
  incrementVariable();
} while (i < 5);
Remember how we couldn't be sure with the plain while loop above that the body would run using maybeTrue()? With do, we can be sure that the body will run!

TODO: Define a function called doWhileLoop in loops.js. The function should take an array as an argument. Use the incrementVariable() function (you can copy it from this README) as the condition, and remove elements from the array until the array is empty or until incrementVariable() returns false. (Your condition might look something like array.length > 0 && incrementVariable().) Finally, return
