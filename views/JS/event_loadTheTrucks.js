/* Sự kiện kéo thả*/
// Sự kiện khi kéo vật
function handleDragStart(event) {
	if(document.getElementsByClassName('scene')[0].classList.toString().indexOf('disabled') > -1) return false;
	if(this.parentNode.classList.toString().indexOf('done') === -1) {
		this.style.opacity = '0.4';
		event.dataTransfer.effectAllowed = 'move';
		event.dataTransfer.setData('text/html', event.target.getAttribute('class'));
	}
	else {

		this.parentNode.classList.remove('done');
		event.dataTransfer.effectAllowed = 'move';
		event.dataTransfer.setData('text/html', event.target.getAttribute('class'));
		var indexElement = searchNumber(this.classList.toString());
		document.getElementsByClassName('cont')[0].appendChild(this);
		this.style.left =  (147 + 65 * indexElement).toFixed(1) + 'px';
		this.style.top = (323 - (20 + 24 * (numbersLesson.left[0][indexElement] - 1))) + 'px';
	}
	return true;
}
// Sự kiện khi kết thúc sự kiện kéo
function handleDragEnd(event) {
	if(document.getElementsByClassName('scene')[0].classList.toString().indexOf('disabled') > -1) return false;

	this.style.opacity = 1;
	var placeHolder = document.getElementsByClassName('placeholder');
	[].forEach.call(placeHolder, function(holder) {
		holder.classList.remove('highlighted');
	});
}
// Sự kiện khi trỏ vào vật
function handleDragOver(event) {
	if(event.preventDefault) {
		event.preventDefault();
	}
	event.dataTransfer.dropEffect = 'move';
	return false;
}
// Sự kiện khi tiếp xúc với đích lần đầu
function handleDragEnter(event) {
	this.classList.add('highlighted');
}

// Sự kiện khi di chuyển ra khỏi vật thể
function handleDragLeave(event) {
	this.classList.remove('highlighted');
	console.log('Leave element');
}
// Sự kiện thả
function handleDrop(event) {
	if(document.getElementsByClassName('scene')[0].classList.toString().indexOf('disabled') > -1) return false;
	if(this.classList.toString().indexOf('done') === -1 && this.classList.toString().indexOf('placeholder') > -1){
		if (event.stopPropagation) {
		    event.stopPropagation(); // stops the browser from redirecting.
		}
		var data = event.dataTransfer.getData('text/html'),
		  	elementSource = document.getElementsByClassName(data)[0];
		var index = this.classList[1].slice(-1),
			indexData = data.split(' ')[2].slice(-1);
		event.target.appendChild(elementSource);

		var brickInTheTruck = Number(document.getElementsByClassName('loaded_brick')[index].style.height.replace('px', '')),
			heightHolder = Number(this.style.height.replace('px', ''))
			brickSelect = Number(elementSource.style.height.replace('px', ''));
		elementSource.style.left = 0;
		elementSource.style.top = heightHolder - brickInTheTruck - brickSelect - 4 +'px';
		this.classList.add('done');
		console.log(this)
		// Người dùng có thể bấm để kiểm tra
		var buttonCheck = document.getElementsByClassName('button_place')[0];
		if(buttonCheck.classList.toString().indexOf('disabled') === -1) {
			buttonCheck.classList.add('finished');
			buttonCheck.addEventListener('click', checkResult);
			document.getElementsByClassName('button')[0].classList.remove('disabled');
		}
	``}
	return false;
}