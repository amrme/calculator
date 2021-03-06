
// global variables
var result = [];

$("document").ready(function() {

  // check if any button is clicked
  $(".btn").click(function() {

    // debug
    console.log($(this).html());

    // get element's value from it's html tag
    var $current = $(this).html();

    // if you already have pending operations
    // and it's not just a new number that has to be concatenated
    if (result.length === 3 && (!Number($current)) && ($current !== '0') && ('.'.charCodeAt(0) !== $current.charCodeAt(0)) && ($current !== "x<sup> 2</sup>") && ($current !== '√'))
    {
      // check what was clicked after the operation
      // if it was equals
      if ($current === "=")
      {
        // evaluate the result and post it to the display
        evaluate();
      }
      // if it was another operation, then save it
      else
      {
        evaluate();
        result.push($current);
      }
    }
    // if not start a new one
    else
    {
      // validate the current elemnt

      // it's a number
      if (Number($current) || ($current === '0'))
      {
        //console.log("it's a number", Number($current));
        // if it's a number then if the value before it was a number concatenate them
        // console.log(result[result.length - 1]);
        if (Number(result[result.length - 1]))
        {
          result[result.length - 1] = String(result[result.length - 1]).trim() + String($current).trim();
          // put it in the display
          $("#result").html(result[result.length - 1]);
          console.log(result);
        }
        // else push to the stack
        else
        {
          // push item to result
          result.push($current);
          // put it in the display
          $("#result").html($current);
        }
      }
      // not a number
      else
      {
        // check if it's clear
        if ($current === "CLR")
        {
          result = [];
          $("#result").html("0");
        }
        // if it was squared
        else if ($current === "x<sup> 2</sup>")
        {
          result[0] = (Math.pow(result[result.length - 1], 2));
          $("#result").html(result);
        }
        // if it was . then concatenate it
        else if ('.'.charCodeAt(0) === $current.charCodeAt(0)) {
          // concatenate
          //console.log("it's a dot");
          result[result.length - 1] = String(result[result.length - 1]).trim() + '.';
          $('#result').html(result[result.length - 1]);
        }
        // if it was sqrt
        else if ($current === '√') {
          result[0] = (Math.pow(result[result.length - 1], 1/2));
          $("#result").html(result);
        }
        // else push some normal arthemitic operations to result
        else
        {
          // push item to result
          result.push($current);
        }
      }
    }
  });

});

// evaluates the calculations
function evaluate() {
  // debug
  console.log(result);
  // validate the equation first
  // if the first and last elements are numbers and the middle element is an operator
  if (Number(result[0]) && Number(result[2]) && !Number(result[1]))
  {
    // store the result of the calculations here
    var currentResult = eval(result.join('')).toFixed(2);
    // put result on display
    $("#result").html(currentResult);
    // remove the 2nd and 3rd items from result array
    result.splice(1,2);
    // replace the first element with the reuslt of the previous calculation
    result[0] = currentResult;
  }
  // else erase everything and put an error
  else
  {
    // erase everything
    result = [];
    // throw an error on the display
    $("#result").html("Invalid");
  }
  //console.log(result.join(""), result.length);
}
