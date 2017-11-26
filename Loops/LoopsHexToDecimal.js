//Using loops implement a javascript function that converts
// a hex number number to its decimal representation.

function solve(args){
    let n=args[0].length;
    let sum=0;
    let ind=1;
    let digit;
    for(let i=n-1;i>=0;i-=1){
        digit=args[0][i];
        switch(digit){
            case 'A':digit=10;
            break;
            case 'B':digit=11;
            break;
            case 'C':digit=12;
            break;
            case 'D':digit=13;
            break;
            case 'E':digit=14;
            break;
            case 'F':digit=15;
            break;
            default:digit=+args[0][i];

        }
        sum=sum+digit*ind;
        ind=ind*16;
    }
    console.log(sum);

}
solve(['1AE3']);
