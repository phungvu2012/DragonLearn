var lastLine = 0;
document.onkeypress = function(event) {
    const isNumber = /^[0-9]$/i.test(event.key);
    console.log(event);
    console.log("is number --> " + isNumber);
    if (isNumber) {
        var status = edit_last_inline_input_focus_element_and_check_answer(event.key);
        if (status) {
            find_next_input_disable_element_to_focus();
        }
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
    generate_left_lines_hidden();
    generate_left_example();
    find_next_input_disable_element_to_focus();
    edit_last_inline_input_focus_element_and_check_answer();
}

function find_next_input_disable_element_to_focus() {

    var next_element = document.getElementsByClassName("inline_input disabled")[0];
    if(next_element === undefined ) {
      var bead = document.getElementById('bead0');
      bead.setAttribute('style', 'right: 4px;');
      setTimeout(function() {
        window.location = 'congratulation';
      }, 1500)
    }
    else {
      var line = next_element.parentElement.parentElement;
      var allLines = document.getElementsByClassName("line");
      console.log(" line --> " + line);
      for (var i = 0; i < allLines.length; i++) {
          if (line === allLines[i]) {
              if (i != lastLine) {

                // line.style.display = "block";
                var count = 0;
                var interval = 10;
                var id = setInterval(function() {
                  line.style.opacity = count / 1000;
                  console.log("count --> "+count);
                  if((count += interval) >  1000) clearInterval(id);

                }, interval);
                  allLines[i].style.display = "block";

                  window.scroll(rect.x,rect.y);

                  lastLine = i;
              }
          }
      }
      next_element.classList.remove("disabled");
      next_element.classList.add("focused");
    }
}

function edit_last_inline_input_focus_element_and_check_answer(number) {
    // number = 2;
    var flag = false;
    var last_inline_input_focus_element = document.getElementsByClassName("inline_input focused")[0];
    // console.log(last_inline_input_focus_element);
    var blueCount = last_inline_input_focus_element.parentElement.parentElement.getElementsByClassName("cube_blue").length;
    var redCount = last_inline_input_focus_element.parentElement.parentElement.getElementsByClassName("cube_red").length;
    console.log("blue count --> " + blueCount + ", red count --> " + redCount);
    var arrayElement = last_inline_input_focus_element.parentElement.getElementsByClassName("inline_input");
    console.log(arrayElement);
    for (var i = 0; i < arrayElement.length; i++) {
        if (arrayElement[i] === last_inline_input_focus_element) {
            var spanElement = last_inline_input_focus_element.getElementsByTagName("span")[0];
            var count = i == 0 ? blueCount : redCount;
            if (number != count) {
                spanElement.classList.add("wrong");
            } else {
                last_inline_input_focus_element.classList.replace("focused", "blank");
                if (spanElement.classList.contains("wrong")) spanElement.classList.remove("wrong");
                flag = true;
            }
            spanElement.textContent = number;
        }
    }
    return flag;


}

function generate_left_lines_hidden() {
    var lines = document.getElementsByClassName("line");
    // var totalLines = 9;
    // var totalCubes = 10;
    for (var i = 0; i < lines.length; i++) {
        lines[i].style.display = "none";
        lines[i].style.opacity = '0';
        append_blue_and_red_cube(10, i + 1, 10 - i - 1, i + 1);
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
    var line = document.getElementsByClassName("line")[0];
    line.style.display = "block";
    var count = 0;
    var interval = 10;
    var id = setInterval(function() {
      line.style.opacity = count / 1000;
      console.log("count --> "+count);
      if((count += interval) >  1000) clearInterval(id);

    }, interval);
}

// Chọn ngôn ngữ
function selectLanguage() {
	var languageMenu = document.getElementsByClassName('uchiru-locale-dropdown__menu_pull-right')[0];
	if(languageMenu.style.display === 'none') {
		languageMenu.style.display = 'block';
	}
	else languageMenu.style.display	 = 'none';
}
