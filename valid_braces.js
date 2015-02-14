function validBraces(braces){
  //TODO
  var left = "({[";
  var right = ")}]";

  var valid = true;
  var stack = [];

  for(var i=0;i<braces.length;i++){
    if(left.indexOf(braces[i]) > -1){
      stack.push(braces[i])
    }else if(right.indexOf(braces[i]) > -1){
      var next = stack.pop();

      if(left.indexOf(next) != right.indexOf(braces[i])){
        valid = false;
      }
    }
  }
  if(stack.length != 0){valid = false}
  return valid;
}
