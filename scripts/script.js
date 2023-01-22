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

function replaceInnerHTML(element, text) {
	element.innerHTML = text;
}

function resetCrawl() {
	const resetButton = document.getElementById("reset");
	const crawl = document.getElementById("crawl");
	const text = `<p>It is a period of civil war.
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
		freedom to the galaxy....</p>`
		
	crawl.innerHTML = text;
}

function iterateOverLinks() {
	iterateOverTag("a");
}

function jedi() {
	const name = prompt("What is the Jedi's name?");
	
	let jediText = document.getElementById("jedi");
	
	jediText.innerHTML = name;
}

function sith() {
	const name = prompt("What is the Sith's name?");
	
	let sithText = document.getElementById("sith");
	
	sithText.innerHTML = name;
}

function changeColor(button, color) {
	return () => {
		document.getElementById(button).style.backgroundColor = color;
	};
}

window.onload = () => {
	document.getElementById("jedi").innerHTML="Jedi";
	document.getElementById("sith").innerHTML="Sith";
	
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
		crawl.innerHTML = text;
	});
	iterateButton.addEventListener("click", () => {
		crawl.innerHTML = iterateOverTag("a");
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

	[jedi, sith].forEach(obj => {
		obj.element.addEventListener("mouseover", () => {
			crawl.style.color = obj.lightsaber;
			console.log("obj is " + obj.name + ", with lightsaber " + obj.lightsaber + " and element " + obj.element.id);
		});
		obj.element.addEventListener("mouseout", () => {
			crawl.style.color = "black";
		});
	});
}
