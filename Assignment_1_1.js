var square=function(a){
    return  a*a;
}
function sumOfSquares(square,a,b)
{
    var result;
    result=square(a)+square(b);
    return result;
}
var output=sumOfSquares(square,2,3);
console.log(output);
