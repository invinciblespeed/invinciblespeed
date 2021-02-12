/*
	Primary Site Portals: 
	<a href="https://invinciblespeed.github.io/portals/homes">[ HOME PAGES ]</a> ♦ 
	<a href="https://invinciblespeed.github.io/contact">[ CONTACT METHODS ]</a> ♦ 
	<a href="https://invinciblespeed.github.io/portals/pigs">[ PIGS ]</a>
	<br>
	Secondary Site Portals: 
	<a href="https://invinciblespeed.github.io/download">[ DOWNLOAD ]</a> ♦ 
	<a href="https://invinciblespeed.github.io/walkthrough_10">[ WALKTHROUGHS ]</a> ♦ 
	<a href="https://invinciblespeed.github.io/library/usagi">[ LIBRARY ]</a>
	<br>
	Tertiary Site Portals: 
	<a href="https://invinciblespeed.github.io/faq">[ FAQ ]</a> ♦ 
	<a href="https://invinciblespeed.github.io/portals/features">[ FEATURED ]</a> ♦ 
	<a href="https://invinciblespeed.github.io/countdown">[ - end timer - ]</a>
*/

const navPane = document.getElementById("navPane");
const a = document.createElement("a");
const br = document.createElement("br");
const span = document.createElement("span");
const diamond = document.createElement("span");
diamond.textContent = " " + String.fromCharCode(9830) + " ";

span.textContent = "Primary Site Portals: ";
a.textContent = "[ HOME PAGES ]";
a.href = "https://invinciblespeed.github.io/portals/homes";
navPane.append(span.cloneNode(true));
navPane.append(a.cloneNode(true));
navPane.append(diamond.cloneNode(true));

a.textContent = "[ CONTACT METHODS ]";
a.href = "https://invinciblespeed.github.io/contact";
navPane.append(a.cloneNode(true));
navPane.append(diamond.cloneNode(true));

a.textContent = "[ PIGS ]";
a.href = "https://invinciblespeed.github.io/portals/pigs";
navPane.append(a.cloneNode(true));

navPane.append(br.cloneNode());

span.textContent = "Secondary Site Portals: ";
a.textContent = "[ DOWNLOAD ]";
a.href = "https://invinciblespeed.github.io/download";
navPane.append(span.cloneNode(true));
navPane.append(a.cloneNode(true));
navPane.append(diamond.cloneNode(true));

a.textContent = "[ WALKTHROUGHS ]";
a.href = "https://invinciblespeed.github.io/portals/walkthroughs";
navPane.append(a.cloneNode(true));
navPane.append(diamond.cloneNode(true));

a.textContent = "[ LIBRARY ]";
a.href = "https://invinciblespeed.github.io/library/usagi";
navPane.append(a.cloneNode(true));

navPane.append(br.cloneNode());

span.textContent = "Tertiary Site Portals: ";
a.textContent = "[ FAQ ]";
a.href = "https://invinciblespeed.github.io/faq";
navPane.append(span.cloneNode(true));
navPane.append(a.cloneNode(true));
navPane.append(diamond.cloneNode(true));

a.textContent = "[ FEATURED ]";
a.href = "https://invinciblespeed.github.io/portals/features";
navPane.append(a.cloneNode(true));
navPane.append(diamond.cloneNode(true));

a.textContent = "[ - end timer - ]";
a.href = "https://invinciblespeed.github.io/countdown";
navPane.append(a.cloneNode(true));