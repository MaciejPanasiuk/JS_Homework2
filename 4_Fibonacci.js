//In a Fibonacci sequence, first number is 0, second is 1, every further number is a sum of 2 previous ones, so 1,2,3,5,8 and so on
//first we set a function with a parameter  as a sort of counter
//we set a formula that will add the current number n and add the result of a function of n-1
function Fibonacci(n){
if(n===0){
return 0;}
if (n===1){
    return 1;
}
return Fibonacci(n-1)+Fibonacci(n-2);
}
let FiboArr=[];
function FiboSeq(param){
    let counter = 0;
    while(FiboArr.length<param)
    {
        FiboArr.push(Fibonacci(counter))
        counter++
    }
    return FiboArr;
}
console.log(FiboSeq(10))
