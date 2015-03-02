function lookSay(number){
  //TODO
  var digitArray = number.toString().split("");
  var result = [];
  var final = digitArray.reduce(function(total, cur){
    if(total[0] === cur){
      return [cur, total[1] + 1];
    }else{
      result.push(total[1]);
      result.push(parseInt(total[0]));
      return [cur, 1];
    }
  }, [digitArray[0], 0])

  result.push(final[1]);
  result.push(parseInt(final[0]));

  var resultNum = 0;

  result.forEach(function(el, ind){
    resultNum += el * Math.pow(10, (result.length - ind - 1));
  });
  return resultNum;
}
