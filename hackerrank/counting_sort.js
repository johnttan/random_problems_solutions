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
        //console.log(arr1, arr2)
        if(arr1.length === 0){
            return arr2;
        }
        if(arr2.length === 0){
            return arr1;
        }
        var resultArr = [];
        var point1 = 0;
        var point2 = 0
        while(point1 < arr1.length && point2 < arr2.length){
            if(arr1[point1][0] <= arr2[point2][0]){
                resultArr.push(arr1[point1]);
                point1 ++;
            }else{
                resultArr.push(arr2[point2]);
                point2 ++;
            }
        }
        if(point1 >= arr1.length){
            for(var i=point2;i<arr2.length;i++){
                resultArr.push(arr2[i])
            }
        } else{
            for(var i=point1;i<arr1.length;i++){
                resultArr.push(arr1[i])
            }
        }
        //console.log(resultArr);
        return resultArr;
    };
    function sort(arr){
        if(arr.length === 1 || arr.length === 0){
            return arr;
        }
        var pivot = Math.floor(arr.length / 2);
        return merge(sort(arr.slice(0, pivot)), sort(arr.slice(pivot, arr.length)))
    };
    var results = sort(input);
    var firstHalf = {};
    var secondHalf = {};
    for(var i=0;i<input.length;i++){
        if(i < input.length / 2){
            firstHalf[input[i][1]] = true;
        }else{
            secondHalf[input[i][1]] = false;
        }
    };
    var resultArray = [];
    results.forEach(function(el){
        if(firstHalf[el[1]]){
            resultArray.push('-')
        }else{
            resultArray.push(el[1])
        }
    });
    console.log(resultArray.join(' '))
}
