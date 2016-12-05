var descriptions = [
    ["a maker", "of better descriptions than maker."],
    ["a musician", "and percussive fingerstyle enthusiast."],
    ["a cook", "in the loosest sense of the word."],
    ["a creator", "turning daydreams into real things."],
    ["a player", "of the instrumental type."],
    ["a designer", "putting user experience first."],
    ["a programmer", "typing a new tomorrow."]
]

$(document).ready(function() {
    var i = 0;
    setInterval(function() {
        $(".personal").text(descriptions[i][0]).fadeOut(400, function() {
            $(".personal").text(descriptions[i][0]).fadeIn(400);
        });
        $(".personal__sub").text(descriptions[i][1]).fadeOut(400, function() {
            $(".personal__sub").text(descriptions[i][1]).fadeIn(400);
        });
        i = (i + 1) % descriptions.length;
    }, 3000);
    
});
