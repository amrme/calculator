function evaluate(){if(console.log(result),Number(result[0])&&Number(result[2])&&!Number(result[1])){var currentResult=eval(result.join(""));$("#result").html(currentResult),result.splice(1,2),result[0]=currentResult}else result=[],$("#result").html("Invalid")}var result=[];$("document").ready(function(){$(".btn").click(function(){var e=$(this).html();3!==result.length||Number(e)?Number(e)?(console.log(result[result.length-1]),Number(result[result.length-1])?(result[result.length-1]+=e,$("#result").html(result[result.length-1])):(result.push(e),$("#result").html(e))):"CLR"===e?(result=[],$("#result").html("0")):result.push(e):"="===e?evaluate():(evaluate(),result.push(e))})});