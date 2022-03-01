#radio

라디오 버튼은 여러 개의 항목 중에서 하나만 선택하도록 하는 동그란 버튼을 라디오 버튼이라고 합니다.
반대로 여러 개의 항복 중에 모두 선택할 수 있는 버튼인 체크박스도 존재합니다.

1.라디오 클릭시 클릭한 값 바로 출력하기.

index.html
<input type="radio" value="female" name="gender" id="g">
<label for="g">여성</label>
<input type="radio" value="male" name="gender" id="g1">
<label for="g1">남성</label>
 
<div id="result"></div>

html코드를 이렇게 작성합니다.
여기서 value는 input태그가 가지고있는 데이터값입니다. 

Radio.js
r = document.getElementById('result')

function GenderCheck (event) {
r.innerHTML= event.target.value;
}

document.getElementById('result')를 통해 html코드에서 id를 result 요소를 가져와줍니다.
그리고 함수를 생성해 innerHTML로 result에 그 값을 출력하게 해줍니다.

2. 라디오 버튼 값을 선택한 후, 출력 버튼 클릭시 값 출력하기

index.html
 <input type="radio" value="female" name="gender" id="g">
<label for="g">여성</label>
<input type="radio" value="male" name="gender" id="g1">
<label for="g1">남성</label>

<button onclick="GenderCheck()">확인하기</button>

Radio.js
function GenderCheck() {

    const gender = document.getElementsByName('gender');
    let r =document.getElementById('result');
    gender.forEach((a) => {
        if(a.checked) {
            r.innerHTML = a.value;
        }
    })
}
const gender = document.getElementsByName('gender');
을 통해 라디오버튼 목록을 다 gender라는 변수에 저장합니다.
forEach구문을 통해서 gender목록을 순회하면서 체크되어있는값이면 value값을 출력하게끔합니다.



출처: https://hianna.tistory.com/426
