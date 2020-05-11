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
// Main code
$(document).ready(function() {
	var objKhung = document.getElementById("khung");
	var objtail1 = document.getElementById("tail1");
	var objtail2 = document.getElementById("tail2");
	var objtail3 = document.getElementById("tail3");
	var objhead1 = document.getElementById("head1");
	var objhead2 = document.getElementById("head2");
	var objhead3 = document.getElementById("head3");

	var currentNumberOnTail = [5, 8, 4];
	var currentNumberOnHead = [2, 6, 5];


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
			objtail1.style.left = "505px";
			objtail1.style.top = "17px";
			if(currentNumberOnTail[0] + currentNumberOnHead[0] != 10) {
				$('#tail1').delay(500).animate(
					{
						left: "100px",
						top: "17px"
					}, 800
				);
			}
			else outBox(objtail1, objhead1);
		}
		else
		if(yPos >= yPosKhung + 132 && yPos <= yPosKhung + 262 && xPos >= xPosKhung + 490) {
			objtail1.style.left = "505px";
			objtail1.style.top = "197px";
			if(currentNumberOnTail[0] + currentNumberOnHead[1] != 10) {
				$('#tail1').delay(500).animate(
					{
						left: "100px",
						top: "17px"
					}, 800
				);
			}
			else outBox(objtail1, objhead2);
		}
		else
		if(yPos >= yPosKhung + 312 && yPos <= yPosKhung + 442 && xPos >= xPosKhung + 490) {
			objtail1.style.left = "505px";
			objtail1.style.top = "374px";
			if(currentNumberOnTail[0] + currentNumberOnHead[2] != 10) {
				$('#tail1').delay(500).animate(
					{
						left: "100px",
						top: "17px"
					}, 800
				);
			}
			else outBox(objtail1, objhead3);
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
			objtail2.style.left = "505px";
			objtail2.style.top = "17px";
			if(currentNumberOnTail[1] + currentNumberOnHead[0] != 10) {
				$('#tail2').delay(500).animate(
					{
						left: "100px",
						top: "197px"
					}, 800
				);
			}
			else outBox(objtail2, objhead1);
		}
		else
		if(yPos >= yPosKhung + 132 && yPos <= yPosKhung + 262 && xPos >= xPosKhung + 490) {
			objtail2.style.left = "505px";
			objtail2.style.top = "197px";
			if(currentNumberOnTail[1] + currentNumberOnHead[1] != 10) {
				$('#tail2').delay(500).animate(
					{
						left: "100px",
						top: "197px"
					}, 800
				);
			}
			else outBox(objtail2, objhead2);
		}
		else
		if(yPos >= yPosKhung + 312 && yPos <= yPosKhung + 442 && xPos >= xPosKhung + 490) {
			objtail2.style.left = "505px";
			objtail2.style.top = "374px";
			if(currentNumberOnTail[1] + currentNumberOnHead[2] != 10) {
				$('#tail2').delay(500).animate(
					{
						left: "100px",
						top: "197px"
					}, 800
				);
			}
			else outBox(objtail2, objhead3);
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
			objtail3.style.left = "505px";
			objtail3.style.top = "17px";
			if(currentNumberOnTail[2] + currentNumberOnHead[0] != 10) {
				$('#tail3').delay(500).animate(
					{
						left: "100px",
						top: "374px"
					}, 800
				);
			}
			else outBox(objtail3, objhead1);
		}
		else
		if(yPos >= yPosKhung + 132 && yPos <= yPosKhung + 262 && xPos >= xPosKhung + 490) {
			objtail3.style.left = "505px";
			objtail3.style.top = "197px";
			if(currentNumberOnTail[2] + currentNumberOnHead[1] != 10) {
				$('#tail3').delay(500).animate(
					{
						left: "100px",
						top: "374px"
					}, 800
				);
			}
			else outBox(objtail3, objhead2);
		}
		else
		if(yPos >= yPosKhung + 312 && yPos <= yPosKhung + 442 && xPos >= xPosKhung + 490) {
			objtail3.style.left = "505px";
			objtail3.style.top = "374px";
			if(currentNumberOnTail[2] + currentNumberOnHead[2] != 10) {
				$('#tail3').delay(500).animate(
					{
						left: "100px",
						top: "374px"
					}, 800
				);
			}
			else outBox(objtail3, objhead3);
		}
    }
	});
});
