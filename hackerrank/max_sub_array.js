function processData(input) {
  input = input.split('\n');
  var arrays = [];
  for(var i=2;i<input.length;i+=2){
    arrays.push(input[i].split(' ').map(function(el){return parseInt(el)}))
  };
  arrays.forEach(function(arr){
    var cSum = 0;
    var ncSum = 0;
    var currentSum = 0;
    arr.forEach(function(el){
      currentSum += el;
      if(el > 0){
        ncSum += el;
      };
      if(currentSum < 0){
        currentSum = 0
      };
      if(currentSum > cSum){
        cSum = currentSum
      };
    });
    // If all negatives
    if(cSum === 0){
      cSum = arr[0];
      for(var i=1;i<arr.length;i++){
        if(arr[i] > cSum){
          cSum = arr[i]
        }
      }
      ncSum = cSum;
    }
    console.log(cSum, ncSum);
  })
}
