function addEventListeners() {
	const component = document.querySelector('#hl_widget_e235001');

	component.addEventListener('dragstart', onDragStart);
	component.addEventListener('dragend', onDragEnd);

	const form_builder = document.querySelector('#the-form-builder');
	form_builder.addEventListener('drop', onDrop);
	// form_builder.addEventListener('dragenter', onDragEnter);
	// form_builder.addEventListener('dragleave', onDragLeave);
	form_builder.addEventListener('dragover', onDragOver);
}

function onDragStart(event) {
	console.log("dragStart", event.target.id);
	// event.currentTarget.style.border = "dashed";
	event.dataTransfer.setData("text", event.target.id);
	event.effectAllowed = "copyMove";
}

function onDragEnd(event) {
  console.log("dragEnd");
	event.target.style.border = "none";
  event.dataTransfer.clearData();
}

function onDrop(event) {
	console.log("Drop");
	event.preventDefault();
	var id = event.dataTransfer.getData("text");
	// if (id == "src_copy" && ev.target.id == "dest_copy") {
	console.log(id);
	 var nodeCopy = document.getElementById(id).cloneNode(true);
	 nodeCopy.id = id + "_copyId";
	 nodeCopy.style.border = "none";
	 nodeCopy.style.backgroundColor="#dddde8";
	 event.target.appendChild(nodeCopy);
	// }
}

function onDragOver(event) {
	console.log("dragOver");
	// event.currentTarget.style.background = "lightblue";
	event.preventDefault();
}

addEventListeners();
