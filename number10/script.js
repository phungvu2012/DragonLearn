document.onkeypress = function(event) {
    const isNumber = /^[0-9]$/i.test(event.key);
    console.log(event);
    console.log("is number --> " + isNumber);
    if (isNumber) {

    }
}

//#region generate input
function generate_inline_input_disable() {
    var inline_input = document.createElement("div");
    inline_input.classList.add("inline_input");
    inline_input.classList.add("disabled");
    var __inner = document.createElement("div");
    __inner.classList.add("__inner");
    var __outer = document.createElement("div");
    __outer.classList.add("__outer");
    var span = document.createElement("span");
    // span.textContent = '&nbsp;';
    __outer.appendChild(__inner);
    __inner.appendChild(span);
    inline_input.appendChild(__outer);
    return inline_input;
}

function generate_result_inline_input_blank() {
    var inline_input = document.createElement("div");
    inline_input.classList.add("inline_input");
    inline_input.classList.add("blank");
    var __inner = document.createElement("div");
    __inner.classList.add("__inner");
    var __outer = document.createElement("div");
    __outer.classList.add("__outer");
    var span = document.createElement("span");
    var span2 = document.createElement("span");
    span.textContent = '1';
    span2.textContent = '0';
    __outer.appendChild(__inner);
    __inner.appendChild(span);
    __inner.appendChild(span2);
    inline_input.appendChild(__outer);
    return inline_input;
}
//#endregion generate input


//#region generate example

function append_example_class() {
    var lines = document.getElementsByClassName("line");
    for (var i = 0; i < lines.length; i++) {
        var example = document.createElement("div");
        example.setAttribute('class', 'example');
        lines[i].appendChild(example);
    }
}



function generate_all_example_children(lineElement) {

    var inline_input_disable = generate_inline_input_disable();
    var addOperator = document.createElement("span");
    addOperator.textContent = '+';
    var inline_input_disable2 = generate_inline_input_disable();
    var equalOperator = document.createElement("span");
    equalOperator.textContent = '=';
    var finalValue = generate_result_inline_input_blank();

    var example = lineElement.getElementsByClassName('example')[0];
    if (!example) {
        console.log("does not found example at class line" + line);
        return;
    }
    example.appendChild(inline_input_disable);
    example.appendChild(addOperator);
    example.appendChild(inline_input_disable2);
    example.appendChild(equalOperator);
    example.appendChild(finalValue);
}
//#endregion generate example


//#region append cubes
function append_blue_cube(leftPos, index, time) {
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

function append_red_cube(leftPos, index, time) {
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

function append_blue_and_red_cube(startPos, index, blueCubeNum, redCubeNum) {
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

function append_cube_wrapper_class() {
    var lines = document.getElementsByClassName("line");
    for (var i = 0; i < lines.length; i++) {
        var cubeWrapperElement = document.createElement("div");
        cubeWrapperElement.setAttribute('class', 'cubes_wrapper');
        lines[i].appendChild(cubeWrapperElement);
    }
}
//#endregion append cube


function append_first_line() {
    var leftPos = 10;
    append_blue_cube(10, 0, 10);
    // appendCubeWrapperClass();
    // appendBlueCube(10, 1, 9);
}

function start_game() {
    append_cube_wrapper_class();
    append_example_class();
    generate_left_lines();
    generate_left_example();
}

function generate_left_lines() {
    var totalLines = 9;
    // var totalCubes = 10;
    for (var i = 1; i <= totalLines; i++) {
        append_blue_and_red_cube(10, i, totalLines - i + 1, i);
    }
}

function generate_left_example() {
    var lines = document.getElementsByClassName("line");
    for (var i = 0; i < lines.length; i++) {
        generate_all_example_children(lines[i]);
    }
}

function hide_btn_play() {
    var element = document.getElementsByClassName("btn_play")[0];
    // console.log(element);
    element.style.display = "none";
}

function remove_blur_under_start() {
    var element = document.getElementsByClassName("first_line under_start")[0];
    // console.log(element);
    element.classList.remove("under_start");
}

function on_btn_play_clicked() {
    hide_btn_play();
    remove_blur_under_start();
    start_game();
}