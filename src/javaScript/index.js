const inputNumber = document.getElementById("inputNumber");
const submitButton = document.getElementById("submitButton");
const graphContainer = document.querySelector(".graph-container");
const inputNumberArray = [];
let hasGraph = false;
let maxInputNumber = 0;

function toggleButton() {
  const submitButtonBox = document.getElementsByClassName("submit-button-box")[0];

  if (submitButton.disabled === false) {
    submitButton.disabled = true;

    submitButtonBox.classList.remove("submit-button-box-blue");
    submitButtonBox.classList.add("submit-button-box-gray");
  } else {
    submitButton.disabled = false;

    submitButtonBox.classList.remove("submit-button-box-gray");
    submitButtonBox.classList.add("submit-button-box-blue");
  }
}

async function mergeSort(array, startIndex) {
  if (array.length === 1) {
    return array;
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  const half = Math.ceil(array.length / 2);
  const leftArray = await mergeSort(array.slice(0, half), startIndex);
  const rightArray = await mergeSort(array.slice(half), startIndex + half);

  const mergedArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]){
      mergedArray.push(leftArray.shift());
    } else {
      mergedArray.push(rightArray.shift());
    }
  }

  const sortedArray = [...mergedArray, ...leftArray, ...rightArray];

  for (let i = 0; i < sortedArray.length; i++) {
    const graphWrapper = document.getElementById(`graph-${startIndex + i}`);
    const graphBar = graphWrapper.getElementsByTagName("div")[0];

    if (graphBar.classList.contains("graph-bar-blue")) {
      graphBar.classList.remove("graph-bar-blue");
    }
    graphBar.classList.add("graph-bar-red");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  for (let i = 0; i < sortedArray.length; i++) {
    const graphWrapper = document.getElementById(`graph-${startIndex + i}`);
    const graphBar = graphWrapper.getElementsByTagName("div")[0];
    const graphBarValue = graphWrapper.getElementsByTagName("p")[0];

    const newHeight = 100 * (sortedArray[i] / maxInputNumber);
    graphBar.style.height = `${newHeight}%`;
    graphBarValue.innerText = sortedArray[i];
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  for (let i = 0; i < sortedArray.length; i++) {
    const graphWrapper = document.getElementById(`graph-${startIndex + i}`);
    const graphBar = graphWrapper.getElementsByTagName("div")[0];

    if (graphBar.classList.contains("graph-bar-red")) {
      graphBar.classList.remove("graph-bar-red");
    }
    graphBar.classList.remove("graph-bar-blue");
  }

  return sortedArray;
}

function clickSumbit() {
  if (hasGraph) {
    resetGraphBar();
  }

  let filteredText = "";

  for (let index = 0; index < inputNumber.value.length; index++) {
    let char = inputNumber.value[index];

    if ((char >= "0" && char <= "9") || char === ",") {
      filteredText += char;
    }
  }

  if (filteredText.slice(-1) === ",") {
    filteredText = filteredText.slice(0, filteredText.length - 1);
  }

  inputNumber.value = filteredText;
  inputNumberArray.push(
    ...filteredText
      .split(",")
      .filter((item) => item !== "")
      .map(Number)
  );

  createGraphBar();
}

async function createGraphBar() {
  maxInputNumber = Math.max(...inputNumberArray);

  for (let index = 0; index < inputNumberArray.length; index++) {
    const graphWrapper = document.createElement("li");
    const graphBarValue = document.createElement("p");
    const graphBar = document.createElement("div");

    graphWrapper.id = "graph-" + index;
    graphBarValue.innerText = inputNumberArray[index];

    const graphBarHeight = 100 * (inputNumberArray[index] / maxInputNumber);
    graphBar.style.height = `${graphBarHeight}%`;

    graphWrapper.appendChild(graphBarValue);
    graphWrapper.appendChild(graphBar);
    graphContainer.appendChild(graphWrapper);
  }

  toggleButton();
  await mergeSort(inputNumberArray, 0);
  toggleButton();

  hasGraph = true;
}

function resetGraphBar() {
  inputNumberArray.length = 0;

  while (graphContainer.firstChild) {
    graphContainer.removeChild(graphContainer.firstChild);
  }
}

submitButton.addEventListener("click", clickSumbit);
