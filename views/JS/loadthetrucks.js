var partLesson = 1; //Bài học hiện tại
var totalLesson = 3;

// Khởi động bài học khi nhấn start
function startLesson() {
	var buttonPlay = document.getElementsByClassName('btn_play');
	setTimeout(function() {
	buttonPlay[0].style.display = 'none';
	} , 1000)

	buttonPlay[0].style.opacity = '1';
	buttonPlay[0].style.width = '300px';
 	buttonPlay[0].style.height = '300px';
 	buttonPlay[0].style.margin = '-190px 0 0 -190px';
 	var count = 0;
 	var id = setInterval(function () {
 		count++;
 		buttonPlay[0].style.opacity = 1 - count *0.1 +'';
 		if(count === 10) clearInterval(id);
 	})

	document.getElementsByClassName('scene')[0].classList.remove('under_start');
  	var triangle = document.getElementsByClassName('triangle');
	triangle[0].style.background = '200%';
	document.getElementsByClassName('scene')[0].style.opacity = '1';
	document.getElementsByClassName('button_place')[0].style.opacity = '1';
	document.getElementsByClassName('button_place')[0].classList.add('finished');
	var bricks = document.getElementsByClassName('to_load_brick');
	for (var i = bricks.length - 1; i >= 0; i--) {
		bricks[i].classList.add('finished', 'openhand');
		bricks[i].classList.remove('under_start');
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

function createBead() {
	var innerProgress = document.getElementsByClassName('inner_progress')[0];
	for (var i = 0; i < totalLesson; i++) {
		var bead = document.createElement('i');
		bead.setAttribute('class', 'az_ball_' + i);
		bead.setAttribute('id', 'bead' + i);
		bead.setAttribute('style', 'left: ' + (4 + 24 * i) + 'px');
		innerProgress.appendChild(bead);
	}
}


function checkResult(event) {
	if(document.getElementsByClassName('scene')[0].classList.toString().indexOf('disabled') > -1) return false;

	var placeholder = document.getElementsByClassName('placeholder');
	var doneLesson = true;
	for(let i = placeholder.length - 1; i >= 0; i--) {
		if(placeholder[i].classList.toString().indexOf('done') > - 1) {
			var elementNumberAdd = Number(placeholder[i].childNodes[1].childNodes[1].innerText);
			var elementNumberSpace = 10 - numbersLesson.right[partLesson - 1][i];
			// console.log()
			if(elementNumberAdd === elementNumberSpace){
				// console.log('pass');
			}
			else {
				doneLesson = false;
				var elementAdd = placeholder[i].childNodes[1];
				var indexElement = searchNumber(elementAdd.classList.toString());
				elementAdd.parentNode.classList.remove('done');
				document.getElementsByClassName('cont')[0].appendChild(elementAdd);
				elementAdd.style.left =  (342 - 65 * indexElement).toFixed(1) + 'px';
				elementAdd.style.top = (323 - (20 + 24 * (numbersLesson.left[partLesson - 1][indexElement] - 1))) + 'px';
			}
		}
		else doneLesson = false;
	}
	// Khi hoàn thành bài học
	if(doneLesson) {
		document.getElementsByClassName('scene')[0].classList.add('disabled');
		event.target.classList.add('disabled');
		var scene = document.getElementsByClassName('scene')[0];

		var i = 0;
		var id = setInterval(function() {
				++i;
				scene.style.left = (i * 15) + 'px';
				if(i === 50) clearInterval(id);
			} , 100)
		if(partLesson === totalLesson) setTimeout(function() {
			window.location = 'congratulation';
		}, 4000)
		else setTimeout(nextLesson, 100 * 50);
	}
	else {
		var brickHolder = document.getElementsByClassName('brick_holder')[0];
		brickHolder.setAttribute('style', 'box-shadow: 0px 0px 20px rgb(255, 0, 0, 1);')
		var i = 0;
		var id = setInterval(function() {
				++i;
				brickHolder.setAttribute('style', 'box-shadow: 0px 0px 10px rgb(255, 0, 0, '+ 1 - 0.05*i + ')');
				if(i === 20) clearInterval(id);
			} , 300)
	}
}

