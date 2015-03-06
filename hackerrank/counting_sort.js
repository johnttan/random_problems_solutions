function processData(input) {
    input = input.split('\n')
    .map(function(el){
        return el.split(' ')
    })
    .map(function(el){
        el[0] = parseInt(el);
        return el
    });
    var numItems = input.shift();

    function merge(arr1, arr2){
        var resultArr = [];
        var point1 = 0;
        var point2 = 0
        while(point1 < arr2.length || point2 < arr2.length){
            if(arr1[point1] >= arr2[point2] || point2 >= arr2.length){
                resultArr.push(arr[point1]);
                point1 ++;
            }else if(arr1[point1] < arr2[point2] || point1 >= arr1.length){
                resultArr.push(arr[point2]);
                point2 ++;
            }
        }
        return resultArr;
    };
    function sort(arr){
        if(arr.length === 1 || arr.length === 0){
            return arr;
        }
        var pivot = Math.floor(arr.length / 2);
        return merge(sort(arr.slice(0, pivot), arr.slice(pivot, arr.length)))
    }
}
