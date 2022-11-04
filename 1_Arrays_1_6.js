let array =[1,6,23,8,4,8,3,7];
//let InitVal = 0;
//let arraySum = array.reduce ((previousValue, currentValue) => previousValue + currentValue,
//InitVal);//summing our array numbers
//console.log(arraySum);

//can also be done like this:
//       2
function Sum(accumulator, currentvalue){//function that will add stuff, accumulator is our current total that will be the result of reducing, current value is the value of an array that will be added to accumulator 
return accumulator + currentvalue;//returns a sum of 2 values till only 1 remains
}
let arraySum = array.reduce(Sum);//syntax using a callback function Sum above
console.log(`the sum total of everything within out array is ${arraySum}`);
//       3
function Edges(param){
    return param[0] + param[param.length-1];
}
console.log(`adding 1st and last number will give us ${Edges(array)}`);
//       4
function reversing (param){
let reversedArray = [];
for (i=param.length-1;i>=0;i--){//so it iterates through the whole length of an array backwards
reversedArray.push(param[i])}//putting in a new array values from the last position
return reversedArray;
}
console.log(`reversing our initial array ${reversing(array)}`);
//       5
function Randomizer (param,attempts){
    let newArray = [];
    for (i=0;i<attempts;i++){//will generate a number for every attempt
let randomizer = Math.floor(Math.random() *(param.length-1))// picks a random number from our array
    newArray.push(param[randomizer]);// putting the results in an array, might as well make it on ifs
    }
    return `we got some random numbers ${newArray} from which  ${Math.min(...newArray)} is the smallest`;//destructuring a min value from the array, a bit over the top but hey it works
}
console.log(Randomizer(array,5));
//       6
//we need a function that shuffles the bits in a array
// //lets find a method? lets try .sort
  function Shuffler (param){
     let randomNum;
     let MutableArr = param;
     let ShuffledArr=[];
     let index=param.length;
    //first we randomize an index
    //for (i=0; i<param.length; i++)
    while(index!=0)
    {
     randomNum=Math.floor(Math.random()*(MutableArr.length));
     //ShuffledArr.push(MutableArr.splice(randomNum,1)[0]);// code in one line
     ShuffledArr.push(MutableArr[randomNum]);//adding new number to a new arr
     MutableArr.splice(randomNum,1);//removing said number from the old arr so it wont pick it again at random
     index--;//completely separate index, otherwise it gets subtracted 2 times
     //MutableArr.splice(randomNum,1);
    }
    return `we set our array numbers to random and got ${ShuffledArr}, hopefuly we aint seeing double`
}
console.log(Shuffler(array)); 

//DIFFERENT METHOD THAT IS SIMILAR
// function ShufflerTwo (param){
//   let ShuffledArr = [];
//   let index=param.length;
//   let randomNum;//this will hold our random number so we get an array position
//     while(index!=0){//
//         randomNum = Math.floor(Math.random()*index--);
//       ShuffledArr.push(param.splice(randomNum,1)[0]) 
//     }
//     return `we set our array numbers to random and got ${ShuffledArr}, hopefuly we aint seeing double`
// }
// console.log(ShufflerTwo(array));
