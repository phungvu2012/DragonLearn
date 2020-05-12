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
		var text = document.createTextNode(numbers[i]);
		newSpan.appendChild(text);
		newLoadedBrick.appendChild(newCap);
		newLoadedBrick.appendChild(newSpan);
		brickHolder.appendChild(newLoadedBrick);
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
		console.log('create block');
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



function createLesson(numbersLesson) {
	var scene = document.getElementsByClassName('scene')[0];
	var truck = document.createElement('div');
	truck.setAttribute('class', 'truck under_start');
	var smokeGen = document.createElement('div');
	smokeGen.setAttribute('class', 'smoke_gen');
	var brickHolder = document.createElement('div');
	brickHolder.setAttribute('class', 'brick_holder');
	scene.appendChild(truck);
	truck.appendChild(smokeGen);
	truck.appendChild(brickHolder);
	for (let i = 0; i < 3; i++) {
		var wheel = document.createElement('div');
		wheel.setAttribute('class', 'wheel wheel_' + i);
		truck.appendChild(wheel);
	}

	var cont = document.getElementsByClassName('cont')[0];
	var buttonPlace = document.createElement('div');
	buttonPlace.setAttribute('class', 'button_place under_start finished');

	var button = document.createElement('div');
	button.setAttribute('class', 'button gradient disabled');
	var span = document.createElement('span'),
		text = document.createTextNode('Ready to go!')
	span.appendChild(text);
	button.appendChild(span);

	buttonPlace.appendChild(button);
	cont.appendChild(buttonPlace);
	// Tạo phần tử con
	createBricks(numbersLesson.right[partLesson - 1]);
	createPlaceHolder();
	createToLoadBricks(numbersLesson.left[partLesson - 1]);
}


function removeLesson(){
	var scene = document.getElementsByClassName('scene')[0];
	var cont = document.getElementsByClassName('cont')[0];
	var placeHolder = document.getElementsByClassName('placeholder');
	var truck = document.getElementsByClassName('truck')[0];
	for (var i = placeHolder.length - 1; i >= 0; i--) {
	
		scene.removeChild(placeHolder[i]);
	}
	scene.removeChild(truck);
}