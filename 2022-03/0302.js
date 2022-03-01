index.html
<html>

<head>

<style>
.wrapping{
  margin: auto;
  width: 70%;
  background-color: aliceblue;
}
.title{
  font-weight: bold;
  text-align: center;
  color: rgb(24, 83, 134);
}
.dropdown{
  position : relative;
  display : inline-block;  
}
.dropdown{
  display : block;
  border : 2px solid rgb(94, 94, 94);
  border-radius : 4px;
  background-color: #fcfcfc;
  font-weight: 400;
  color : rgb(124, 124, 124);
  padding : 12px;
  width :240px;
  text-align: left;
  cursor : pointer;
  font-size : 12px;
  position : relative;
}
.dropdown-content{
  display : none;
  font-weight: 400;
  background-color: #fcfcfc;
  min-width : 240px;
  border-radius: 8px;
  height : 160px;
  overflow : scroll;
  box-shadow: 0px 0px 10px 3px rgba(190, 190, 190, 0.6);
}
.dropdown-content::-webkit-scrollbar{
  width : 5px;
  height : 10px;
}
.dropdown-content::-webkit-scrollbar-thumb{
  border-radius : 2px;
  background-color :rgb(194, 194, 194)
}

.dropdown-content div{
  display : block;
  text-decoration : none;
  color : rgb(37, 37, 37);
  font-size: 12px;
  padding : 12px 20px;
}
.dropdown-content div:hover{
  background-color: rgb(226, 226, 226);
}

.dropdown-content.show{
  display : block;
}
</style>  
</head>
<body>
<div class="wrapping">
  
<div class="title">
생년월일을 선택하시오.
</div>
<div class="dropdown">

<button class="dropdown">
  <span class="inner"> </span>

<span class="dropdown-text">년도를 고르시오.</span>
<span class="dropdown-btn" onclick="dropdown()">🔽</span>
</button>

<div class="dropdown-content">
<div class="years" onclick="showYear(this.innerText)">2010</div>
<div class="years" onclick="showYear(this.innerText)">2011</div>
<div class="years" onclick="showYear(this.innerText)">2012</div>
<div class="years" onclick="showYear(this.innerText)">2013</div>
<div class="years" onclick="showYear(this.innerText)">2014</div>
<div class="years" onclick="showYear(this.innerText)">2015</div>
<div class="years" onclick="showYear(this.innerText)">2016</div>
<div class="years" onclick="showYear(this.innerText)">2017</div>
<div class="years" onclick="showYear(this.innerText)">2018</div>
<div class="years" onclick="showYear(this.innerText)">2019</div>
<div class="years" onclick="showYear(this.innerText)">2020</div>
<div class="years" onclick="showYear(this.innerText)">2021</div>
<div class="years" onclick="showYear(this.innerText)">2022</div>
</div>
</div>
</div>
<script src="DropDown.js">

</script>
</body>
</html>

DropDown.js


dropdown = () => {
  var v = document.querySelector('.dropdown-content');
  v.classList.toggle('show');
  let dropdownBTN = document.querySelector('.dropdown')
  dropdownBTN.style.borderColor = 'red'
}

showYear = (value) => {
  let i = document.querySelector('.inner')
  i.innerText = ''
  let a = document.querySelector('.dropdown-text')
  a.innerText = value
}
