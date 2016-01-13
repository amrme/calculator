
// global variables
var result = [];

$("document").ready(function() {

  // if tesult has 3 elements evaluate
  if(result.length === 3)
  {
    // evaluate the result and post it to the display
    evaluate();
  }

  $(".btn").click(function() {

    // get element's value from it's html tag
    var $current = $(this).html();

    // if you already have pending operations
    if (result.length === 3)
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
        // put it in the display
        $("#result").html($current);
        // push item to result
        result.push($current);
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
        else
        {
          // push item to result
          result.push($current);
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
  // store the result of the calculations here
  var currentResult = eval(result.join(''));
  // put result on display
  $("#result").html(currentResult);
  // remove the 2nd and 3rd items from result array
  result.splice(1,2);
  // replace the first element with the reuslt of the previous calculation
  result[0] = currentResult;

  //console.log(result.join(""), result.length);
}
