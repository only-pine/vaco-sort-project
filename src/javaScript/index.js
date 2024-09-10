const inputNumber = document.getElementById("inputNumber");
const submitButton = document.getElementById("submitButton");
const graphContainer = document.querySelector(".graph-container");
const inputNumberArray = [];
let isGraph = false;

function merge(left, right) {
	const sortedArr = [];
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			sortedArr.push(left.shift());
		} else {
			sortedArr.push(right.shift());
		}
	}

	return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
	if (arr.length === 1) return arr;
	const boundary = Math.ceil(arr.length / 2);
	const left = arr.slice(0, boundary);
	const right = arr.slice(boundary);
	return merge(mergeSort(left), mergeSort(right));
}

function clickSumbit () {
	let filteredText = '';

	for (let index = 0; index < inputNumber.value.length; index++) {
		let char = inputNumber.value[index];

		if((char >= '0' && char <= '9') || char === ','){
			filteredText += char;
		}
	}

	inputNumber.value = filteredText;
	inputNumberArray.push(...(filteredText.split(',').filter(item => item !== '').map(Number)));

	if (isGraph) {
		resetGraphBar();
	}

	createGraphBar();
}

function createGraphBar () {
	const sortedArray = mergeSort(inputNumberArray);
	console.log(sortedArray);
	
	for (let index = 0; index < inputNumberArray.length; index++) {
		const graphBarHeight = 100 * (inputNumberArray[index] / 30);
		const graphBox = document.createElement("li");
		const graphBarValue = document.createElement("p");
		const graphBar = document.createElement("div");

		graphBarValue.innerText = inputNumberArray[index];
		graphBar.style.height = graphBarHeight + "px";
		
		graphBox.appendChild(graphBarValue);
		graphBox.appendChild(graphBar);
		graphContainer.appendChild(graphBox);
	}

	isGraph = true;
}

function resetGraphBar () {
	graphContainer.removeChild(document.querySelectorAll(".li"));
}


submitButton.addEventListener("click", clickSumbit);