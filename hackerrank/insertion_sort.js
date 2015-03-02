function insertionSort (ar) {
  ar = ar.split('\n')[1].split(' ');
  ar = ar.map(function(el){return parseInt(el)})
  for(i = 1; i < ar.length; i++){
      var j = i - 1;
      while(j >= 0 && ar[j] > ar[j+1]){
        var temp = ar[j+1];
        ar[j + 1] = ar[j];
        ar[j] = temp;
        j = j - 1;
      }
  }
  console.log(ar.join(' '));
  return ar;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   insertionSort(_input);
});
