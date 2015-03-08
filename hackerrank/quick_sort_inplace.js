function qsort(items, left, right){
  if((right - left) < 1){
    return;
  }
  var pivot = partitionOne(items, left, right);
  qsort(items, left, pivot-1);
  qsort(items, pivot+1, right);
  return items;
};

function swap(items, left, right){
  var temp = items[left];
  items[left] = items[right];
  items[right] = temp;
};

function partitionOne(items, left, right){
  var pivotInd = right;
  for(var i=left;i<=right;i++){
    if(items[i] < items[pivotInd]){
      swap(items, left, i);
      left++;
    }
  };
  swap(items, pivotInd, left);
  console.log(items.join(' '))
  return left;
};

function partitionTwo(items, left, right){
  var pivotInd = right;
  for(var i=left;i<=right;i++){
    if(items[i] < items[pivotInd]){
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
    arr = arr[0].split(' ').map(function(el){return parseInt(el)})
    return qsort(arr, 0, arr.length-1);
};
var randArr = [];
for(var i=0;i<10;i++){
  randArr.push(Math.floor(Math.random() * 100));
}
console.log(randArr);
console.log(qsort(randArr, 0, randArr.length-1))
