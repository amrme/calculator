function evaluate(){var currentResult=eval(result.join(""));$("#result").html(currentResult),result.splice(1,2),result[0]=currentResult}var result=[];$("document").ready(function(){3===result.length&&evaluate(),$(".btn").click(function(){if(3===result.length)evaluate();else{var e=$(this).html();Number(e)?($("#result").html(e),result.push(e)):result.push(e)}})});