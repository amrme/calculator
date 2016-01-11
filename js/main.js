
// global variables
// result is the current result
var result = 0;
var prev = 0;
var operation = null;
var current = 0;

$("document").ready(function() {
  // clear button
  $("#clear-btn").click(function(){
    result = 0;
    prev = 0;
    current = 0;
    // post result
    $("#result").html(result);
  });
  // plus
  $("#add").click(function(){
    operation = "+";
    // post result
    result = current + prev;
    $("#result").html(result);
    prev = result;
    current = 0;
  });
  // equals
  $("#equals").click(function(){
    // post result
    switch (operation) {
      case '+':
        result = prev + current;
        break;

    }
    $("#result").html(result);
  });
  // one
  $("#one").click(function(){
    current = 1;
    // post result
    $("#result").html(current);
  });
  // two
  $("#two").click(function(){
    current = 2;
    // post result
    $("#result").html(current);
  });
  // three
  $("#three").click(function(){
    current = 3;
    // post result
    $("#result").html(current);
  });
  // four
  $("#four").click(function(){
    current = 4;
    // post result
    $("#result").html(current);
  });
  // five
  $("#five").click(function(){
    current = 5;
    // post result
    $("#result").html(current);
  });
  // six
  $("#six").click(function(){
    current = 6;
    // post result
    $("#result").html(current);
  });
  // seven
  $("#seven").click(function(){
    current = 7;
    // post result
    $("#result").html(current);
  });
  // eight
  $("#eight").click(function(){
    current = 8;
    // post result
    $("#result").html(current);
  });
  // nine
  $("#nine").click(function(){
    current = 9;
    // post result
    $("#result").html(current);
  });
  // zero
  $("#zero").click(function(){
    current = 0;
    // post result
    $("#result").html(current);
  });
  //
});
