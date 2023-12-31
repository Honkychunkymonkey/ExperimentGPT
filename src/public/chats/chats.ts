window.onload = function () {
	const button = document.getElementById("chatSelect");
	if (button) {
		button.style.borderBottomLeftRadius = "10px";
		button.style.borderBottomRightRadius = "10px";
	}
};

document.getElementById("chatSelect")?.addEventListener("click", function () {
	const dropdown = document.getElementById("chatDropdown");
	const button = document.getElementById("chatSelect");
	if (dropdown && button) {
		if (dropdown.style.display === "block") {
			dropdown.style.display = "none";
			button.style.borderBottomLeftRadius = "10px";
			button.style.borderBottomRightRadius = "10px";
		} else {
			dropdown.style.display = "block";
			button.style.borderBottomLeftRadius = "0";
			button.style.borderBottomRightRadius = "0";
		}
	}
});

window.addEventListener("click", function (event) {
	const dropdown = document.getElementById("chatDropdown");
	const button = document.getElementById("chatSelect");
	if (dropdown && button) {
		if (!(event.target as Element).matches("#chatSelect") && !dropdown.contains(event.target as Node)) {
			dropdown.style.display = "none";
			button.style.borderBottomLeftRadius = "10px";
			button.style.borderBottomRightRadius = "10px";
		}
	}
});
