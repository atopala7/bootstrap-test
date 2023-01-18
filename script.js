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
	
	document.getElementById("crawl").innerHTML = text;
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
	iterateOverTag("div");
}

window.onload = () => {
	document.getElementById("jedi").innerHTML="Jedi";
	document.getElementById("sith").innerHTML="Sith";
	
	const resetButton = document.getElementById("reset");
	const crawl = document.getElementById("crawl");
	const text = `It is a period of civil war.
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
		freedom to the galaxy....`
}
