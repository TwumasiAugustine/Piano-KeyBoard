function removeTransition(event) {
	if (event.propertyName !== 'transform') {
		return;
	}
	event.target.classList.remove('playing');
}

function playSound(event) {
	var keyPressed = event.keyCode || event.currentTarget.getAttribute('data-key');

	const key = document.querySelector(`li[data-key="${keyPressed}"]`);
	const audio = document.querySelector(`audio[data-key="${keyPressed}"]`);
	if (!audio) {
		return;
	}

	key.classList.add('playing');
	audio.currentTime = 0;
	audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);