function startLesson() {
	var buttonPlay = document.getElementsByClassName('btn_play');
	setTimeout(function() {
	buttonPlay[0].style.display = 'none';
} , 1000)
buttonPlay[0].style.opacity = '0';
buttonPlay[0].style.width = '280px';
buttonPlay[0].style.height = '280px';
var triangle = document.getElementsByClassName('triangle');
triangle[0].style.background = '120%';
}

function play(){
	$('audio').attr('src', 'server/Image/Load the trucks/3.mp3').get(0).play()
}