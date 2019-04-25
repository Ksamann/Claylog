
var numberOfPlates = 5;




function makeScore(){

    for(var i = 0; i < numberOfPlates; i++ ){
        var btn1 = document.createElement("button");
    btn1.className ="shot";
    var score = document.getElementById("score");
    score.appendChild(btn1);

    }

    

}

