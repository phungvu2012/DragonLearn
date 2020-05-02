function appendBlueCube(leftPos, index, time) {
    // var leftPos = 10;
    var cubeWraperElement = document.getElementsByClassName("cubes_wrapper")[index];
    if (!cubeWraperElement) {
        console.log("does not found cubeWraperElement");
    }
    for (var i = 0; i < time; i++) {
        cubeWraperElement.insertAdjacentHTML("beforeend", " <div class='cube_blue' style='left: " + leftPos + "px;'></div>")
        leftPos += 45;
    }
}

function appendRedCube(leftPos, index, time) {
    // var leftPos = 10;
    var cubeWraperElement = document.getElementsByClassName("cubes_wrapper")[index];
    if (!cubeWraperElement) {
        console.log("does not found cubeWraperElement");
    }
    for (var i = 0; i < time; i++) {
        cubeWraperElement.insertAdjacentHTML("beforeend", " <div class='cube_red' style='left: " + leftPos + "px;'></div>")
        leftPos += 45;
    }
}