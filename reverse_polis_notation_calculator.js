function calc(expr) {
  var evalStack = [];
  expr = expr.split(" ");
  var operators = {
    "+": function(x, y){
      return x + y;
    },
    "-": function(x, y){
      return x - y;
    },
    "*": function(x, y){
      return x * y;
    },
    "/": function(x, y){
      return x / y;
    }
  };

  var result;
  var space = false;

  for(var i=0;i<expr.length;i++){
    if(!operators[expr[i]]){
      evalStack.push(Number(expr[i]))
    }else{
      var arg1 = evalStack.pop();
      var arg2 = evalStack.pop();
      evalStack.push(operators[expr[i]].call(null, arg2, arg1));
    }
    space = !space;
  }
  if(evalStack.length == 0){
    return 0
  }else{
    result = evalStack.pop();
    return result;
  }

}
