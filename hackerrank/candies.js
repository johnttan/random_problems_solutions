function processData(input) {
  input = input.split('\n');
  var children = [];
  for(var i=1;i<input.length;i++){
    children.push(parseInt(input[i]));
  };
  var candies = [];
  for(var j=0;j<children.length;j++){
    candies[j] = 1;
  };

  for(var j=0;j<children.length;j++){
    if(children[j] > children[j+1] && candies[j] <= candies[j+1]){
      candies[j] ++;
    }
    if(j > 0 && children[j] > children[j-1] && candies[j] <= candies[j-1]){
      candies[j] ++;
    }
  }
  console.log(candies.reduce(function(total, current){
    return total + current;
  }))
}

processData('3\n\
1\n\
2\n\
2');
