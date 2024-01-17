var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Done"));
	li.appendChild(deleteButton);
	deleteButton.setAttribute("class", "btn");	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.key === "Enter") {
		createListElement();
	}
}

function deleteListElement(event) {
    var div = event.target.parentElement;
    ul.removeChild(div);
}

ul.addEventListener("click", deleteListElement);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

