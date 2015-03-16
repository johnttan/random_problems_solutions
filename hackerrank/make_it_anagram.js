function processData(input) {
  input = input.split('\n');
  var set = {};
  var common = 0;
  for(var i=0;i<input[0].length;i++){
    set[input[0][i]] = true;
  };
  for(var j=0;j<input[1].length;j++){
    if(set[input[1][j]]){
      common ++;
    }
  }
  console.log(input[0].length - common + input[1].length - common);
}

processData("cde\n\
abc")
