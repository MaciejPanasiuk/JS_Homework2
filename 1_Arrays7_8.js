
// zadanie 7
//let array = [1,6,23,8,4,98,3,7,3,98,4,98,56];
//let sum=0;
//for(i=0;i<array.length;i++){
 //   if (array[i]%2!==0)
 //   sum=sum+array[i];
//}
//console.log(sum);

// zadanie 8
//let arrayTwo = [1,6,23,8,4,98,3,7,3,98,4,98,56];
//let total=0;
//for(i=0;i<arrayTwo.length;i++){
//    if (arrayTwo[i]%2!==0)
//    total=total+arrayTwo[i];
//    else{
//        total=total-arrayTwo[i];
//    }
//}
//console.log(total);


//CHYBA ŻE CHODZIŁO O PARZYSTE MIEJSCE W SZEREGU I NIEPARZYSTE, WTEDY:
let array = [1,6,23,8,4,98,3,7,3,98,4,98,56];
let sum=0;
for(i=0;i<array.length;i++){
if (i%2!==0){
sum=sum+array[i]
}}
console.log(sum);

let arrayTwo = [1,6,23,8,4,98,3,7,3,98,4,98,56];
let total=0;
for(i=0;i<array.length;i++){
if (i%2==0){
    total=total+array[i]}
    else{
       total=total-arrayTwo[i];
}}
console.log(total);