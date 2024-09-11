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


async function mergeSort(arr, startIndex) {
	if (arr.length === 1) {
		return arr;
	}

	const boundary = Math.ceil(arr.length / 2);

	const left = arr.slice(0, boundary);
	for (let index = 0; index < left.length; index++) {
		const leftEl = document.getElementById(`graph-${index + startIndex}`);
		leftEl.getElementsByTagName("div")[0].style.backgroundColor = "red";
	}
	
	const right = arr.slice(boundary);
	for (let index = boundary; index < arr.length; index++) {
		const rightEl = document.getElementById(`graph-${index + startIndex}`);
		rightEl.getElementsByTagName("div")[0].style.backgroundColor = "yellow";
	}

	const leftSorted = await new Promise((resolve) => {
		setTimeout(() => resolve(left), 1000);
	})
		.then(result => mergeSort(result, startIndex));

	const rightSorted = await new Promise((resolve) => {
		setTimeout(() => resolve(right), 1000);
	})
		.then(result => mergeSort(result, startIndex + boundary));

	return merge(leftSorted, rightSorted);
}

function clickSumbit() {
	let filteredText = '';

	for (let index = 0; index < inputNumber.value.length; index++) {
		let char = inputNumber.value[index];

		if ((char >= '0' && char <= '9') || char === ',') {
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

function createGraphBar() {
	for (let index = 0; index < inputNumberArray.length; index++) {
		const graphBarHeight = 100 * (inputNumberArray[index] / 30);
		const graphBox = document.createElement("li");
		const graphBarValue = document.createElement("p");
		const graphBar = document.createElement("div");
		graphBox.id = "graph-" + index;

		graphBarValue.innerText = inputNumberArray[index];
		graphBar.style.height = graphBarHeight + "px";

		graphBox.appendChild(graphBarValue);
		graphBox.appendChild(graphBar);
		graphContainer.appendChild(graphBox);
	}
	mergeSort(inputNumberArray, 0);
	isGraph = true;
}

function resetGraphBar() {
	graphContainer.removeChild(document.querySelectorAll(".li"));
}


submitButton.addEventListener("click", clickSumbit);
