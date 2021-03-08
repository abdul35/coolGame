const board = document.getElementById("board"),
	hero = document.getElementById("hero"),
	body = document.querySelector("body");
let t;
let i = 0;
let stoped = true;

function moveToLeftHero() {
	i++;
	hero.style.left = i + "rem";
}

function moveToUpHero() {
	i++;
	hero.style.left = -i + "rem";
}

function controlMovement() {
	if (stoped) {
		running();
	} else {
		clearInterval(t);
	}
}

// controlMovement();

function running() {
	t = setInterval(() => {
		moveToLeftHero();
	}, 20);
}

function stop() {
	if (stoped) {
		stoped = false;
		controlMovement();
	} else {
		stoped = true;
		controlMovement();
	}
	console.log(stoped);
}

function callFuncsAfterKeyUp(key) {
	switch (key) {
		case "ArrowLeft":
			moveToLeftHero();
			break;
		case ArrowUp:
			break;

		default:
			break;
	}
	console.log(key);
}

// ArrowLeft
// ArrowUp
// ArrowRight
// ArrowDown
body.addEventListener("keyup", e => callFuncsAfterKeyUp(e.key));
