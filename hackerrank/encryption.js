function processData(input) {
  var cols = Math.ceil(Math.sqrt(input.length));
  var answer = [];
  for(var i=0;i<input.length;i++){
    var col = i % (cols);
    answer[col] = answer[col] || '';
    answer[col] += input[i];
  };
  return answer.join(' ');
}
var t = processData('if man was meant to stay on the ground god would have given us roots'.split(' ').join(''))
console.log(t)
