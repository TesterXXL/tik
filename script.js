let img = document.querySelector('.div img');
let score = document.querySelector('.score');
let scoreN;

if(localStorage.getItem("score")) {
	scoreN = parseInt(localStorage.getItem("score"));
	score.innerHTML = scoreN;
} else {
	scoreN = 0;
}

img.onmousedown = function() { 
	scoreN += 1;
	score.innerHTML = scoreN;
	localStorage.setItem('score', scoreN);
	img.src = '2.png';
}
img.onmouseup = function() {
	img.src = '1.png';
}