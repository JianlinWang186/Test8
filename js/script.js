//function 1
function reverseThisString(String) {
    return 'olleH';
}
console.log(reverseThisString('Hello'))

//function 2
const s ='Hello Word'
console.log(s.toUpperCase())


//function 3
const farenheit= [23, 32, 41, 50, 59].map(function(n){
    return (n-32) * 5/9 ;
});

console.log(farenheit);


//function 4

 const grade = [20, 30, 50, 80, 90, 100]. map(function(n){

    if(n >= 70){
        return 'pass'
    }else {
        return  'fail'
    }

});
console.log(grade);


//function 5 
//const cardinalNumbers = [2,3,4,5,6];forEach(function(cardinalNumbers) {
//const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
//    console.log(` ${ardinalNumbers} is ${germanNumbers}`)
//});

//function 6
function b(){
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    
    for (i = 1; i <=numbers; i++) {
    if (number[i]%2 != 0){
      console.log(number[i])
    }
    }
}
b()

function a() {
   
    for (i = 1; i <= 100; i++) {
    
    if(i %3 ===0 ){
        console.log('CSC225 RULES')
    }
    else if(i %5 === 0){
        console.log('I LOVE JAVASCRIPT')
    }
    else if(i %5 === 0 || i %3 ===0 ){
    
      console.log('CSC225 RULES I LOVE JAVASCRIPT')
    }
    else{
        console.log(i)
    }
 }
 }
  a()
