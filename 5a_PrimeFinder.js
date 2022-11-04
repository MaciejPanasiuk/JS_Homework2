function IsPrime(n){
    let PrimeCheck = true;//making the boolean true in the beginning, will change to false if its not a prime
    if (n<=1 || !Number.isInteger(n))//
    {return `your number is either lower than 1 or not an integer`;}
    else if(n>1){
         //for(i=2; i<n.length;i++){//iterating through every integer within the given number, exept the number itself
         for(i=2;i<n;i++){
            if (n % i===0){
            PrimeCheck = false;}}

           if (PrimeCheck)
           {return "The number is a prime!";}
           else 
           {return "The number is not a prime!";}
         }}
        
        
console.log(IsPrime(209));


// || !Number.isInteger(n)
// Number.isInteger(n) && 
