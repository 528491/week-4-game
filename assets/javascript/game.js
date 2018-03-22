
//Credit goes to MDN and Stack overflow for this elegant solution for obtaining a random integer over a given range
function getRandomInt(min, max){
    return Math.floor(Math.random() *(max - min + 1)) + min;
}

$(document).ready(function(){

    //Variables we will be using throughout the game. 
    var targetNumber;
    var playerScore;
    var gemstone1Value;
    var gemstone2Value;
    var gemstone3Value;
    var gemstone4Value;
    var wins = 0;
    var losses = 0;
    var win = false;    //These two variables will keep track of whether or not the game is over
    var loss = false;
    
    //Declare a new game function. This function gets called both when the page loads
    //and when a player wins or loses
    
    function newGame(){
        //Generate a random number between 19 and 120
        targetNumber = getRandomInt(19, 120);
        //Update the target number with the proper value
        $("#targetNumber").text(targetNumber);

        //Next we need to ensure that the player score is reset back to zero
        playerScore = 0;
        $("#totalScoreText").text(playerScore);

        //Each gemstone gets a random number in the range 1 - 12. We can conveniently store this value
        //as an html attribute, which makes it easier to map clicks to score updates
        gemstone1Value = getRandomInt(1, 12);
        $("#gemstone1Image").attr("value", gemstone1Value);
        //console.log($("#gemstone1Image").attr("value"));
        gemstone2Value = getRandomInt(1, 12);
        $("#gemstone2Image").attr("value", gemstone2Value);
        gemstone3Value = getRandomInt(1, 12);
        $("#gemstone3Image").attr("value", gemstone3Value);
        gemstone4Value = getRandomInt(1, 12);
        $("#gemstone4Image").attr("value", gemstone4Value);

    }
    //We will execute this function at least once.
    newGame();

    //use this to write just one function for all four images, select based on class not ID
    $(".gemstoneImage").click(function(){
        //console.log($(this).attr("value"));
        playerScore += parseInt($(this).attr("value"));
        $("#totalScoreText").text(playerScore);

        //Check to see if we reached the limit
        if (playerScore == targetNumber){
            wins++;
            $("#wins").text("Wins: " + wins);
            newGame();
        }
        if (playerScore > targetNumber){
            losses++;
            $("#losses").text("Losses: " + losses);
            newGame();
        }
    });   

});