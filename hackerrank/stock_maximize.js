function processData(input) {
  input = input.split('\n');
  var tests = [];
  for(var i=1;i<input.length;i+=2){
    tests.push(input[i].split(' ').map(function(el){return parseInt(el)}));
  }
}
