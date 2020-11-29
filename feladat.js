//1. feladat
const numericArray1=[13,356,765,24];

const sumOfArray= numericArray1
.map(element=> element*1.27)
.reduce((previousValue,curentValue)=> previousValue+curentValue);
console.log(sumOfArray);

//2. feladat

function masodikFeladat (arr, prim){
    if (typeof(arr)==='object' && typeof(prim)!=='object') {
        const obj = [];
        obj.exists = arr.some(element => element === prim);
        obj.index = arr.findIndex(element => element === prim);
        obj.allElementIsANumber = arr.every(element => typeof (element) === 'number');
        obj.someElementIsANumber = arr.some(element => typeof (element) === 'number');
        return obj;
    }
}

console.log( masodikFeladat ([1,4,NaN,'kutya'],'$s') );
//console.log( typeof ([1,4,NaN,'kutya']) );
//console.log( typeof ('$s') );

//3. feladat
function harmadikFeladat (arr){
    let template = '<ul>\n\t<li>';
    template += arr.join('</li>\n\t<li>');
    template += '</li>\n</ul>\n';
    return template;
}

console.log(harmadikFeladat(['Első','Második','Harmadik']));
console.log(harmadikFeladatForEach(['Első','Második','Harmadik']));

function harmadikFeladatForEach (arr){
    let template = '<ul>\n';
    arr.forEach(function(element){template += '\t<li>' + element + '<\li>\n'});
    template += '</ul>\n';
    return template;
}
console.log(harmadikFeladatReduce(['Első','Második','Harmadik']));

function harmadikFeladatReduce (arr){
    return arr.reduce(function(acc,elem){return acc + '\t<li>' + elem + '<\li>\n'},'<ul>\n') + '</ul>\n';
}

