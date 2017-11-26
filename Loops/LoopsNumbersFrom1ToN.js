//Implement a javascript function that accepts an array with a single element
// - positive integer N as string and prints all the numbers from 1 to N
// inclusive, on a single line, separated by a whitespace.
function solve(args){
    let n=+args[0];
    let result='';
    for(let i=1;i<=n;i+=1){
       result=result+i+' ';
    }
    console.log(result);
}
solve(['5']);