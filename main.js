//텍스트 타이핑.
const content = "Allow me to introduce myself ! \n 김동기를 소개하겠습니다.";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}

setInterval(typing, 230)

//상단 표시줄 
window.onscroll = function() {createPrograssBar()}; 
function createPrograssBar() { 
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;   
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
var scrolled = (winScroll / height) * 100; document.getElementById("indicator").style.width = scrolled + "%"; 
} 


//top버튼 생성
btnScrollToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });
  