function generateArranges(N){
  var table = [1, 1, 1, 1];
  var counter = 4;
  while(counter <= N){
    table[counter] = table[counter-1] + table[counter-4];
    counter ++;
  }
  return table[counter-1];
}

function processData(input) {
  input = input.split('\n').map(function(el){return parseInt(el)});
  for(var i=1;i<input.length;i++){
    console.log(generateArranges(input[i]))
  }
}
