//Implement a javascript function that accepts an array of floating-point
// numbers as strings and returns the minimal, the maximal number,
// the sum and the average of all numbers (displayed with 2 digits 
//after the decimal point).
function solve(args){
    let arr=args;
    let min=10000,
         max=-10000,
         sum=0;
         
    let l=arr.length;
    for(let i=0;i<l;i+=1){
        if(min>+arr[i]){
            min=+arr[i];
        }
        if(max<+arr[i]){
            max=+arr[i];
        }
        sum=sum+(+arr[i]);
    }
    let avg=sum/l;
    console.log(`min=${min.toFixed(2)}\nmax=${max.toFixed(2)}\nsum=${sum.toFixed(2)}\navg=${avg.toFixed(2)}`);     
    
}

solve(['2', '5', '1']);