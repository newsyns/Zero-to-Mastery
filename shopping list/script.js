var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function deleteButton(item) {
	let btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.className = 'btn';
	btn.addEventListener("click", function () {
		this.parentElement.parentElement.removeChild(this.parentElement);
	});

	item.appendChild(btn);
	
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.addEventListener("click", toggleDone)

	deleteButton(li);


	
	function toggleDone() {
		li.classList.toggle("done");
	}
}





function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
