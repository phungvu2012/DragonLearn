/* Đã xong */
//Khởi tạo các phần tử
var numbersLesson = 
	{ 
		left: 
		[
			[2, 1, 4, 3]
		],
 		right: 
 		[
 			[6, 7, 8, 9, 10] 
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
	for (let i = 0, length = numbers.length; i < length; i++) {
		var newToLoadedBrick = document.createElement('div');
		newToLoadedBrick.setAttribute('class','to_load_brick under_start');
		newToLoadedBrick.classList.add('element' + i);
		// Giá trị đầu tiên là 20 vì cách lề thêm 4px để dễ nhìn hơn;
		newToLoadedBrick.setAttribute('style','height:' +  (20 + 24 * (numbers[i] - 1)).toFixed(1) + 'px; left: ' + (147 + 65 * i).toFixed(1) + 'px; top: ' + (323 - (20 + 24 * (numbers[i] - 1))) + 'px; touch-action: none;');
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
