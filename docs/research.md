<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/SsongQ-92" target="_blank">
      <sub><b>송규경🙋‍♂️</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/only-pine" target="_blank">
      <sub><b>장한솔🙋‍♀️</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/jin-ttao" target="_blank">
      <sub><b>송진태🙋‍♂️</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

# 📌 Research TODO

- [x] [`querySelector`](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector)를 활용하여 우리는 웹 페이지에서 원하는 요소를 선택할 수 있습니다. 사용법을 알아보고, 대안이나 유사한 API(메서드)가 있다면 함께 비교하며 조사해보세요.[이동](#1-queryselector)
- [x] [`document.querySelectorAll`](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelectorAll)과 [`document.getElementsByClassName`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)의 가장 핵심적인 기능상 차이점은 무엇일까요?[이동](#2-documentqueryselectorall과-documentgetelementsbyclassname의-차이)
- [x] [`addEventListener`](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)를 활용하여 우리가 선택한 요소에 사용자가 인터렉션 하는 것을 감지할 수 있습니다. 사용법을 알아보고, 대안이 있다면 함께 비교하며 조사해보세요.[이동](#3-addeventlistener)
- [x] [removeEventListener](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/removeEventListener)의 사용법 또한 조사해보세요.[이동](#4-removeeventlistener)
- [x] [innerHTML vs innerText vs textContent](https://www.freecodecamp.org/news/innerhtml-vs-innertext-vs-textcontent/)의 차이점에 대해 간략히 살펴보세요.[이동](#5-innerhtml-vs-innertext-vs-textcontent)
- [x] [classList](https://developer.mozilla.org/ko/docs/Web/API/Element/classList)의 기능에 대해 살펴보세요.[이동](#6-classlist)
- [x] DOM의 이벤트를 다루기 위해서는 이벤트 위임에 대해 잘 이해해야 합니다. 다음 키워드에 대해 조사해보세요.[이동](#7-이벤트-위임-이벤트-캡처링-vs-이벤트-버블링-eventstoppropagation-eventtarget-vs-eventcurrenttarget)
  - 이벤트 캡처링 vs 이벤트 버블링
  - `event.stopPropagation`
  - `event.target` vs `event.currentTarget`
- [x] [개발자 도구의 기능](https://www.youtube.com/watch?v=ZaOZFkHTloM)에 대해 살펴보시고 과제를 하는 과정에서 활용해보세요.[이동](#8-개발자-도구의-기능)

<hr/>

## 1. `querySelector`

### 1️⃣`querySelector` 이란?

문서 메서드 `querySelector()`는 문서 내에서 지정된 `CSS selector` 또는 `group of CSS selectors`과 일치하는 첫 번째 엘리먼트를 반환합니다. (`depth-first pre-order traversal of the document's nodes`) 일치하는 항목이 없으면 `null`이 반환됩니다.

#### ❗ 주의사항

- `CSS pseudo-elements`는 Selectors API에 지정된 대로 어떤 요소도 반환하지 않습니다.
- `CSS identifier` 규칙에 어긋나게 쓴 `HTML element`를 `querySelector`로 지정할 때는, `CSS.escape()`를 쓰면 됩니다. (https://developer.mozilla.org/en-US/docs/Web/CSS/ident)

#### ❓ `Depth First Search`?

<p align="center">
  <image src="./images/DFS.png" alt="DFS 그림" width="90%" align="center" />
</p>

#### ❓ `Pseudo-elements`?

CSS 의사 요소(가상 요소)는 선택자에 추가하는 키워드로, 선택한 요소의 일부분에만 스타일을 입힐 수 있습니다. 예를 들어 ::first-line을 사용하면 문단 첫 줄의 글씨체만 바꿀 수 있습니다. 규칙을 따라 단일 콜론(:) 대신 이중 콜론(::)을 사용하여 의사 클래스와 의사 요소를 구별해야 합니다.

```css
/* The first line of every <p> element. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

### 2️⃣`querySelector`의 대안이나 관련 API?

`querySelector`의 대안 API로 사용할 수 있는 몇 가지 방법이 있습니다. 주로 DOM 요소를 선택하는 방법을 제공하는 API들입니다. 여기 몇 가지 대안 API를 소개합니다:

1. **`getElementById`**:

   - 특정 `id` 속성을 가진 단일 요소를 선택할 때 사용합니다.
   - 예: `document.getElementById('myId')`

2. **`getElementsByClassName`**:

   - 특정 클래스 이름을 가진 모든 요소를 선택할 때 사용합니다. 이 메서드는 HTMLCollection을 반환하며, 실시간으로 문서의 변화를 반영합니다.
   - 예: `document.getElementsByClassName('myClass')`

3. **`getElementsByTagName`**:

   - 특정 태그 이름을 가진 모든 요소를 선택할 때 사용합니다. 이 메서드 역시 HTMLCollection을 반환합니다.
   - 예: `document.getElementsByTagName('div')`

4. **`getElementsByName`**:

   - 특정 `name` 속성을 가진 모든 요소를 선택할 때 사용합니다. 주로 `<input>` 요소에서 많이 사용됩니다.
   - 예: `document.getElementsByName('username')`

5. **`querySelectorAll`**:

   - `querySelector`와 유사하지만, 일치하는 모든 요소를 선택하고 NodeList를 반환합니다. NodeList는 배열처럼 반복 가능하며, 실시간으로 문서의 변화를 반영하지 않습니다.
   - 예: `document.querySelectorAll('.myClass')`

6. **`closest`**:
   - 특정 요소의 부모 요소 중 가장 가까운 선택자와 일치하는 요소를 찾을 때 사용합니다.
   - 예: `element.closest('.parentClass')`

이 외에도 최신 자바스크립트 프레임워크나 라이브러리 (예: React, Vue.js, jQuery)에서 제공하는 선택기 메서드들을 활용할 수 있습니다. 그러나 순수 자바스크립트의 범위 내에서는 위에 나열된 메서드들이 `querySelector`의 주요 대안으로 사용됩니다.

#### ✨ 이런 API도 있다!

Refs(https://beyondthecloud.dev/blog/refs-vs-query-selector-in-lwc)

## 2. `document.querySelectorAll`과 `document.getElementsByClassName`의 차이?

`querySelectorAll`과 `getElementsByClassName`는 모두 DOM 요소를 선택하는 메서드입니다. 하지만 이 두 메서드가 반환하는 객체는 다르며, 각각의 특징과 차이점은 다음과 같습니다.

### 1️⃣ 반환되는 객체 타입

- **`querySelectorAll`**:
  - `querySelectorAll`은 선택자(selector)를 사용하여 DOM에서 일치하는 모든 요소를 찾고, 이 요소들을 **`NodeList`**라는 객체로 반환합니다.
- **`getElementsByClassName`**:
  - `getElementsByClassName`은 지정된 클래스 이름을 가진 모든 요소를 찾아서 **`HTMLCollection`**이라는 객체로 반환합니다.

### 2️⃣ `NodeList`와 `HTMLCollection`의 차이점

#### 2.1. **`NodeList`**

- **정적/동적**:
  - `querySelectorAll`에 의해 반환되는 `NodeList`는 **정적**입니다. 즉, 한 번 생성된 후 DOM이 변경되더라도 `NodeList`는 업데이트되지 않습니다. `NodeList`는 요소를 복사하여 저장하는 일종의 스냅샷이라고 할 수 있습니다. (예외도 있다..! => childNodes)
- **반복 가능성**:
  - `NodeList`는 `forEach`, `for...of`와 같은 반복문을 사용할 수 있습니다. 이 말은 `NodeList`는 **이터러블(iterable)**하다는 것을 의미합니다.
- **인덱스로 접근**:
  - 배열처럼 인덱스를 사용하여 특정 요소에 접근할 수 있습니다. (`nodeList[0]`, `nodeList[1]`, ...)

#### 2.2. **`HTMLCollection`**

`getElementsByClassName`, `getElementsByTagName`, `getElementsByName`

- **정적/동적**:
  - `getElementsByClassName`에 의해 반환되는 `HTMLCollection`은 **동적**입니다. DOM이 변경되면 `HTMLCollection`도 자동으로 업데이트되어 항상 현재 상태를 반영합니다.
- **반복 가능성**:
  - `HTMLCollection`은 **이터러블(iterable)**하지 않습니다. 즉, `forEach` 같은 메서드를 바로 사용할 수 없지만, `for` 루프를 사용하여 요소에 접근할 수 있습니다.
- **인덱스로 접근**:
  - 배열처럼 인덱스를 사용하여 특정 요소에 접근할 수 있습니다. (`htmlCollection[0]`, `htmlCollection[1]`, ...)
- **`name` 또는 `id`로 접근**:
  - `HTMLCollection`은 요소의 `name`이나 `id` 속성을 사용하여 특정 요소에 접근할 수 있습니다. 예를 들어, `htmlCollection['elementName']`처럼 사용할 수 있습니다.

### 3️⃣ 주요 사용 사례

- **`querySelectorAll`**:

  - 복잡한 CSS 선택자를 사용하여 특정 조건을 만족하는 요소를 선택해야 할 때 주로 사용합니다. 예를 들어, 클래스와 태그를 결합한 선택자, 자손 선택자 등을 사용할 때 유용합니다.

- **`getElementsByClassName`**:
  - 단순히 특정 클래스 이름을 가진 요소를 모두 선택할 때 사용됩니다. 동적 업데이트가 필요한 경우에 유리합니다.

### 4️⃣ 메서드 사용 예시

- `querySelectorAll` 사용 예:

  ```javascript
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    console.log(item);
  });
  ```

- `getElementsByClassName` 사용 예:
  ```javascript
  const items = document.getElementsByClassName("item");
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
  ```

이와 같이 `NodeList`와 `HTMLCollection`은 DOM 요소를 선택하고 관리하는 데 있어서 다소 차이가 있으며, 특정한 상황에서 어느 것을 사용하는 것이 더 적합할지를 고려하여 선택할 수 있습니다.

<p align="center">
  <image src="./images/difference-between-NodeList-HTMLCollection.png" alt="DFS 그림" width="90%" align="center" />
</p>

### 5️⃣ 우리가 작성한 좋은 예시

```html
<div id="container">
  <div class="ulsan">울산1</div>
  <div class="ulsan">울산2</div>
  <div class="ulsan">울산3</div>
  <div class="ulsan">울산4</div>
</div>
```

```js
const $tag = document.querySelector(".ulsan");
const $allTags = document.querySelectorAll(".ulsan");
const $allClassName = document.getElementsByClassName("ulsan");

console.log(
  $tag,
  $tag.textContent,
  $allTags,
  $allClassName,
  $allTags[3],
  $allTags[3].textContent
);

const $container = document.getElementById("container");
const $newBorn = document.createElement("div");
$newBorn.classList.add("ulsan");
$container.appendChild($newBorn);

$tag.textContent = "울산0";

$allTags[3].textContent = "제주";

console.log(
  typeof $tag,
  $tag,
  $tag.textContent,
  $allTags,
  $allClassName,
  $allTags[3],
  $allTags[3].textContent
);
```

<p align="center">
  <image src="./images/testConsoleResult.png" alt="DFS 그림" width="70%" align="center" />
</p>

## 3. `addEventListener`

> 유용 블로그: https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EB%B2%84%EB%B8%94%EB%A7%81-%EC%BA%A1%EC%B3%90%EB%A7%81#%EC%BA%A1%EC%B2%98%EB%A7%81_%EB%93%B1%EB%A1%9D

`EventTarget` 인터페이스의 `addEventListener()` 메서드는 지정된 이벤트가 대상에 전달될 때마다 호출되는 함수를 설정합니다.

```js
addEventListener(type, listener);
addEventListener(type, listener, options);
addEventListener(type, listener, useCapture);
```

### 1️⃣ `Event` type 종류

#### Mouse Event

<p>
  <image src="./images/mouseEvent.png" alt="마우스 이벤트" width="90%" />
</p>

#### Keyboard Event

<p>
  <image src="./images/keyboardEvent.png" alt="키보드 이벤트" width="90%" />
</p>

#### Focus Event

<p>
  <image src="./images/focusEvent.png" alt="포커스 이벤트" width="90%" />
</p>

#### Input Event

<p>
  <image src="./images/inputEvent.png" alt="입력 이벤트" width="90%" />
</p>

#### Scroll Event

<p>
  <image src="./images/scrollEvent.png" alt="스크롤 이벤트" width="90%" />
</p>

#### Window Event

<p>
  <image src="./images/windowEvent.png" alt="윈도우 이벤트" width="90%" />
</p>

### 2️⃣ 특징

#### 이벤트에 대해서 여러개의 콜백을 추가하는 것은 가능하지만, 동일 콜백을 추가할 경우, 중복된 콜백함수는 무시된다.

```js
// Target element
const button = document.querySelector("button");

const clickFirst = function () {
  console.log("First handler");
};

// First event handler
button.addEventListener("click", clickFirst);
button.addEventListener("click", clickFirst); // 무시됨

// Second event handler
button.addEventListener("click", function () {
  console.log("Second handler");
});

// Third event handler
button.addEventListener("click", function () {
  alert("Button clicked!");
});
```

#### 만약 어떤 이벤트(예: 클릭 이벤트)가 발생하고, 그 이벤트를 처리하는 중에(즉, 이벤트 리스너 안에서) 또 다른 이벤트 리스너를 같은 요소에 추가한다면, 현재 진행 중인 이벤트는 그 새로 추가된 리스너를 호출하지 않습니다. 하지만, 그 새로 추가된 리스너는 다음 단계(예: 버블링 단계)나 이후에 같은 이벤트가 발생했을 때 호출될 수 있습니다.

```js
const button = document.querySelector("button");

// 첫 번째 리스너
button.addEventListener("click", function firstListener() {
  console.log("First listener triggered");

  // 두 번째 리스너 추가 (첫 번째 리스너 안에서)
  button.addEventListener("click", function secondListener() {
    console.log("Second listener triggered");
  });
});
```

```
1) 첫번째 클릭
First listener triggered
2) 두번째 클릭
First listener triggered
Second listener triggered
```

#### 요소에 `addEventListener()`를 사용하여 핸들러 함수를 연결할 때, 핸들러 내부의 `this` 값은 그 요소를 참조합니다.

```js
my_element.addEventListener("click", function (e) {
  console.log(this.className); // my_element의 className을 출력함
  console.log(e.currentTarget === this); // `true`를 출력함
});
```

#### MDN의 `Specifying "this" using bind()`에 대해서는 추후 확인 예정

#### MDN의 `Memory issues`에서 HTMLCollection이 iterable 인 것에 대해서는 추후 확인 예정(`for...of` 사용 가능?)

### 3️⃣ `addEventListener`의 대안

1. HTML 태그에서 inline 이벤트 속성(`attribute`)을 부여하는 방식
2. element에 `onEventProperty`로 넣는 방식

```js
$0.onclick = () => {
  console.log("clicked!!");
};
```

## 4. `removeEventListener`

EventTarget 인터페이스의 removeEventListener() 메서드는 **이전에 EventTarget.addEventListener()에 등록된 이벤트 리스너(옵션 값까지 일치해야함)**를 대상에서 제거합니다. 제거할 이벤트 리스너는 이벤트 유형, 이벤트 리스너 함수 자체 및 매칭 프로세스에 영향을 줄 수 있는 다양한 옵션의 조합을 사용하여 식별됩니다(제거할 이벤트 리스너 매칭을 참조하세요).

이 코드에서 버튼을 클릭하면 handleClick 함수가 실행되면서 'Clicked'라는 메시지가 출력되고, 곧바로 removeEventListener를 통해 handleClick 리스너가 제거됩니다. 따라서 이후에 발생하는 클릭 이벤트에서는 더 이상 handleClick이 실행되지 않게 됩니다. (페이지 reload 되지 않으면)

```js
function handleClick(event) {
  console.log("Clicked");
  event.currentTarget.removeEventListener("click", handleClick);
}

document.getElementById("myBtn").addEventListener("click", handleClick);
```

## 5. `innerHTML vs innerText vs textContent`

- `innerHTML`: 요소 속성 `innerHTML`은 요소에 포함된 HTML 또는 XML 마크업을 가져오거나 설정합니다. (문자열 리턴)

- `innerText`: HTMLElement 인터페이스의 innerText 속성은 노드와 그 하위 요소의 **렌더링**된 텍스트 콘텐츠를 나타냅니다.

- `textContent`: 노드 인터페이스의 textContent 프로퍼티는 노드와 그 자손의 텍스트 콘텐츠를 나타냅니다.

### 📌 차이 (`innerText vs textContent`)

`innerText`와 `textContent`는 모두 HTML 요소의 텍스트를 다루는 속성이지만, 몇 가지 중요한 차이점이 있습니다.

1. **CSS에 따른 차이**:

   - `innerText`는 요소가 실제로 화면에 표시되는 텍스트만 가져옵니다. CSS로 숨겨진 텍스트나 스타일에 따라 변경된 텍스트는 무시합니다.
   - `textContent`는 CSS에 상관없이 요소의 모든 텍스트 콘텐츠를 가져옵니다. 숨겨진 텍스트도 포함됩니다.

2. **성능**:

   - `innerText`는 텍스트를 계산하고 렌더링된 상태에 따라 변경하므로, `textContent`보다 느릴 수 있습니다.
   - `textContent`는 비교적 빠릅니다. 요소의 전체 텍스트 내용을 그대로 가져오거나 설정할 수 있습니다.

3. **줄바꿈 처리**:
   - `innerText`는 텍스트에 있는 줄바꿈을 인식하고 반영합니다.
   - `textContent`는 줄바꿈을 그대로 텍스트로 가져오지만, `<br>` 같은 태그는 포함하지 않습니다.

#### 간단한 요약:

- `innerText`: 화면에 보이는 텍스트만 가져오거나 설정, CSS 스타일을 반영.
- `textContent`: 요소의 모든 텍스트를 가져오거나 설정, CSS 스타일 무시.

## 6. `classList`

`Element.classList`는 요소의 클래스 속성에 대한 라이브 `DOMTokenList` 컬렉션을 반환하는 읽기 전용 속성입니다. 이를 사용하여 클래스 목록을 **조작할 수 있습니다.**

element.className을 통해 공백으로 구분된 문자열로 요소의 클래스 목록에 액세스하는 대신 `classList`를 사용하는 것이 편리합니다.

- `add()`, `remove()`, `replace()`, `toggle()`

## 7. 이벤트 위임 (이벤트 캡처링 vs 이벤트 버블링, `event.stopPropagation`, `event.target` vs `event.currentTarget`)

### 1️⃣ 이벤트 캡처링 vs 이벤트 버블링

1. **이벤트 캡처링이란?**

- 이벤트 캡처링은 버블링과 반대되는 과정입니다. 이벤트가 최상위 요소에서 시작하여 점차 하위 요소로 전파됩니다. 이 과정은 '캡처링 단계'라고 하며, 이벤트가 가장 구체적인 요소에 도달하기 전에 상위 요소들이 이벤트를 가로채어 처리할 수 있습니다.
- 캡처링 단계에서 이벤트를 처리하려면, addEventListener 메서드의 세 번째 인자로 true를 전달해야 합니다.
- useCapture 옵션으로 캡처링 활성화 가능

```js
addEventListener(type, listener, useCapture);
```

```js
document.querySelector("div").addEventListener(
  "click",
  function () {
    console.log("Div clicked during capture");
  },
  true
);
```

2. **이벤트 버블링이란?**

- 이벤트 버블링은 이벤트가 가장 구체적인 요소(즉, 이벤트가 발생한 요소)에서 시작하여 점차 상위 요소로 전파되는 방식입니다. 예를 들어, `<div>` 안에 `<button>`이 있고 이 버튼을 클릭했을 때, 클릭 이벤트는 먼저 `<button>`에서 발생한 다음, 부모 요소인 `<div>`로 전파되고, 그 위의 다른 상위 요소들로 계속 전파됩니다. 이 과정을 "버블링"이라고 부릅니다.
- 따로 옵션을 주지 않으면 디폴트로 버블링이 발생합니다.

```js
document.querySelector("button").addEventListener("click", function () {
  console.log("Button clicked");
});
```

3. **이벤트 흐름**

1) 캡처링 단계: 이벤트가 최상위 요소에서 시작하여 목표 요소로 내려갑니다.
2) 타겟 단계: 이벤트가 목표 요소에 도달합니다.
3) 버블링 단계: 이벤트가 목표 요소에서 시작하여 다시 상위 요소로 전파됩니다.

<p align="center">
  <image src="./images/eventFlow.png" alt="이벤트 흐름도" width="80%" />
</p>

### 2️⃣ `event.stopPropagation`

stopPropagation() 메소드를 호출하면 버블링 또는 캡처링 설정에 따라 상위, 하위로 가는 이벤트 전파를 막을 수 있다.

```html
<div id="ancestor">
  ancestor
  <div id="parent">
    parent
    <div id="child">child</div>
  </div>
</div>
```

<p>
  <image src="./images/stopPropagation.png" alt="윈도우 이벤트" width="50%" />
</p>

```js
const $ancestor = document.getElementById("ancestor");
const $parent = document.getElementById("parent");
const $child = document.getElementById("child");

const print = (text) => {
  console.log(text);
};

$ancestor.addEventListener(
  "click",
  (e) => {
    e.target.customNum = 999;
    print("ancestor");
  },
  true
); // 캡처링 단계에서 실행

$parent.addEventListener(
  "click",
  (e) => {
    if (e.target.customNum === 999) {
      e.stopPropagation(); // 이벤트 전파 중지
    }
    e.target.customString = "hello";
    print("parent");
  },
  true
); // 캡처링 단계에서 실행

$child.addEventListener("click", (e) => {
  print("child " + e.target.customNum + " " + e.target.customString);
});
```

child 클릭 시,

```
ancestor
parent
```

#### ✨ `event.stopImmediatePropagation` 도 있다!

stopImmediatePropagation() 메소드를 호출하면, 이벤트 전파와 더불어 형제 이벤트 실행을 중지한다.

```js
// 첫 번째 리스너
button.addEventListener("click", function firstListener(e) {
  console.log("First listener triggered");

  e.stopImmediatePropagation();

  // 두 번째 리스너 추가 (첫 번째 리스너 안에서)
  button.addEventListener("click", function secondListener() {
    console.log("Second listener triggered");
  });
});
```

### 3️⃣ `event.target` vs `event.currentTarget`

1. `event.target`

- 정의: 이벤트가 발생한 실제 DOM 요소를 가리킵니다. 사용자가 클릭하거나 이벤트를 발생시킨 요소를 참조합니다.
- 예: 만약 이벤트가 버튼 요소에서 발생했다면, event.target은 해당 버튼 요소가 됩니다.

2. `event.currentTarget`

- 정의: 이벤트 리스너가 현재 등록된 요소를 가리킵니다. 이벤트가 버블링 또는 캡처링되는 동안 이벤트 리스너가 부착된 요소를 참조합니다.
- 예: 만약 이벤트 리스너가 div 요소에 등록되어 있고 이벤트가 자식 button 요소에서 발생했다면, event.currentTarget은 여전히 div 요소를 가리킵니다.

## 8. 개발자 도구의 기능

### 1️⃣ 각 탭에 대한 간략한 설명

개발자 도구는 웹 개발자가 브라우저에서 웹 페이지를 실시간으로 분석하고 디버깅할 수 있게 해주는 도구입니다. 각 브라우저마다 약간의 차이는 있지만, 기본적인 기능들은 대체로 비슷합니다.

1. **요소 검사 (Elements)**

   - **DOM 구조 확인:** 웹 페이지의 HTML 요소 구조를 실시간으로 확인하고 수정할 수 있습니다. 이 기능을 통해 특정 요소의 위치를 파악하고, 이를 실시간으로 편집하여 변경 사항이 어떻게 적용되는지 확인할 수 있습니다.
   - **CSS 수정:** 선택한 요소의 CSS 스타일을 확인하고 수정할 수 있습니다. 실시간으로 스타일을 추가, 수정, 또는 삭제하여 페이지의 레이아웃이나 디자인이 어떻게 변경되는지 테스트할 수 있습니다.

2. **콘솔 (Console)**

   - **JavaScript 실행 및 디버깅:** 개발자가 JavaScript 코드를 직접 입력하고 실행할 수 있는 인터페이스입니다. 오류 메시지 확인, 변수 값 출력, 또는 코드 스니펫을 실행하여 디버깅에 사용됩니다.
   - **로그 출력:** `console.log` 등을 사용해 스크립트에서 디버깅 정보를 출력하고, 이를 통해 코드의 실행 흐름이나 변수의 상태를 확인할 수 있습니다.

3. **네트워크 (Network)**

   - **네트워크 요청 추적:** 웹 페이지가 로드되는 동안 발생하는 모든 네트워크 요청 (HTTP/HTTPS)을 추적할 수 있습니다. 각 요청의 상태 코드, 요청 및 응답 헤더, 응답 시간 등을 확인할 수 있어 성능 최적화나 오류 분석에 유용합니다.
   - **자원 로드 시간:** 페이지 로드 속도를 분석하고, 각 리소스 (이미지, 스크립트, CSS 등)의 로드 시간을 확인할 수 있어 성능 병목을 식별할 수 있습니다.

4. **소스 (Sources)**

   - **자바스크립트 디버깅:** 웹 페이지에서 로드된 모든 JavaScript 파일을 탐색하고, 브레이크포인트를 설정하여 코드 실행을 단계별로 디버깅할 수 있습니다. 변수 값 조회, 실행 중단, 함수 호출 스택 확인 등이 가능합니다.
   - **로컬 수정:** 코드를 브라우저 내에서 수정하고, 수정된 코드가 어떻게 동작하는지 실시간으로 테스트할 수 있습니다.

5. **애플리케이션 (Application)**

   - **쿠키 및 저장소 관리:** 웹 페이지에서 사용하는 쿠키, 로컬 스토리지, 세션 스토리지 등을 확인하고 관리할 수 있습니다. 이를 통해 상태 관리나 사용자 데이터 저장 방식을 분석할 수 있습니다.
   - **서비스 워커 및 PWA:** 서비스 워커, 웹 앱 매니페스트, 캐시된 자원 등을 확인하고 디버깅할 수 있습니다. 특히 Progressive Web App (PWA) 개발에 유용한 기능입니다.

6. **성능 (Performance)**

   - **성능 분석:** 페이지 로드와 사용자 상호작용 시 발생하는 성능 문제를 분석할 수 있습니다. 타임라인을 기록하여 CPU 및 메모리 사용량, 이벤트 처리 시간, 레이아웃 계산 시간 등을 확인할 수 있습니다.
   - **프레임 분석:** 애니메이션이나 스크롤 성능을 분석하여 프레임 드랍이나 지연 문제를 해결할 수 있습니다.

7. **네트워크 조건 (Network Conditions)**

   - **네트워크 속도 제한:** 느린 네트워크 환경을 시뮬레이션하여 페이지가 다양한 네트워크 속도에서 어떻게 동작하는지 테스트할 수 있습니다.
   - **사용자 에이전트 스푸핑:** 다른 브라우저나 디바이스 환경을 시뮬레이션하기 위해 사용자 에이전트를 변경할 수 있습니다.

8. **메모리 (Memory)**
   - **메모리 스냅샷:** 메모리 사용량을 분석하고, 누수 여부를 확인할 수 있습니다. 메모리 힙 스냅샷을 통해 객체가 메모리에 어떻게 분포되어 있는지, 불필요하게 메모리를 점유하는 부분이 있는지를 파악할 수 있습니다.

이러한 기능들을 통해 개발자는 웹 페이지의 문제를 발견하고 수정하며, 성능을 최적화할 수 있습니다. 각 도구는 상황에 맞게 사용되며, 익숙해질수록 웹 개발에 강력한 도움을 줄 수 있습니다.

### 2️⃣ 소스(Sources) 탭에 대한 상세 설명

1. Sources panel
   **Sources 패널**은 웹 페이지의 소스 코드를 탐색하고, 디버깅하는 데 사용되는 패널입니다. 여기서 HTML, CSS, JavaScript 파일을 열어 수정하거나 디버그할 수 있습니다. 또한, 이 패널에서는 파일을 검색하거나 특정 코드로 바로 이동할 수 있는 기능도 제공합니다.

2. Breakpoints + code walkthrough
   **Breakpoints(중단점)**은 코드 실행을 특정 지점에서 멈추게 할 수 있는 기능입니다. 코드를 디버깅할 때, 중단점을 설정하면 코드가 그 지점에서 일시 중지되고, 해당 지점의 상태를 살펴볼 수 있습니다. **Code walkthrough**는 중단점에서 코드의 흐름을 하나씩 살펴보며, 코드가 어떻게 실행되는지 단계별로 이해할 수 있게 해줍니다.

3. Activating debugger
   **디버거 활성화**는 브라우저에서 코드의 실행을 중단하고, 디버그 모드로 전환하는 것입니다. 이를 통해 개발자는 코드의 실행을 세밀하게 제어하고, 각 단계에서 변수의 값이나 상태를 검사할 수 있습니다.

4. Watch dropdown
   **Watch dropdown**은 특정 변수를 추적하여 그 값의 변화를 실시간으로 모니터링할 수 있는 기능입니다. 이 기능을 사용하면 관심 있는 변수나 표현식을 추가하여 코드 실행 중 언제든지 해당 변수의 현재 값을 확인할 수 있습니다.

5. Call Stack
   **Call Stack(호출 스택)**은 현재 코드가 어떤 순서로 함수들을 호출했는지를 보여주는 기능입니다. 디버깅 중에 코드가 중단되었을 때, Call Stack을 통해 현재 실행 중인 함수가 어떤 함수들에 의해 호출되었는지 알 수 있습니다. 이를 통해 코드의 실행 경로를 추적하고, 문제의 원인을 파악할 수 있습니다.

6. Scope
   **Scope(스코프)**는 현재 중단점에서 접근할 수 있는 변수들의 목록과 그 값을 보여주는 기능입니다. Scope 패널을 통해 로컬 변수, 전역 변수, 클로저 등 다양한 스코프에 있는 변수들의 값을 확인할 수 있으며, 이를 통해 현재 상태를 이해하고 문제를 해결하는 데 도움을 줍니다.

7. Resume button
   **Resume 버튼**은 중단된 코드의 실행을 다시 시작하는 기능입니다. 중단점에서 코드를 확인한 후, Resume 버튼을 누르면 코드가 중단점 이후의 코드부터 계속 실행됩니다.

8. Step button
   **Step 버튼**은 코드의 한 줄 한 줄을 실행해 나가는 기능입니다. 코드의 흐름을 세밀하게 추적하고자 할 때 사용되며, 코드를 한 줄씩 실행하면서 그에 따른 상태 변화를 확인할 수 있습니다.

9. Step over button
   **Step over 버튼**은 현재 줄에서 함수가 호출되더라도, 그 함수의 내부로 들어가지 않고 함수 호출 이후의 다음 줄로 이동하는 기능입니다. 함수 내부의 동작은 신경 쓰지 않고, 결과만 확인하고자 할 때 유용합니다.

10. Step into button
    **Step into 버튼**은 현재 실행 중인 줄에서 함수가 호출될 때, 그 함수 내부로 들어가서 세부적으로 디버깅할 수 있는 기능입니다. 함수 내부의 동작을 하나하나 확인하고 싶을 때 사용됩니다.

11. Step out button
    **Step out 버튼**은 현재 디버깅 중인 함수의 실행을 완료하고, 그 함수를 호출한 곳으로 돌아가는 기능입니다. 함수 내부의 디버깅을 마치고 다시 상위 함수로 돌아가고자 할 때 사용합니다.

12. Enable/disable all breakpoints
    **모든 중단점 활성화/비활성화** 기능은 현재 설정된 모든 중단점을 한 번에 활성화하거나 비활성화할 수 있는 기능입니다. 디버깅 중에 모든 중단점을 일시적으로 끄거나 다시 켜고자 할 때 유용합니다.

13. Enable/disable automatic pause in case of an error
    **오류 발생 시 자동 일시정지 활성화/비활성화**는 코드 실행 중 오류가 발생할 때 자동으로 디버거가 실행되어 코드가 일시 중지되도록 설정하는 기능입니다. 이 기능을 활성화하면 오류가 발생한 시점에서 코드가 멈추고, 그 시점의 상태를 확인할 수 있습니다.
