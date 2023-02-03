function iterateOverTag(tag) {
	let links = document.getElementsByTagName(tag);
	let text = "";
	
	text += "<div class='container text-center'>";
	text +=  '<div class="row">';
    
	text += '<div class="col">';
	text += '<h3>For..in</h3>\n<ul class="list-group">';
	for (const element in links) {
		console.log(element);
		text += `<li class="list-group-item">${element}</li>`;
	}
	text += "\n</ul>\n"
	text += "</div>";
	
	text += '<div class="col">';
	text += '<h3>For..of</h3>\n<ul class="list-group">';
	for (const element of links) {
		console.log(element);
		text += `<li class="list-group-item">${element}</li>`;
	}
	text += "\n</ul>\n";
	text += "</div>";
	
	text += '<div class="col">';
	text += '<h3>For..of innerHTML</h3>\n<ul class="list-group">';
	for (const element of links) {
		console.log(element);
		text += `<li class="list-group-item">${element.innerHTML}</li>`;
	}
	text += "\n</ul>\n";
	text += "</div>";
	
	text += "</div></div>";

	return text;
}

function changeColor(button, color) {
	return () => {
		document.getElementById(button).style.backgroundColor = color;
	};
}

function placeStars(element) {
	// Place stars behind the element
	const numStars = 454;
	
	// Remove any stars that already exist
	for (let star of document.querySelectorAll(".star")) {
		element.removeChild(star);
	}

	for (let i = 0; i < numStars; i++) {
		let star = document.createElement("div");
		let rect = element.getBoundingClientRect();
		star.style.top = Math.floor(Math.random() * element.offsetHeight + rect.top) + "px";
		star.style.left = Math.floor(Math.random() * element.offsetWidth) + "px";
		star.style.position = "absolute";
		star.style.width = "1px";
		star.style.height = "1px";
		star.style.backgroundColor = "white";
		star.style.zIndex = "-1";
		star.className = "star";
		element.appendChild(star);
	}
}

function placeStars() {
	const numStars = 1000;
	
	// Remove any stars that already exist
	for (let star of document.querySelectorAll(".star")) {
		document.body.removeChild(star);
	}

	for (let i = 0; i < numStars; i++) {
		let star = document.createElement("div");
		// Scatter the stars across the entire window, ensuring they never go outside the viewport dimensions
		star.style.top = Math.floor(Math.random() * window.innerHeight - 1) + "px";
		star.style.left = Math.floor(Math.random() * window.innerWidth - 1) + "px";
		star.style.position = "absolute";
		star.style.width = "1px";
		star.style.height = "1px";
		if (Math.random() > 0.75) {
			star.style.width = "2px";
			star.style.height = "2px";
			star.style.borderRadius = "50%";
		}
		if (Math.random() > 0.95) {
			star.style.width = "3px";
			star.style.height = "3px";
			star.style.borderRadius = "50%";
		}
		star.style.backgroundColor = "white";
		star.style.zIndex = "-1";
		star.className = "star";
		document.body.appendChild(star);
	}
}

window.onload = () => {
	let showingCrawl = true;
	
	const jedi = {
		name: "Jedi",
		lightsaber: "Blue",
		element: document.querySelector("#jedi")
	}
	
	const sith = {
		name: "Sith",
		lightsaber: "Red",
		element: document.querySelector("#sith")
	}

	jedi.element.innerHTML="";
	sith.element.innerHTML="";


	document.querySelector("#buttons").style.display = "flex";
	jedi.element.style.width = "50%";
	sith.element.style.width = "50%";

	const jediColor = changeColor("jedi", jedi.lightsaber);
	const sithColor = changeColor("sith", sith.lightsaber);
	
	jediColor();
	sithColor();
	
	const resetButton = document.querySelector("#reset");
	const iterateButton = document.querySelector("#iterate");

	const crawl = document.querySelector("#crawl");
	const text = `<p>\nIt is a period of civil war.
		Rebel spaceships, striking
		from a hidden base, have won
		their first victory against
		the evil Galactic Empire.
		
		During the battle, Rebel
		spies managed to steal secret
		plans to the Empire's
		ultimate weapon, the DEATH
		STAR, an armored space
		station with enough power to
		destroy an entire planet.
		
		Pursued by the Empire's
		sinister agents, Princess
		Leia races home aboard her
		starship, custodian of the
		stolen plans that can save
		her people and restore
		freedom to the galaxy....\n<p>`

	resetButton.addEventListener("click", () => {
		showingCrawl = true;
		crawl.innerHTML = text;
		placeStars();
	});
	iterateButton.addEventListener("click", () => {
		showingCrawl = false;
		crawl.innerHTML = iterateOverTag("button");
		placeStars();
	});

	document.body.style.backgroundColor = "black";
	crawl.style.color = "#FFFF82";

	placeStars();

	// Scatter the stars whenever a window resize event completes (or pauses for 200ms)
	let timerID;
	window.addEventListener("resize", () => {
		clearTimeout(timerID);
		timerID = setTimeout(placeStars, 200);
	});

	[jedi, sith].forEach(obj => {
		obj.element.addEventListener("mouseover", () => {
			crawl.style.color = obj.lightsaber;
			//crawl.style.backgroundColor = "black";
		});
		obj.element.addEventListener("mouseout", () => {
			//crawl.style.backgroundColor = "black";
			crawl.style.color = "#FFFF82";
		});
		obj.element.addEventListener("click", placeStars);
	});

	// for (obj of [jedi, sith]) {
	// 	// Create a closure to preserve the current value of obj in the scope where the listeners are assigned
	// 	(obj => {
	// 		obj.element.addEventListener("mouseover", () => {
	// 			crawl.style.color = obj.lightsaber;
	// 			console.log("obj is " + obj.name + ", with lightsaber " + obj.lightsaber + " and element " + obj.element.id);
	// 		});
	// 		obj.element.addEventListener("mouseout", () => {
	// 			crawl.style.color = "black";
	// 		});
	// 	})(obj);
	// }
}
