'use strict';

function testFalseLooseEqualityComparison(){
  return 1 == 0;
}

function testTrueLooseNonEqualityComparison(){
  return 1 != 0;
}

function testTrueLooseEqualityComparison(){
  return 1 == "1";
}

function testFalseStrictEqualityComparison(){
  var one = 1;
  var two = '1';
  
  return one === two;
}

function testTrueStrictEqualityComparison() {
  return 1 === parseInt('1');
}


