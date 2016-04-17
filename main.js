"use strict";

var counter = 1; //so it will count from 1 - 30 vs. 0 - 29
var output = document.getElementById('output');
// Create a plant function
var Plant = function () {
// Plant should have a property of height
  this.height = 0;
};

// Plant prototype needs 2 methods: increaseHeight & decreaseHeight. Each method should accept an integer value as input
Plant.prototype.increaseHeight = function (amount) {
// increaseHeight should increase the value of the height property by the amount passed in as an argument
  this.height += amount;
};

Plant.prototype.decreaseHeight = function (amount) {
// decreaseHeight should decrease the value of the height property by the amount passed in as an argument
  this.height -= amount;
};


// Create a tree function
var Tree = function () {
// Tree should have a property of branches
  this.branches = 0;
  this.growthCount = 0;
};

// Plant should be a prototype of tree
Tree.prototype = new Plant();

// The Tree prototype should have two methods on it: grow and trim
// The grow method should accept an integer vlue as input
// The grow method should increase the height of the tree
Tree.prototype.grow = function (amount) {
  this.increaseHeight(amount);
  this.growthCount += amount;
  // each time the height of a tree increases by 10, the value of branch should increase by 1
  if (this.growthCount >= 10) {
    this.growthCount -= 10;
    this.branches++; 
  }
};

// Trim method should accept an integer value as input & decrease the height of the tree
Tree.prototype.trim = function(amount) {
  console.log("trees trimmed");
  this.decreaseHeight(amount);
  // when trim method is called, number of branches should decrease by 1
  this.branches --; //equal to this.branches -= 1;
};


// Create a PearTree instance & OakTree instance of Tree, 
var PearTree = new Tree();
var OakTree = new Tree();

// every second, increase the height the pear tree by some integer value and increase the height of the oak tree by some integer value that is larger than what you used for the pear tree
var timer = setInterval(function () {
  growOrchard(6, 11);
  displayTrees();
  counter++;

// every tenth time the trees are grown , invoke the trim method. Pass one value to the method for the pear tree, and a larger value to the method on the oak tree.
  if (counter % 10 === 0) {
    PearTree.trim(2);
    OakTree.trim(3);
  }

// Stop growing the trees after they have grown 30 times
  if (counter > 30) { // to make it look like 1 - 30, not 0 - 29
    clearInterval(timer);
  }
}, 1000); // 1000 = every second, 5000 = every 5 secs

function growOrchard (pearAmt, oakAmt) {
  PearTree.grow(pearAmt);
  OakTree.grow(oakAmt);
};


// output the current height of each tree and how many branches it has to the DOM
function displayTrees () {
  output.innerHTML += `<p>Pear tree is now ${PearTree.height}cm tall and has ${PearTree.branches} branches. Oak tree is now ${OakTree.height}cm tall and has ${OakTree.branches} branches.</p>`;
}; //don't forget to use tics