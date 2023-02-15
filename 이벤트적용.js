//하트(좋아요) 누르면 이미지 바뀌고 & 하트 갯수 증가했다가,
//동일사용자(you)가 또 좋아요 누르면 모두 해제처리

let love = document.querySelector(".love"); //텅빈 하트의 요소를 가져오겠단 의미
let count = 1057;
let you = 1;

love.onclick = changeLove; //love를 클릭하면 아래 함수를 실행하겠단 의미

function changeLove() {
  if (you == 1) {
    love.src = "실습과제 이미지/redlove.png";
    you++;
    count += 1;
    document.querySelector(".good").innerHTML = "좋아요 " + count + "개";
  } else {
    love.src = "실습과제 이미지/하트.png";
    you--;
    count -= 1;
    document.querySelector(".good").innerHTML = "좋아요 " + count + "개";
  }
}

//작은하트
let lovelove = document.querySelector(".lovelove"); //텅빈 작은하트 이미지 요소를 가져오겠단 의미
let me = 1;

//하트 이모티콘을 클릭하면 아래 함수를 실행하겠단 의미
lovelove.onclick = changelove;

function changelove() {
  if (me == 1) {
    lovelove.src = "실습과제 이미지/redlove.png";
    me++;
  } else {
    lovelove.src = "실습과제 이미지/하트.png";
    me--;
  }
}

//북마크 설정했다가 해제가능한 기능
let iven = document.querySelector(".iven"); //텅빈 북마크 이미지 요소를 가져오겠단 의미
let my = 1;

//보관 이모티콘을 클릭하면 아래 함수를 실행하겠단 의미
iven.onclick = changeIven;

function changeIven() {
  if (my == 1) {
    iven.src = "실습과제 이미지/iven.png";
    my++;
  } else {
    iven.src = "실습과제 이미지/북마크.png";
    my--;
  }
}

//프로필사진 클릭 시 라이트박스 효과표현
let boxs = document.getElementsByClassName("box"); // 프로필(박스) 클릭하면 이것들을 boxs라고 부르겠다
let lightbox = document.getElementById("lightbox"); // 라이트박스 요소도 가져오겠다
let lightboximg = document.getElementById("lightboximg"); // 라이트박스 이미지 요소를 가져옴

for (i = 0; i < boxs.length; i++) {
  boxs[i].addEventListener("click", showlightbox); //boxs 배열 i번째 요소를 클릭하면 쇼라이트박스 함수를 실행시켜랏
}
function showlightbox() {
  let bigLocation = this.getAttribute("data-src");
  lightboximg.setAttribute("src", bigLocation);
  lightbox.style.display = "block";
}

lightbox.onclick = function () {
  lightbox.style.display = "none";
}; // 박스 감추기
