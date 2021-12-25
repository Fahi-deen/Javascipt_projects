'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(`.check`).addEventListener(`click`, function () {
	const guess = Number(document.querySelector(`.guess`).value);
	//when there is no input
	if (!guess) {
		document.querySelector('.message').textContent = "No number!";
	}
	//when player guess is right
	else if (guess === secretNumber) {
		document.querySelector('.message').textContent = "You find the Number";
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector(`body`).style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}
	}
	//When Guess is Wrong
	else if (guess !== secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent =
				guess > secretNumber ? "Your Number is too High" : "Your Number is too Low";
			score--;
			document.querySelector(`.score`).textContent = score;
		}
		else {
			document.querySelector(`.message`).textContent = `You lost the game`;
			document.querySelector(`.score`).textContent = 0;
		}
	}


});

//Resetting the Game

document.querySelector(`.again`).addEventListener('click', function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector(`.score`).textContent = score;
	document.querySelector('.number').textContent = `?`;
	document.querySelector(`.message`).textContent = `Start guessing...`;
	document.querySelector(`.guess`).value = ``;
	document.querySelector(`body`).style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';


});
