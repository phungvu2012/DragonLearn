//Khởi tạo các phần tử
var data = { left: [2, 1, 4, 3], right: [6, 7, 8, 9, 10] };
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

function createToLoadBricks(numbers) {
	var cont = document.getElementsByClassName('cont')[0];
	for (let i = 0, length = numbers.length; i < length; i++) {
		var newToLoadedBrick = document.createElement('div');
		newToLoadedBrick.setAttribute('class','to_load_brick under_start');
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