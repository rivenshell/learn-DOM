let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let elem = document.createElement("p");
	// elem.innerHTML = "Hello World, i promise i'm alive. Nobody belives me <br> Do you?";
	elem.innerHTML = "Hello World";

	elem.style.background = "yellow";
	document.body.appendChild(elem);

});

// it's cool how the sie geterates lines of assets