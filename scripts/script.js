function iterateOverTag(tag) {
	let links = document.getElementsByTagName(tag);
	let text = "";
	
	text += "<h3>For..in</h3>\n<ul>";
	for (const element in links) {
		console.log(element);
		text += `<li>${element}</li>`;
	}
	text += "\n</ul>\n"
	
	text += "<h3>For..of</h3>\n<ul>";
	for (const element of links) {
		console.log(element);
		text += `<li>${element}</li>`;
	}
	text += "\n</ul>\n"
	
	text += "<h3>For..of innerHTML</h3>\n<ul>";
	for (const element of links) {
		console.log(element);
		text += `<li>${element.innerHTML}</li>`;
	}
	text += "\n</ul>\n"
	
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
		star.className = "star";
		element.appendChild(star);
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

	jedi.element.innerHTML="Jedi";
	sith.element.innerHTML="Sith";
	
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
		placeStars(crawl);
	});
	iterateButton.addEventListener("click", () => {
		showingCrawl = false;
		crawl.innerHTML = iterateOverTag("a");
	});

	placeStars(crawl);

	[jedi, sith].forEach(obj => {
		obj.element.addEventListener("mouseover", () => {
			crawl.style.color = obj.lightsaber;
			crawl.style.backgroundColor = "black";
		});
		obj.element.addEventListener("mouseout", () => {
			crawl.style.backgroundColor = "black";
			crawl.style.color = "#FFFF82";
		});
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

	// A listener to repopulate the stars whenever the window is resized
	// Can be CPU-intensive without a delay function
	// window.addEventListener("resize", () => {
	// 	if (showingCrawl) {
	// 		placeStars(crawl);
	// 	}
	// });
}
