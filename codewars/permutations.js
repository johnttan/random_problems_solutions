function permutations(string) {
  var table = {};

  function generate(string, result){
    if(string.length === 0){
      table[result] = result;
    }else{
      for(var i=0;i<string.length;i++){
        generate(string.substr(0, i) + string.substring(i+1, string.length), result + string[i]);
      }
    }
  };
  generate(string, "");
  return Object.keys(table);
}
