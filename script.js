//your JS code here. If required.
const contianer = document.querySelector(".container");

for(let i = 1; i <= 800; i++) {
	let square = document.createElement("section");
	square.classList.add("square");
	
	square.addEventListener("mouseenter", ()=>{
		setColor(square);
	});

	square.addEventListener("mouseleave", () => {
    resetColor(square);
	});
	
	contianer.appendChild(square);
}

function generateRandomColor() {
	return `rgb(${Math.floor(Math.random()*256)},
				${Math.floor(Math.random()*256)},
				${Math.floor(Math.random()*256)})`;
}

function setColor(square) {
	square.style.backgroundColor = generateRandomColor();
}

function resetColor(square) {
	setTimeout(()=>{
	square.style.backgroundColor = "rgb(29, 29, 29)"
}, 1000);
}

	