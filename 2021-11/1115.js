#radio버튼에서 값 가져오기!

<body>

<h2>점수</h2>
  1<input type="radio" name="score" value="1">
  2<input type="radio" name="score" value="2">
  3<input type="radio" name="score" value="3">
  4<input type="radio" name="score" value="4">
  5<input type="radio" name="score" value="5">
  6<input type="radio" name="score" value="6">
  7<input type="radio" name="score" value="7">
  
<input type="button" value="전송" id="send" class="btn">

<div id="print">
</div>
</body>

#input태그에서 name이 같은 것들은 같은 배열로 저장되게 해준다.

<script>

window.onload = function() {
document.getElementById('send').onclick = function(){

var s = document.getElementsByName('score');
var score =''; 
for(var i=0; i<s.length; i++) {
    if(s[i].checked == true) {
        score = s[i].value;
    }
}
var result = '';
result =result + score;

document.getElementById('print').innerHTML = result;
}
}

</script>

#name을 같은 배열로 묶어주는 기능을 이용해서 몇번째요소에서 체크가 되었는지 확인해 score에 저장하게 되는 시스템이다.
