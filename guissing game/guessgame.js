const max=prompt("enter ur max no");
const rand=Math.floor(Math.random()*max)+1;
let guess=prompt("enter your guess");
while(true){
    if(guess=="quit"){
        console.log("u quit");
        break;
    }
    if(guess==rand){
        console.log("congrats",rand);
        break;
    }
    else if(guess>rand){
        guess=prompt("ur guess is too large try agin");
    }
    else if(guess<rand){
        guess=prompt("ur guess is too small try agin");
    }
}
