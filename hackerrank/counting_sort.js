function processData(input) {
    var countTable = {};
    var max = 0;
    input = input.split('\n')
    .map(function(el){
        countTable[el[0]] = 0;
        return el.split(' ')
    })
    .map(function(el){
        el[0] = parseInt(el);
        countTable[el[0]] ++;
        if(el[0] > max){
            max = el[0];
        }
        return el
    });
    var numItems = input.shift();

    var subTotal = 0;
    for(var i=0;i<max;i++){
        var oldCount = countTable[i];
        countTable[i] = subTotal;
        subTotal += oldCount;
    };
    var results = [];
    input.forEach(function(el){
        results[countTable[el[0]]] = el;
        countTable[el[0]] ++;
    })

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
