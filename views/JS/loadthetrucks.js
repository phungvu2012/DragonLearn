// Khởi động bài học khi nhấn start
function startLesson() {
	var buttonPlay = document.getElementsByClassName('btn_play');
	setTimeout(function() {
	buttonPlay[0].style.display = 'none';
	} , 1000)
	buttonPlay[0].style.opacity = '0';
	buttonPlay[0].style.width = '300px';
 	buttonPlay[0].style.height = '300px';
 	buttonPlay[0].style.margin = '-190px 0 0 -190px';

  	var triangle = document.getElementsByClassName('triangle');
	triangle[0].style.background = '200%';
	document.getElementsByClassName('scene')[0].style.opacity = '1';
	document.getElementsByClassName('scene')[0].classList.add('finished');;
	document.getElementsByClassName('button_place')[0].style.opacity = '1';
	document.getElementsByClassName('button_place')[0].classList.add('finished');
	var bricks = document.getElementsByClassName('to_load_brick');
	for (var i = bricks.length - 1; i >= 0; i--) {
		bricks[i].classList.add('finished', 'openhand');
		bricks[i].style.opacity = '1';
	}
}



/* Đã xong */
//Khởi tạo các phần tử
var data = 
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

/* Tiện ích */	
// Chọn ngôn ngữ
function selectLanguage() {
	var languageMenu = document.getElementsByClassName('uchiru-locale-dropdown__menu_pull-right')[0];
	if(languageMenu.style.display === 'none') {
		languageMenu.style.display = 'block';
	}
	else languageMenu.style.display	 = 'none';
}
// Phát nút âm thanh hướng dẫn
function play(){
	$('audio').attr('src', 'server/Image/Load the trucks/3.mp3').get(0).play()
}

function searchNumber(str) {
	var index = str.toString().search('element');
	if(index === -1) return -1;
	return str[index+7];
}