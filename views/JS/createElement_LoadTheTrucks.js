/* Đã xong */
//Khởi tạo các phần tử
var numbersLesson = 
	{ 
		left: 
		[
			[2, 1, 4, 3],
			[5, 3, 8, 4, 7],
			[5, 10, 6, 2, 9, 8]
		],
 		right: 
 		[
 			[6, 7, 8, 9, 10] ,
 			[6, 3, 7, 5, 10],
 			[8, 0, 2, 4, 10]
 		]
 	};
// Tạo nút xác nhận chơi
function createButonPlay() {
	var board = document.getElementById('board');
	var buttonPlay = document.createElement('div');
	buttonPlay.setAttribute('class', 'btn_play');

	var triangle = document.createElement('div');
	triangle.setAttribute('class', 'triangle');

	var span = document.createElement('span'),
		text = document.createTextNode('Start');

	span.appendChild(text);
	triangle.appendChild(span);
	buttonPlay.appendChild(triangle);
	board.appendChild(buttonPlay);
}

// Tạo khu vực ô tô để chơi 
function createScene() {
	var container = document.getElementsByClassName('cont')[0];

	var scene = document.createElement('div');
	scene.setAttribute('class', 'scene under_start');
	container.appendChild(scene);
	
	createTruck();	// Tạo ô tô chứa
	createBricks(numbersLesson.right[partLesson - 1]);  // Tạo hàng trên xe

	createPlaceHolder();	// Tạo vị trí để hàng
}
// Tạo nền ô tô, bánh xe, khói (chưa có gạch)
function createTruck() {
	var scene = document.getElementsByClassName('scene')[0];
	var truck = document.createElement('div');
	truck.setAttribute('class', 'truck');
	scene.appendChild(truck);

	var smokeGen = document.createElement('div');	
	smokeGen.setAttribute('class', 'smoke_gen');
	truck.appendChild(smokeGen);

	var brickHolder = document.createElement('div');
	brickHolder.setAttribute('class', 'brick_holder');
	truck.appendChild(brickHolder);

	for (let i = 0; i < 3; i++) {
		var wheel = document.createElement('div');
		wheel.setAttribute('class', 'wheel wheel_' + i);
		truck.appendChild(wheel);
	}
}
// Tạo hàng trên xe
function createBricks(numbers) {
	var brickHolder = document.getElementsByClassName('brick_holder')[0];
	for (let i = 0, length = numbers.length; i < length; i++) {
		var newLoadedBrick = document.createElement('div');
		newLoadedBrick.setAttribute('class','loaded_brick');
		newLoadedBrick.setAttribute('style','height:' + (23.6 * numbers[i]).toFixed(1) + 'px');

		var newCap = document.createElement('div');
		newCap.setAttribute('class','cap');
		var newSpan = document.createElement('span');
		var text;
		if(numbers[i] !== 0) text = document.createTextNode(numbers[i]);
		else text = document.createTextNode('');
		newSpan.appendChild(text);
		newLoadedBrick.appendChild(newCap);
		newLoadedBrick.appendChild(newSpan);
		brickHolder.appendChild(newLoadedBrick);
	}
}
// Tạo nút xác nhận
function buttonPlace() {
	var container = document.getElementsByClassName('cont')[0];

	var buttonPlace = document.createElement('div');
	buttonPlace.setAttribute('class', 'button_place under_start finished');
	container.appendChild(buttonPlace);

	var button = document.createElement('div');
	button.setAttribute('class', 'button gradient disabled');
	buttonPlace.appendChild(button);

	var span = document.createElement('span'),
		text = document.createTextNode('Ready to go!')
	span.appendChild(text);

	button.appendChild(span);
}
// Create placeholder element
function createPlaceHolder() {
	var scene = document.getElementsByClassName('scene')[0];
	for(let i = 0; i < 4; i++) {
		var newPlaceHolder = document.createElement('div');
		newPlaceHolder.setAttribute('style', 'left: 429px; height: 238px; top: 19px;');
		newPlaceHolder.style.left = 429 + 65 * i + 'px';
		newPlaceHolder.setAttribute('class', 'placeholder');
		newPlaceHolder.classList.add('element' + i);
		scene.appendChild(newPlaceHolder);
	}
	var placeHolder = document.getElementsByClassName('placeholder');
	for (let i = placeHolder.length - 1; i >= 0; i--) {
		var newHighlight = document.createElement('div');
		newHighlight.setAttribute('class', 'highlight');
		newHighlight.setAttribute('style', 'height:' + (238 - (20 + numbersLesson.right[partLesson - 1][i] * 24 - 24)) + 'px');
		newHighlight.classList.add('element' + i);

		var insideHightlight = document.createElement('i');
		insideHightlight.setAttribute('class', 'element' + i);
		newHighlight.appendChild(insideHightlight);
		placeHolder[i].appendChild(newHighlight);
	}
}
// Tạo hàng xếp vào
function createToLoadBricks(numbers) {
	var cont = document.getElementsByClassName('cont')[0];
	for (let i = 0, length = numbers.length; i < length; i++ ) {
		var newToLoadedBrick = document.createElement('div');
		newToLoadedBrick.setAttribute('class','to_load_brick under_start');
		newToLoadedBrick.classList.add('element' + i);
		// Giá trị đầu tiên là 20 vì cách lề thêm 4px để dễ nhìn hơn;
		
		newToLoadedBrick.setAttribute('style','height:' +  (20 + 24 * (numbers[i] - 1)).toFixed(1) + 'px; left: ' + (342 - 65 * i).toFixed(1) + 'px; top: ' + (323 - (20 + 24 * (numbers[i] - 1))) + 'px; touch-action: none;');
		newToLoadedBrick.setAttribute('draggable','true');
		var newCap = document.createElement('div');
		newCap.setAttribute('class','cap');
		var newSpan = document.createElement('span');
		var text = document.createTextNode(numbers[i]);
		newSpan.appendChild(text);
		newToLoadedBrick.appendChild(newCap);
		newToLoadedBrick.appendChild(newSpan);
		cont.appendChild(newToLoadedBrick);
	}
}	

// Tạo bài học
function createLesson(numbersLesson) {
	createButonPlay();	// Tạo nút bắt đầu
	createScene();	// Tạo khu vực ô tô chơi
	createToLoadBricks(numbersLesson.left[partLesson - 1]); 	// Tạo hàng chuyển vào xe
	buttonPlace();	// Tạo nút xác nhận
}

// Chuyển sang bài học tiếp
function nextLesson(){
	var cont = document.getElementsByClassName('cont')[0],
	 	scene = document.getElementsByClassName('scene')[0],
		button_place = document.getElementsByClassName('button_place')[0],
		board = document.getElementById('board'),
		buttonPlay = document.getElementsByClassName('btn_play')[0];
	cont.removeChild(scene);
	cont.removeChild(button_place);
	board.removeChild(buttonPlay);

	var toLoadBricks = document.getElementsByClassName('to_load_brick');
	for (var i = 0; i < toLoadBricks.length; i++) {
		cont.removeChild(toLoadBricks[i]);
	}
	document.getElementById('bead' + (totalLesson - partLesson)).setAttribute('style', 'right: ' + (4 + (partLesson-1) * 20) + 'px');
	partLesson++;
	createLesson(numbersLesson);
	gameLaucher();
}