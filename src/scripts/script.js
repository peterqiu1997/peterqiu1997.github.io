var descriptions = [
    ["a maker", "of better descriptions than maker."],
    ["a percussive fingerstyle guitarist", "a mouthful."],
    ["a cook", "in the loosest sense of the word."],
    ["a tinkerer", "break it and make it."],
    ["a player", "of the instrumental type."],
    ["a designer", "putting user experience first."],
    ["a programmer", "playing the keyboard."]
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
    }, 2250);
    
});
