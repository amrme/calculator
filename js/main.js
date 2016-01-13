
// global variables
var result = [];

$("document").ready(function() {

  // check if any button is clicked
  $(".btn").click(function() {

    // get element's value from it's html tag
    var $current = $(this).html();

    // if you already have pending operations
    // and it's not just a new number that has to be concatenated
    if (result.length === 3 && !Number($current) && $current !== '.')
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
      if (Number($current))
      {
        //console.log("it's a number", Number($current));
        // if it's a number then if the value before it was a number concatenate them
        console.log(result[result.length - 1]);
        if (Number(result[result.length - 1]))
        {
          result[result.length - 1] += $current;
          // put it in the display
          $("#result").html(result[result.length - 1]);
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
        // else push some normal arthemitic operations to result
        else
        {
          //console.log("hello", $current);
          // if it's a dot concatenate
          // if ($current === '.')
          // {
          //    console.log("it's a dot");
          //   result[result.length - 1] += $current;
          //   $("#result").html(result[result.length - 1]);
          //   //console.log($current);
          // }
          // else it's a normal arthmetic operation +, -, *, or /
          // else
          // {
            // push item to result
            result.push($current);
          // }
        }
      }


      //console.log($(this).html());
    }
  });

});

// evaluates the calculations
function evaluate() {
  // debug
  console.log(result);
  // validate the equation first
  if (Number(result[0]) && Number(result[2]) && !Number(result[1]))
  {
    // store the result of the calculations here
    var currentResult = eval(result.join(''));
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
