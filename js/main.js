
// global variables
var result = [];

$("document").ready(function() {

  // if tesult has 3 elements evaluate
  if(result.length === 3)
  {
    evaluate();
  }

  $(".btn").click(function() {
    if (result.length === 3)
    {
      evaluate();
    }
    else
    {
      $("#result").html($(this).html());
      result.push($(this).html());
      //console.log($(this).html());
    }
  });

});

function evaluate() {
  var currentResult = eval(result.join(''));
  $("#result").html(currentResult);
  result.splice(1,2);
  result[0] = currentResult;
  console.log(result.join(""), result.length);
}
