// function logKey(e) {
//     console.log(e.code);
// }
// document.addEventListener("DOMContentLoaded", function() {
//     var board = document.getElementById("board");
//     console.log(board);
//     board.addEventListener('keypress', function(e) {
//         console.log(e);
//     });
//     // this function runs when the DOM is ready, i.e. when the document has been parsed
//     // document.getElementById("user-greeting").textContent = "Welcome back, Bart";
// });

// var board = document.getElementById("board");
// console.log(board);
// board.addEventListener('keypress', function(e) {
//     console.log(e);
// });

document.onkeypress = function(event) {
    const isNumber = /^[0-9]$/i.test(event.key);
    console.log(event);
    console.log("is number --> " + isNumber);
}

function appendBlueCube(leftPos, index, time) {
    // var leftPos = 10;
    var cubeWraperElement = document.getElementsByClassName("cubes_wrapper")[index];
    if (!cubeWraperElement) {
        console.log("does not found cubeWraperElement");
    }
    for (var i = 0; i < time; i++) {
        cubeWraperElement.insertAdjacentHTML("beforeend", " <div class='cube_blue' style='left: " + leftPos + "px;'></div>")
        if (leftPos == 190) leftPos += 52
        else leftPos += 45;
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
        if (leftPos == 190) leftPos += 52
        else leftPos += 45;
    }
}

function appendBluenRedCube(startPos, index, blueCubeNum, redCubeNum) {
    var cubeWraperElement = document.getElementsByClassName("cubes_wrapper")[index];
    if (!cubeWraperElement) {
        console.log("does not found cubeWraperElement");
    }
    for (var i = 0; i < blueCubeNum; i++) {
        cubeWraperElement.insertAdjacentHTML("beforeend", " <div class='cube_blue' style='left: " + startPos + "px;'></div>");
        if (startPos == 190) startPos += 52;
        else startPos += 45;
    }
    for (var j = 0; j < redCubeNum; j++) {
        cubeWraperElement.insertAdjacentHTML("beforeend", " <div class='cube_red' style='left: " + startPos + "px;'></div>")
        if (startPos == 190) startPos += 52
        else startPos += 45;
    }
}

function appendFirstLine() {
    var leftPos = 10;
    appendBlueCube(10, 0, 10);
    // appendCubeWrapperClass();
    // appendExampleClass();
    // appendBlueCube(10, 1, 9);
}

function startGame() {
    appendCubeWrapperClass();
    appendExampleClass();
    appendLeftLine();
}

function appendLeftLine() {
    var totalLines = 10;
    var totalCubes = 10;
    for (var i = 1; i <= totalLines; i++) {
        appendBluenRedCube(10, i, totalLines - i, i);
    }
}

function appendCubeWrapperClass() {
    var lines = document.getElementsByClassName("line");
    for (var i = 0; i < lines.length; i++) {
        var cubeWrapperElement = document.createElement("div");
        cubeWrapperElement.setAttribute('class', 'cubes_wrapper');
        lines[i].appendChild(cubeWrapperElement);
    }
}

function appendExampleClass() {
    var lines = document.getElementsByClassName("line");
    for (var i = 0; i < lines.length; i++) {
        var example = document.createElement("div");
        example.setAttribute('class', 'example');
        lines[i].appendChild(example);
    }
}

function buttonDown() {
    return null != i && i.event("play_button"), a.off(Card.Script98.buttonDown()), e.addClass("started"), a.addClass("started"), $.delay(1e3, function() {
        return a.remove(), e.removeClass("started").addClass("finished"), r()
    });
}

function disableBtn_Play() {
    var element = document.getElementsByClassName("btn_play")[0];
    // console.log(element);
    element.style.display = "none";
}

function removeUnder_Start() {
    var element = document.getElementsByClassName("first_line under_start")[0];
    // console.log(element);
    element.classList.remove("under_start");
}

function onBtn_playClicked() {
    disableBtn_Play();
    removeUnder_Start();
    // startGame();
}

function appendoneEx() {
    var element = document.getElementsByClassName("example")[1];
    var outer = document.createElement("div");
    outer.setAttribute('class', '__outer');
    var inner = document.createElement("div");
    inner.setAttribute('class', '__inner');
    outer.appendChild(inner);
    element.appendChild(outer);
}