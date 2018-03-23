# CrystalsCollector!

Link: https://528491.github.io/week-4-game/

Welcome to the CrystalsCollector Game! This game is a variant of the classic hangman game, where instead of
guessing letters, the goal is to guess random numbers associated with a given gemstone. Game rules are explained 
in more detail on the page itself.

Feel free to fork the project submit any suggested changes by way of a pull request!

# Key Code Snippets

## The newGame() Function
Function that is run every time a new game is run. A simple but effective way of practicing code modularity.

    > function newGame(){
    >    //Generate a random number between 19 and 120
    >    targetNumber = getRandomInt(19, 120);
    >    //Update the target number with the proper value
    >    $("#targetNumber").text(targetNumber);

    >    //Next we need to ensure that the player score is reset back to zero
    >    playerScore = 0;
    >    $("#totalScoreText").text(playerScore);

    >    //Each gemstone gets a random number in the range 1 - 12. We can conveniently store this value
    >    //as an html attribute, which makes it easier to map clicks to score updates
    >    gemstone1Value = getRandomInt(1, 12);
    >    $("#gemstone1Image").attr("value", gemstone1Value);
    >    //console.log($("#gemstone1Image").attr("value"));
    >    gemstone2Value = getRandomInt(1, 12);
    >    $("#gemstone2Image").attr("value", gemstone2Value);
    >    gemstone3Value = getRandomInt(1, 12);
    >    $("#gemstone3Image").attr("value", gemstone3Value);
    >    gemstone4Value = getRandomInt(1, 12);
    >    $("#gemstone4Image").attr("value", gemstone4Value);


## $(gemstoneImage).click
As someone who is learning jQuery from a Python background, I find the de-facto jQuery solution to a UI component
such as a button to be particularly elegant. In other languages, a while true loop would likely be the method of choice
for any sort of ongoing user interactivity. In jQuery, however, no such method is necessary. Observe: 

    > $(".gemstoneImage").click(function(){
    >        //console.log($(this).attr("value"));
    >        playerScore += parseInt($(this).attr("value"));
    >        $("#totalScoreText").text(playerScore);
    >
    >        //Check to see if we reached the limit
    >        if (playerScore == targetNumber){
    >            wins++;
    >            $("#wins").text("Wins: " + wins);
    >            newGame();
    >        }
    >        if (playerScore > targetNumber){
    >            losses++;
    >            $("#losses").text("Losses: " + losses);
    >            newGame();
    >        }
    >    });   