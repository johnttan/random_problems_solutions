function LCS(x, y) {
  //TODO
  var xSplit = x.split("");
  var ySplit = y.split("");

  function subLCS(x, y){
    if(x == "" || y == ""){
      return "";
    }
    if(x[x.length-1] == y[y.length-1]){
      return subLCS(x.slice(0, x.length-1), y.slice(0, y.length-1)) + x[x.length-1];
    }else{
      var poss1 = subLCS(x.slice(0, x.length-1), y.slice(0, y.length));
      var poss2 = subLCS(x.slice(0, x.length), y.slice(0, y.length-1));

      return poss1.length >= poss2.length ? poss1 : poss2;
    }
  }

  return subLCS(xSplit, ySplit);

}
