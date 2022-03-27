window.addEventListener("load", function() {

var work = document.querySelectorAll("li");
work.forEach(item => {
  item.addEventListener('click', event => {

    for(var i = 0; i < work.length; i++){
      if(event.currentTarget != work[i]){
        work[i].style.visibility = "hidden";
        this.document.getElementById("arrow").style.display="inline-block";
        }
      }   
  }
)})
document.getElementById("li1").addEventListener("click", show1)
function show1(){
  document.getElementById("box1").style.display = "inline-block";
}
document.getElementById("li2").addEventListener("click", show2)
function show2(){
  document.getElementById("box2").style.display = "inline-block";
}
document.getElementById("li3").addEventListener("click", show3)
function show3(){
  document.getElementById("box3").style.display = "inline-block";
}
document.getElementById("li4").addEventListener("click", show4)
function show4(){
  document.getElementById("box4").style.display = "inline-block";
}
document.getElementById("li5").addEventListener("click", show5)
function show5(){
  document.getElementById("box5").style.display = "inline-block";
}
document.getElementById("li6").addEventListener("click", show6)
function show6(){
  document.getElementById("box6").style.display = "inline-block";
}
document.getElementById("li7").addEventListener("click", show7)
function show7(){
  document.getElementById("box7").style.display = "inline-block";
}
document.getElementById("li8").addEventListener("click", show8)
function show8(){
  document.getElementById("box8").style.display = "inline-block";
}
document.getElementById("li9").addEventListener("click", show9)
function show9(){
  document.getElementById("box9").style.display = "inline-block";
}
document.getElementById("li10").addEventListener("click", show10)
function show10(){
  document.getElementById("box10").style.display = "inline-block";
}
document.getElementById("li11").addEventListener("click", show11)
function show11(){
  document.getElementById("box11").style.display = "inline-block";
}
document.getElementById("li12").addEventListener("click", show12)
function show12(){
  document.getElementById("box12").style.display = "inline-block";
}
document.getElementById("li13").addEventListener("click", show13)
function show13(){
  document.getElementById("box13").style.display = "inline-block";
}
document.getElementById("li14").addEventListener("click", show14)
function show14(){
  document.getElementById("box14").style.display = "inline-block";
}
document.getElementById("li15").addEventListener("click", show15)
function show15(){
  document.getElementById("box15").style.display = "inline-block";
}
})