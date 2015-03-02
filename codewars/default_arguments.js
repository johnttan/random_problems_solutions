function defaultArguments(func, params) {
  var args = [];
  var funcStr = func.toString();
  var parsedArgs;
  var i = 0;

  while(i < funcStr.length && !parsedArgs){
    if(funcStr[i] === "("){
      var j = i;
      while(j < funcStr.length && !parsedArgs){
        if(funcStr[j] === ")"){
          parsedArgs = funcStr.substring(i+1, j).split(",");
        };
        j++;
      }
    };
    i++;
  };

  parsedArgs.forEach(function(arg, ind){
    parsedArgs[ind] = arg.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, '').trim();
    if(typeof params[parsedArgs[ind]] !== "undefined"){
      args[ind] = params[parsedArgs[ind]];
    }
  });
  var newFunc = function(){
    var argsCopy = args.slice();
    for(var i=0;i<arguments.length;i++){
      argsCopy[i] = arguments[i];
    };
    return func.apply(null, argsCopy);
  };
  var newFuncStr = newFunc.toString();
  var newFunc = newFuncStr.substring(0, 8) + " a(" + parsedArgs.join(",") + newFuncStr.substring(10);
  eval(newFunc);
  return a;
}
