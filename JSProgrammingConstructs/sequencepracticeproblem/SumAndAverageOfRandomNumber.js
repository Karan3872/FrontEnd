var sum = 0;
var count = 5;

for( i=0;i<5;i++){
    var a = Math.floor(Math.random()*100)
    sum+=a;
    console.log(a);
}

var average = sum/count;
console.log(sum);
console.log(average);

