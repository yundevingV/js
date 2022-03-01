1.라디오 클릭시 클릭한 값 바로 출력하기.

index.html
<input type="radio" value="female" name="gender" onclick="GenderCheck(event)">여성</input>
<input type="radio" value="male" name="gender" onclick="GenderCheck(event)">남성</input>
 
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
