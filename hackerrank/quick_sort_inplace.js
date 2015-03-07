function qsort(items, left, right){
  if((right - left) <= 1){
    return;
  }
  var pivot = partition(items, left, right);
  qsort(items, left, pivot);
  qsort(items, pivot, right);
  return items;
};

function swap(items, left, right){
  var temp = items[left];
  items[left] = items[right];
  items[right] = temp;
};

function partitionOne(items, left, right){
  var pivotInd = right;
  for(var i=left;i<right;i++){
    if(items[left] < items[pivotInd]){
      swap(items, left, i);
      left++;
    }
  };
  swap(items, pivotInd, left);
  return left;
};

function partitionTwo(items, left, right){
  var pivotInd = right;
  for(var i=left;i<right;i++){
    if(items[left] < items[pivotInd]){
      swap(items, left, i);
      left++;
    }
  };
  swap(items, pivotInd, left);
  return left;
};

function processData(input) {
    var arr = input.split('\n');
    var numItems = parseInt(arr.shift());

    return qsort(items, left, right);
};
var randArr = [];
for(var i=0;i<10;i++){
  randArr.push(Math.floor(Math.random() * 100));
}
console.log(randArr);
console.log(qsort(randArr, 0, randArr.length-1))
