//Write a javascript function that prints a matrix like in the examples
// below by a given integer N. Use two nested loops.

//Challenge: achieve the same effect without nested loops.
function solve(args){
    let n=+args[0];
    let i=1,
    j=1;
    let result='';
    while(i<=n){
        if(j<i+n){
            result=result+j+' ';
            j+=1;
            if(j===i+n){
                console.log(result);
                result='';
            }
        }
        else{
            i+=1;
            j=i;
        }
    }


}
solve(['4']);