'use strict';

function testFalseLooseEqualityComparison() {
  var zero = 0;
  var one = 1;
  return zero == one;
}

function testTrueLooseNonEqualityComparison() {
  var zero = 0;
  var one = 1;
  return zero != one;
}

function testTrueLooseEqualityComparison() {
  var one = 1;
  var stringOne = "1";
  return one == stringOne;
}

function testFalseStrictEqualityComparison() {
  var one = 1;
  var stringOne = "1";
  return one === stringOne;
}

function testTrueStrictEqualityComparison() {
  var one = 1;
  var stringOne = "1";
  return one === parseInt(stringOne);
}