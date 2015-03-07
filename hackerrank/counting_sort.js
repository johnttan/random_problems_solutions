function processData(input) {
    var countTable = {};
    var max = 0;
    input = input.split('\n');
    input.shift();
    input = input.map(function(el, ind){
        var elAr = el.split(' ');
        elAr[0] = parseInt(elAr[0]);
        countTable[elAr[0]] = 0;
        if(ind < input.length / 2){
            elAr[2] = "first";
        }else{
            elAr[2] = "second";
        }
        return elAr
    });
    input.forEach(function(el){
        countTable[el[0]] ++;

        if(el[0] > max){
            max = el[0];
        }
    });
    var subTotal = 0;
    for(var i=0;i<=max;i++){
        var oldCount = countTable[i];
        countTable[i] = subTotal;
        subTotal += oldCount;
    };
    var results = [];
    input.forEach(function(el){
        results[countTable[el[0]]] = el;
        countTable[el[0]] ++;
    })

    var resultArray = [];
    results.forEach(function(el){
        if(el[2] === "first"){
            resultArray.push('-')
        }else{
            resultArray.push(el[1])
        }
    });
    console.log(resultArray.join(' '))
}
