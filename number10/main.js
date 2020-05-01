function appendBlueCube() {
    var leftPos = 10;
    var cubeWraperElement = document.getElementsByClassName("cubes_wrapper")[0];
    if (!cubeWraperElement) {
        console.log("does not found cubeWraperElement");
    }
    for (var i = 2; i < 9; i++) {
        leftPos += 45;
        cubeWraperElement.insertAdjacentHTML("beforeend", " <div class='cube_blue' style='left: " + leftPos + "px;'></div>")
    }
}