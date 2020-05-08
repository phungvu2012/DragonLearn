// JavaScript Document
// Các class OOP

// Các function

// Main code
$(document).ready(function() {
	var objbox = document.getElementById("box");
	var xPosBox = objbox.offsetLeft;
	var yPosBox = objbox.offsetTop;
	var objtail1 = document.getElementById("tail1");
	var objtail2 = document.getElementById("tail2");
	var objtail3 = document.getElementById("tail3");
	
	var numberOnTail = [5, 8, 4];
	var numberOnHead = [2, 6, 5];
	
	
	$('.tail').draggable({
	containment: "parent", revert: true,
    drag: function() {
        var offset = $(this).offset();
        var xPos = offset.left;
        var yPos = offset.top;
        //$('#posX').text('x: ' + xPos);
        //$('#posY').text('y: ' + yPos);
		if(yPos >= yPosBox && yPos <= yPosBox + 130 && xPos >= xPosBox + 490) {
			$(this).draggable("option", "revert", false);
		}
		else 
		if(yPos >= yPosBox + 180 && yPos <= yPosBox + 310 && xPos >= xPosBox + 490) {
			$(this).draggable("option", "revert", false);
		}
		else 
		if(yPos >= yPosBox + 360 && yPos <= yPosBox + 490 && xPos >= xPosBox + 490) {
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
        //$('#posX').text('x: ' + xPos);
        //$('#posY').text('y: ' + yPos);
		if(yPos >= yPosBox && yPos <= yPosBox + 130 && xPos >= xPosBox + 490 
		&& numberOnTail[0] + numberOnHead[0] == 10) {
			objtail1.style.left = "505px";
			objtail1.style.top = "17px";
		}
		else 
		if(yPos >= yPosBox + 180 && yPos <= yPosBox + 310 && xPos >= xPosBox + 490
		&& numberOnTail[0] + numberOnHead[1] == 10) {
			objtail1.style.left = "505px";
			objtail1.style.top = "197px";
		}
		else 
		if(yPos >= yPosBox + 360 && yPos <= yPosBox + 490 && xPos >= xPosBox + 490
		&& numberOnTail[0] + numberOnHead[2] == 10) {
			objtail1.style.left = "505px";
			objtail1.style.top = "374px";
		}
    }
	});
	
	$('#tail2').draggable({
	stop: function() {
        var offset = $(this).offset();
        var xPos = offset.left;
        var yPos = offset.top;
        //$('#posX').text('x: ' + xPos);
        //$('#posY').text('y: ' + yPos);
		if(yPos >= yPosBox && yPos <= yPosBox + 130 && xPos >= xPosBox + 490 
		&& numberOnTail[1] + numberOnHead[0] == 10) {
			objtail2.style.left = "505px";
			objtail2.style.top = "17px";
		}
		else 
		if(yPos >= yPosBox + 180 && yPos <= yPosBox + 310 && xPos >= xPosBox + 490
		&& numberOnTail[1] + numberOnHead[1] == 10) {
			objtail2.style.left = "505px";
			objtail2.style.top = "197px";
		}
		else 
		if(yPos >= yPosBox + 360 && yPos <= yPosBox + 490 && xPos >= xPosBox + 490
		&& numberOnTail[1] + numberOnHead[2] == 10) {
			objtail2.style.left = "505px";
			objtail2.style.top = "374px";
		}
    }
	});
	
	$('#tail3').draggable({
	stop: function() {
        var offset = $(this).offset();
        var xPos = offset.left;
        var yPos = offset.top;
        //$('#posX').text('x: ' + xPos);
        //$('#posY').text('y: ' + yPos);
		if(yPos >= yPosBox && yPos <= yPosBox + 130 && xPos >= xPosBox + 490 
		&& numberOnTail[2] + numberOnHead[0] == 10) {
			objtail3.style.left = "505px";
			objtail3.style.top = "17px";
		}
		else 
		if(yPos >= yPosBox + 180 && yPos <= yPosBox + 310 && xPos >= xPosBox + 490
		&& numberOnTail[2] + numberOnHead[1] == 10) {
			objtail3.style.left = "505px";
			objtail3.style.top = "197px";
		}
		else 
		if(yPos >= yPosBox + 360 && yPos <= yPosBox + 490 && xPos >= xPosBox + 490
		&& numberOnTail[2] + numberOnHead[2] == 10) {
			objtail3.style.left = "505px";
			objtail3.style.top = "374px";
		}
    }
	});
});

