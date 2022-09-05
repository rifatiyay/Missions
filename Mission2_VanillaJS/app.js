
// SPIN ELEMENT
var looper;
var degrees = 0;
function rotateAnimation(el,speed){
	var elem = document.getElementById(el);
	elem.style.transform = "rotate("+degrees+"deg)";
	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
}

// Move OBJ
var i;
var xPos = 0;

function move(el, speed) {
	var astronot = document.getElementById(el);

	astronot.style.transform = `translate3d(${xPos}px, 0, 0)`;

	i = setTimeout('move(\''+el+'\','+speed+')',speed);

	xPos += 1;
	if (Math.abs(xPos) >= 800) {
		xPos = -500;
	}

	requestAnimationFrame(move);
}

// MOVE AND SPIN
var j;
var xPos = 0;
var degree = 0;

function movespin(el, speed) {
	var astronot = document.getElementById(el);

	astronot.style.transform = `translate3d(${xPos}px, 0, 0) rotate(${degree}deg)`;
	
	i = setTimeout('movespin(\''+el+'\','+speed+')',speed);

	xPos += 1;
	degree++;
	if(degree > 359){
		degree = 1;
	}
	if (Math.abs(xPos) >= 1200) {
		xPos = -500;
	}

	requestAnimationFrame(movespin);
}
