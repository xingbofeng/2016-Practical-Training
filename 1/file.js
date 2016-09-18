var movement;
function move () {
	var M = document.getElementById('X');
	M.style.position = "absolute";
	var xpos = parseInt(M.style.left);
	var ypos = parseInt(M.style.top);
	if(xpos==200&&ypos==200){
		return ture;
	}
	if(xpos<200){
		xpos++;
	}
	if(xpos>200){
		xpos--;
	}
	if(ypos<200){
		ypos++;
	}
	if(ypos>200){
		ypos--;
	}
	M.style.left = xpos+"px";
	M.style.top = ypos+"px";
	movement = setTimeout("move()",10);
}
window.onload = move;