function playcraps() {
    //troubleshooting playcraps() has started
    console.log("playCraps() started");

    var die1 = 0;
    var die2 = 0;

    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());

    console.log(die1);
    console.log(die2);

    document.getElementById("die1Res").innerHTML = "The result for die1 is: " + die1;
    document.getElementById("die1Res").innerHTML = "The result for die1 is: " + die1;

    //check if craps (7 or 11)

    var sum = die1 + die2;
    if (sum == 7 || sum == 11) {
        console.log("You lose!!!!!");
        document.getElementById("gameRes").innerHTML = "You did find victory. Please play again and WIN!";
        //check for win (even doubles)
    } else if (die1 % 2 == 0 && die1 == die2) {
        console.log("you win!!!!!");
        document.getElementById("gameRes").innerHTML = "You Won!!!!!";
        //check for tie
    } else {
        console.log("You did not win or lose.");
        document.getElementById("gameRes").innerHTML = "You did not win or lose. Please play again and WIN!"
    }
}