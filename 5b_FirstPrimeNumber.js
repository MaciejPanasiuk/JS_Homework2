//let NumArray = [1,2.2,18,21,-17,3.5,7,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29] 


function IsPrime(n){//function that checks if the given parameter is a prime number, returns true if it is
    let PrimeCheck = true;//making the boolean true in the beginning, will change to false if its not a prime
    if (n<=1 || !Number.isInteger(n))//
    {return false;}
    else if(n>1){
         //for(i=2; i<n.length;i++){//iterating through every integer within the given number, exept the number itself
         for(i=2;i<n;i++){
            if (n % i===0){
            PrimeCheck = false;}}

           if (PrimeCheck)
           {return true;}
           else 
           {return false;}
         }}

//console.log(NumArray.find(IsPrime));
    //first it should take values from the array
    //then it should probe each value till it finds a prime/value true for the function probing it, with the help of the function above
    //we might need to modify the function above so it will return true or false
function FirstNPrimes(param){
  let PrimeArray=[];
  //first we need to make counter that will stop as soon as the function finds n primes
  //it needs to look for number after number and .push it into an array if it finds it
  //then return the answer
let Counter = 2;
while(PrimeArray.length<=param){
if (IsPrime(Counter))
{PrimeArray.push(Counter)
Counter++}
else{
Counter++
}}
return PrimeArray;
}
console.log(FirstNPrimes(10));