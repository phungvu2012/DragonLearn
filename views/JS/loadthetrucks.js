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

// Phát nút âm thanh hướng dẫn
function play(){
	$('audio').attr('src', 'server/Image/Load the trucks/3.mp3').get(0).play()
}

