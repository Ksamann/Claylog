
var numberOfPlates = 5;
var shotsPerPlate = 5;





function makeScore(){

    for(var i = 0; i < numberOfPlates; i++ ){

    var plate = document.createElement("section");
    plate.className = "plate";
    var plateText = document.createElement("p");
    plateText.className = "plateText";
    plateText.innerHTML = "Plate " + (i+1);
    plate.appendChild(plateText);

        for(var j = 0; j < shotsPerPlate; j++){
            var btn1 = document.createElement("button");
            btn1.className ="shot";
            plate.appendChild(btn1);
        }

   
    var score = document.getElementById("score");
    score.appendChild(plate);

    }

    

}

