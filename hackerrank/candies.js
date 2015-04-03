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

  for(var j=1;j<children.length;j++){
    if(children[j] > children[j-1]){
      candies[j] = candies[j-1] + 1;
    }
  }
  for(var k=children.length-1;k>=0;k--){
    if(children[k] > children[k+1]){
      candies[k] = Math.max(candies[k+1] + 1, candies[k]);
    }
  }

  console.log(candies.reduce(function(total, current){
    return total + current;
  }))
}
var fs = require('fs');

var fileInput = fs.readFileSync('input01.txt');
// processData('10\n\
// 2\n\
// 4\n\
// 2\n\
// 6\n\
// 1\n\
// 7\n\
// 8\n\
// 9\n\
// 2\n\
// 1');

processData(fileInput.toString());
