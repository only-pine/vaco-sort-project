const inputNumber = document.getElementById("inputNumber");
const submitButton = document.getElementById("submitButton");
const graphContainer = document.querySelector(".graph-container");
const inputNumberArray = [];
let hasGraph = false;
let maxInputNumber = 0;

function toggleButton() {
  const submitButtonBox =
    document.getElementsByClassName("submit-button-box")[0];
  if (submitButton.disabled === false) {
    submitButton.disabled = true;
    submitButtonBox.style.backgroundColor = "gray";
  } else {
    submitButton.disabled = false;
    submitButtonBox.style.backgroundColor = "blue";
  }
}

async function mergeSort(arr, startIndex) {
  if (arr.length === 1) return arr;
  await new Promise((resolve) => setTimeout(resolve, 500));

  const half = Math.ceil(arr.length / 2);
  const left = await mergeSort(arr.slice(0, half), startIndex);
  const right = await mergeSort(arr.slice(half), startIndex + half);

  const sortedArr = [...left, ...right].sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; i++) {
    const graphEl = document.getElementById(`graph-${startIndex + i}`);
    const graphBar = graphEl.getElementsByTagName("div")[0];

    graphBar.style.backgroundColor = "red";
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  for (let i = 0; i < sortedArr.length; i++) {
    const graphEl = document.getElementById(`graph-${startIndex + i}`);
    const graphBar = graphEl.getElementsByTagName("div")[0];
    const graphBarValue = graphEl.getElementsByTagName("p")[0];

    const newHeight = 100 * (sortedArr[i] / maxInputNumber);
    graphBar.style.height = `${newHeight}%`;
    graphBarValue.innerText = sortedArr[i];
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  for (let i = 0; i < sortedArr.length; i++) {
    const graphEl = document.getElementById(`graph-${startIndex + i}`);
    const graphBar = graphEl.getElementsByTagName("div")[0];

    graphBar.style.backgroundColor = "lightBlue";
  }

  return sortedArr;
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
    const graphBarHeight = 100 * (inputNumberArray[index] / maxInputNumber);
    const graphBox = document.createElement("li");
    const graphBarValue = document.createElement("p");
    const graphBar = document.createElement("div");
    graphBox.id = "graph-" + index;

    graphBarValue.innerText = inputNumberArray[index];
    graphBar.style.height = `${graphBarHeight}%`;

    graphBox.appendChild(graphBarValue);
    graphBox.appendChild(graphBar);
    graphContainer.appendChild(graphBox);
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
