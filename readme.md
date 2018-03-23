# CrystalsCollector!
Welcome to the CrystalsCollector Game! This game is a variant of the classic hangman game, where instead of
guessing letters, the goal is to guess random numbers associated with a given gemstone. Game rules are explained 
in more detail on the page itself.

Feel free to fork the project submit any suggested changes by way of a pull request!

# Key Code Snippets

## The newGame() Function

## $(gemstoneImage).click
As someone who is learning jQuery from a Python background, I find the de-facto jQuery solution to a UI component
such as a button to be particularly elegant. In other languages, a while true loop would likely be the method of choice
for any sort of ongoing user interactivity. In jQuery, however, no such method is necessary. Observe: 

'''javascript
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
'''