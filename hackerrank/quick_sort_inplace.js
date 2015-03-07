function processData(input) {
    var arr = input.split('\n');
    var numItems = parseInt(arr.shift());

    function qsort(items, left, right){
      if(right - left <= 1){
        return;
      }
      var pivot = partition(items, left, right);
      qsort(items, left, pivot);
      qsort(items, pivot+1, right);
      return items;
    };

    function partition(items, left, right){
      var leftPoint = left;
      var rightPoint = right - 1;
      while(rightPoint > leftPoint){
         if(items[rightPoint] < items[right]){
          if(items[leftPoint] > items[right]){
            var temp = items[rightPoint];
            items[rightPoint] = items[leftPoint];
            items[leftPoint] = temp;
            rightPoint --;
            leftPoint ++;
          }else{
            leftPoint ++;
          }
         }else{
          rightPoint ++;
         }
      };
     var temp = items[rightPoint];
     items[rightPoint] = items[right];
     items[right] = temp;
     return rightPoint;
    };

    return qsort(items, left, right);
};
