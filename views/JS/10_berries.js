// JavaScript Document
// Các class OOP

// Các function
function outBox(objtail, objhead) {
	objhead.style.left = "675px";
	objtail.style.width = "170px";
	objhead.style.width = "215px";
	for (let i=1; i<460; i++) {
    	setTimeout( function timer(){
			objtail.style.left = parseInt(objtail.style.left) + 1 + "px";
			if(parseInt(objtail.style.left) >= 791 && parseInt(objtail.style.width) >= 0)
				objtail.style.width = parseInt(objtail.style.width) - 1 + "px";

			objhead.style.left = parseInt(objhead.style.left) + 1 + "px";
			if(parseInt(objhead.style.left) >= 746 && parseInt(objhead.style.width) >= 0)
				objhead.style.width = parseInt(objhead.style.width) - 1 + "px";
    	}, i*5 );
	}
}

function complete(arrayT, arrayH) {
	var kq = true;
	for (var i = 0; i < arrayT.length; i++) {
		if(arrayT[i] != -1) {
			kq = false;
			break;
		}
	}
	return kq;
}

function loadStage(stage, currNOT, currNOH, arrT, arrH, objtail, objhead) {
	currNOT[0] = arrT[3*stage - 6];
	currNOT[1] = arrT[3*stage - 5];
	currNOT[2] = arrT[3*stage - 4];
	currNOH[0] = arrH[3*stage - 6];
	currNOH[1] = arrH[3*stage - 5];
	currNOH[2] = arrH[3*stage - 4];
	objtail[0].style.backgroundImage = "url('/server/Image/Load%20trucks%20with%2010%20berries/duoi_xe" + currNOT[0] + ".png')";
	objtail[0].style.left = "100px";
	objtail[0].style.top = "17px";
	objtail[0].style.width = "170px";
	objtail[1].style.backgroundImage = "url('/server/Image/Load%20trucks%20with%2010%20berries/duoi_xe" + currNOT[1] + ".png')";
	objtail[1].style.left = "100px";
	objtail[1].style.top = "197px";
	objtail[1].style.width = "170px";
	objtail[2].style.backgroundImage = "url('/server/Image/Load%20trucks%20with%2010%20berries/duoi_xe" + currNOT[2] + ".png')";
	objtail[2].style.left = "100px";
	objtail[2].style.top = "374px";
	objtail[2].style.width = "170px";
	objhead[0].style.backgroundImage = "url('/server/Image/Load%20trucks%20with%2010%20berries/dau_xe" + currNOH[0] + ".png')";
	objhead[0].style.left = "675px";
	objhead[0].style.top = "65px";
	objhead[0].style.width = "215px";
	objhead[1].style.backgroundImage = "url('/server/Image/Load%20trucks%20with%2010%20berries/dau_xe" + currNOH[1] + ".png')";
	objhead[1].style.left = "675px";
	objhead[1].style.top = "245px";
	objhead[1].style.width = "215px";
	objhead[2].style.backgroundImage = "url('/server/Image/Load%20trucks%20with%2010%20berries/dau_xe" + currNOH[2] + ".png')";
	objhead[2].style.left = "675px";
	objhead[2].style.top = "422px";
	objhead[2].style.width = "215px";
}
// Main code
$(document).ready(function() {
	//Các object trong bài (Chưa tối ưu)
	var objKhung = document.getElementById("khung");
	var objtail = document.getElementsByClassName("tail");
	var objhead = document.getElementsByClassName("head");
	// Các biến thành phần của màn chơi
	var stage = 1;
	var currentNumberOnTail = [5, 8, 4];
	var currentNumberOnHead = [2, 6, 5];
	var arrayTail = [1, 6, 7, 5, 9, 3, 7, 5, 6];
	var arrayHead = [3, 9, 4, 7, 1, 5, 4, 3, 5];


	$('.tail').draggable({
	containment: "parent", revert: true,
    drag: function() {
        var offset = $(this).offset();
        var xPos = offset.left;
        var yPos = offset.top;
				var offsetK = $(objKhung).offset();
				var xPosKhung = offsetK.left;
				var yPosKhung = offsetK.top;
        //$('#posX').text('x: ' + xPos);
        //$('#posY').text('y: ' + yPos);
		if(yPos >= yPosKhung && yPos <= yPosKhung + 82 && xPos >= xPosKhung + 490) {
			$(this).draggable("option", "revert", false);
		}
		else
		if(yPos >= yPosKhung + 132 && yPos <= yPosKhung + 262 && xPos >= xPosKhung + 490) {
			$(this).draggable("option", "revert", false);
		}
		else
		if(yPos >= yPosKhung + 312 && yPos <= yPosKhung + 442 && xPos >= xPosKhung + 490) {
			$(this).draggable("option", "revert", false);
		}
		else $(this).draggable("option", "revert", true);
    }
	});

	$('#tail1').draggable({
	stop: function() {
        var offset = $(this).offset();
        var xPos = offset.left;
        var yPos = offset.top;
				var offsetK = $(objKhung).offset();
				var xPosKhung = offsetK.left;
				var yPosKhung = offsetK.top;
        //$('#posX').text('x: ' + xPos);
        //$('#posY').text('y: ' + yPos);
		if(yPos >= yPosKhung && yPos <= yPosKhung + 82 && xPos >= xPosKhung + 490) {
			objtail[0].style.left = "505px";
			objtail[0].style.top = "17px";
			if(currentNumberOnTail[0] + currentNumberOnHead[0] != 10) {
				$('#tail1').delay(500).animate(
					{
						left: "100px",
						top: "17px"
					}, 800
				);
			}
			else {
				currentNumberOnTail[0] = -1;
				currentNumberOnHead[0] = -1;
				outBox(objtail[0], objhead[0]);
				if(complete(currentNumberOnTail, currentNumberOnHead)) {
					setTimeout(function() {
						stage++;
						loadStage(stage, currentNumberOnTail, currentNumberOnHead, arrayTail, arrayHead, objtail, objhead);
					}, 3000);
				}
			}
		}
		else
		if(yPos >= yPosKhung + 132 && yPos <= yPosKhung + 262 && xPos >= xPosKhung + 490) {
			objtail[0].style.left = "505px";
			objtail[0].style.top = "197px";
			if(currentNumberOnTail[0] + currentNumberOnHead[1] != 10) {
				$('#tail1').delay(500).animate(
					{
						left: "100px",
						top: "17px"
					}, 800
				);
			}
			else {
				currentNumberOnTail[0] = -1;
				currentNumberOnHead[1] = -1;
				outBox(objtail[0], objhead[1]);
				if(complete(currentNumberOnTail, currentNumberOnHead)) {
					setTimeout(function() {
						stage++;
						loadStage(stage, currentNumberOnTail, currentNumberOnHead, arrayTail, arrayHead, objtail, objhead);
					}, 3000);
				}
			}
		}
		else
		if(yPos >= yPosKhung + 312 && yPos <= yPosKhung + 442 && xPos >= xPosKhung + 490) {
			objtail[0].style.left = "505px";
			objtail[0].style.top = "374px";
			if(currentNumberOnTail[0] + currentNumberOnHead[2] != 10) {
				$('#tail1').delay(500).animate(
					{
						left: "100px",
						top: "17px"
					}, 800
				);
			}
			else {
				currentNumberOnTail[0] = -1;
				currentNumberOnHead[2] = -1;
				outBox(objtail[0], objhead[2]);
				if(complete(currentNumberOnTail, currentNumberOnHead)) {
					setTimeout(function() {
						stage++;
						loadStage(stage, currentNumberOnTail, currentNumberOnHead, arrayTail, arrayHead, objtail, objhead);
					}, 3000);
				}
			}
		}
    }
	});

	$('#tail2').draggable({
	stop: function() {
        var offset = $(this).offset();
        var xPos = offset.left;
        var yPos = offset.top;
				var offsetK = $(objKhung).offset();
				var xPosKhung = offsetK.left;
				var yPosKhung = offsetK.top;
        //$('#posX').text('x: ' + xPos);
        //$('#posY').text('y: ' + yPos);
		if(yPos >= yPosKhung && yPos <= yPosKhung + 82 && xPos >= xPosKhung + 490) {
			objtail[1].style.left = "505px";
			objtail[1].style.top = "17px";
			if(currentNumberOnTail[1] + currentNumberOnHead[0] != 10) {
				$('#tail2').delay(500).animate(
					{
						left: "100px",
						top: "197px"
					}, 800
				);
			}
			else {
				currentNumberOnTail[1] = -1;
				currentNumberOnHead[0] = -1;
				outBox(objtail[1], objhead[0]);
				if(complete(currentNumberOnTail, currentNumberOnHead)) {
					setTimeout(function() {
						stage++;
						loadStage(stage, currentNumberOnTail, currentNumberOnHead, arrayTail, arrayHead, objtail, objhead);
					}, 3000);
				}
			}
		}
		else
		if(yPos >= yPosKhung + 132 && yPos <= yPosKhung + 262 && xPos >= xPosKhung + 490) {
			objtail[1].style.left = "505px";
			objtail[1].style.top = "197px";
			if(currentNumberOnTail[1] + currentNumberOnHead[1] != 10) {
				$('#tail2').delay(500).animate(
					{
						left: "100px",
						top: "197px"
					}, 800
				);
			}
			else {
				currentNumberOnTail[1] = -1;
				currentNumberOnHead[1] = -1;
				outBox(objtail[1], objhead[1]);
				if(complete(currentNumberOnTail, currentNumberOnHead)) {
					setTimeout(function() {
						stage++;
						loadStage(stage, currentNumberOnTail, currentNumberOnHead, arrayTail, arrayHead, objtail, objhead);
					}, 3000);
				}
			}
		}
		else
		if(yPos >= yPosKhung + 312 && yPos <= yPosKhung + 442 && xPos >= xPosKhung + 490) {
			objtail[1].style.left = "505px";
			objtail[1].style.top = "374px";
			if(currentNumberOnTail[1] + currentNumberOnHead[2] != 10) {
				$('#tail2').delay(500).animate(
					{
						left: "100px",
						top: "197px"
					}, 800
				);
			}
			else {
				currentNumberOnTail[1] = -1;
				currentNumberOnHead[2] = -1;
				outBox(objtail[1], objhead[2]);
				if(complete(currentNumberOnTail, currentNumberOnHead)) {
					setTimeout(function() {
						stage++;
						loadStage(stage, currentNumberOnTail, currentNumberOnHead, arrayTail, arrayHead, objtail, objhead);
					}, 3000);
				}
			}
		}
    }
	});

	$('#tail3').draggable({
	stop: function() {
        var offset = $(this).offset();
        var xPos = offset.left;
        var yPos = offset.top;
				var offsetK = $(objKhung).offset();
				var xPosKhung = offsetK.left;
				var yPosKhung = offsetK.top;
        //$('#posX').text('x: ' + xPos);
        //$('#posY').text('y: ' + yPos);
		if(yPos >= yPosKhung && yPos <= yPosKhung + 82 && xPos >= xPosKhung + 490) {
			objtail[2].style.left = "505px";
			objtail[2].style.top = "17px";
			if(currentNumberOnTail[2] + currentNumberOnHead[0] != 10) {
				$('#tail3').delay(500).animate(
					{
						left: "100px",
						top: "374px"
					}, 800
				);
			}
			else {
				currentNumberOnTail[2] = -1;
				currentNumberOnHead[0] = -1;
				outBox(objtail[2], objhead[0]);
				if(complete(currentNumberOnTail, currentNumberOnHead)) {
					setTimeout(function() {
						stage++;
						loadStage(stage, currentNumberOnTail, currentNumberOnHead, arrayTail, arrayHead, objtail, objhead);
					}, 3000);
				}
			}
		}
		else
		if(yPos >= yPosKhung + 132 && yPos <= yPosKhung + 262 && xPos >= xPosKhung + 490) {
			objtail[2].style.left = "505px";
			objtail[2].style.top = "197px";
			if(currentNumberOnTail[2] + currentNumberOnHead[1] != 10) {
				$('#tail3').delay(500).animate(
					{
						left: "100px",
						top: "374px"
					}, 800
				);
			}
			else {
				currentNumberOnTail[2] = -1;
				currentNumberOnHead[1] = -1;
				outBox(objtail[2], objhead[1]);
				if(complete(currentNumberOnTail, currentNumberOnHead)) {
					setTimeout(function() {
						stage++;
						loadStage(stage, currentNumberOnTail, currentNumberOnHead, arrayTail, arrayHead, objtail, objhead);
					}, 3000);
				}
			}
		}
		else
		if(yPos >= yPosKhung + 312 && yPos <= yPosKhung + 442 && xPos >= xPosKhung + 490) {
			objtail[2].style.left = "505px";
			objtail[2].style.top = "374px";
			if(currentNumberOnTail[2] + currentNumberOnHead[2] != 10) {
				$('#tail3').delay(500).animate(
					{
						left: "100px",
						top: "374px"
					}, 800
				);
			}
			else {
				currentNumberOnTail[2] = -1;
				currentNumberOnHead[2] = -1;
				outBox(objtail[2], objhead[2]);
				if(complete(currentNumberOnTail, currentNumberOnHead)) {
					setTimeout(function() {
						stage++;
						loadStage(stage, currentNumberOnTail, currentNumberOnHead, arrayTail, arrayHead, objtail, objhead);
					}, 3000);
				}
			}
		}
    }
	});
});
