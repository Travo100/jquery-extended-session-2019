var score = 0;
var targetNum = getRandomInt(1, 100);
$("#target-num").text(targetNum);

// $(".gems").length refers to the 
// number of buttons with the class of 
// .gem on the page

// setting the gems on the page 
// each with a random number
for(var i = 0; i < $(".gems").length; i++) {
    var gemNum = getRandomInt(1, 12);
    $("#gem-"+i).val(gemNum);
}

function resetGame() {
    // reset the game
    // pick any new target number between 1 - 100
    targetNum = getRandomInt(1, 100);
    // display to the page
    $("#target-num").text(targetNum);
    // reset the score to 0 
    score = 0;
    // display the score on the UI
    $("#score-num").text(score);

    // setting the gems on the page 
    // each with a random number
    for(var i = 0; i < $(".gems").length; i++) {
        var gemNum = getRandomInt(1, 12);
        $("#gem-"+i).val(gemNum);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}

// when we click on one the gems
$(".gems").on("click", function() {
    $("#result-text").text("");
    // get the value from the gem
    var gemTotal = parseInt($(this).val());
    // add it to the score
    // longhand is score = score + gemTotal
    score += gemTotal;
    // update the UI to reflect the score
    $("#score-num").text(score);

    // if the score matches 
    // the target number
    if(score === targetNum) {
        // alert we win
        $("#result-text").text("🏆 You won! 🏆");
        // if the score in larger then the target number
        resetGame();

    } else if(score > targetNum) {
        // alert we lose
        $("#result-text").text("😭 You lose! 😭");
        // reset the game
        resetGame();
    }
});