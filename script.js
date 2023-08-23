// this programe for prime number
let num= 17;
let count = 0;
for(let i=1;i<=num; i++){
    if(num%i===0){
        count++
    }
}
if(count==2){
    console.log(num + " is prime number")
}

// Here a code for palindrome 

let str = "anna";
let revers = ""
for(let j=0; j<str.length; j++){
revers+= str[i]
}
if(str==revers){
console.log(str + " Is Palindrome")
}