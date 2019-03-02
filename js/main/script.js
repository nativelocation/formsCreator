function addEventListeners() {
	const component = document.querySelector('#hl_widget_e235002');

	component.addEventListener('dragstart', onDragStart);
	component.addEventListener('dragend', onDragEnd);

	const form_builder = document.querySelector('#the-form-builder');
	form_builder.addEventListener('drop', onDrop);
	form_builder.addEventListener('dragover', onDragOver);
}

function onDragStart(event) {
	console.log("dragStart", event.target.id);
	event.dataTransfer.setData("id", event.target.id);
	event.dataTransfer.setData("label", event.target.textContent);
	event.effectAllowed = "copyMove";
}

function onDragEnd(event) {
  console.log("dragEnd");
	event.target.style.border = "none";
  event.dataTransfer.clearData();
}

function onDrop(event) {
	console.log("Drop", event.target, event.currentTarget);
	event.preventDefault();
	var id = event.dataTransfer.getData("id");
	var tgt = document.createElement("div");
	tgt.className = "form-builder--item"
	tgt.id = id + "_copyId";
	var newLabel = document.createElement("label");
	newLabel.textContent = event.dataTransfer.getData("label");
	tgt.appendChild(newLabel);
	var newInput = document.createElement("input");
	newInput.className = "form-control";
	newInput.type = "text";
	newInput.placeholder = event.dataTransfer.getData("label");
	tgt.appendChild(newInput);
	event.target.appendChild(tgt);
}

function onDragOver(event) {
	console.log("dragOver");
	event.preventDefault();
}

function onLayoutChange(event) {
	console.log('onLayoutChange', event.target.checked);
	const form_builder = document.querySelector('#the-form-builder');
	if (event.target.checked) {
		form_builder.style.width = "auto";
	} else {
		form_builder.style.width = "500px";
	}
}

function onBackgroundColorPickerInput(event) {
	console.log('onBackgroundColorPickerInput', event.target.value);
	const component = document.querySelector('.background.color-picker .the-color');
	component.style.background = "#" + event.target.value;
	const form_builder = document.querySelector('#the-form-builder');
	form_builder.style.background = "#" + event.target.value;
}

function onFontColorPickerInput(event) {
	console.log('onFontColorPickerInput', event.target.value);
	const component = document.querySelector('.font.color-picker .the-color');
	component.style.background = "#" + event.target.value;
	const form_builder = document.querySelector('#the-form-builder');
	form_builder.style.color = "#" + event.target.value;
}

function onBorderWidthInput(event) {
	console.log('onBorderPicker', event.target.value);
	const form_builder = document.querySelector('#the-form-builder');
	form_builder.style.borderWidth = event.target.value + 'px';
}

function onBorderPickerUp(event) {
	const component = document.querySelector('.border-picker .form-control');
	component.value = parseInt(component.value) + 1;
	const form_builder = document.querySelector('#the-form-builder');
	form_builder.style.borderWidth = component.value + 'px';
}

function onBorderPickerDown(event) {
	const component = document.querySelector('.border-picker .form-control');
	if (parseInt(component.value) > 0) {
		component.value = parseInt(component.value) - 1;
	}
	const form_builder = document.querySelector('#the-form-builder');
	form_builder.style.borderWidth = component.value + 'px';
}

function onCornerRadiusInput(event) {
	const form_builder = document.querySelector('#the-form-builder');
	form_builder.style.borderRadius = event.target.value + 'px';
}

function onCornerRadiusUp(event) {
	const component = document.querySelector('.corner-radius.pixel-count .form-control');
	component.value = parseInt(component.value) + 1;
	const form_builder = document.querySelector('#the-form-builder');
	form_builder.style.borderRadius = component.value + 'px';
}

function onCornerRadiusDown(event) {
	const component = document.querySelector('.corner-radius.pixel-count .form-control');
	if (parseInt(component.value) > 0) {
		component.value = parseInt(component.value) - 1;
	}
	const form_builder = document.querySelector('#the-form-builder');
	form_builder.style.borderRadius = component.value + 'px';
}

function onWidthInput(event) {
	const form_builder = document.querySelector('#the-form-builder');
	form_builder.style.width = event.target.value + 'px';
}

function onWidthUp(event) {
	const component = document.querySelector('.width.pixel-count .form-control');
	component.value = parseInt(component.value) + 1;
	const form_builder = document.querySelector('#the-form-builder');
	form_builder.style.width = component.value + 'px';
}

function onWidthDown(event) {
	const component = document.querySelector('.width.pixel-count .form-control');
	if (parseInt(component.value) > 0) {
		component.value = parseInt(component.value) - 1;
	}
	const form_builder = document.querySelector('#the-form-builder');
	form_builder.style.width = component.value + 'px';
}

addEventListeners();
