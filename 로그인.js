let loginBtn = document.querySelector(".loginBtn"); //로그인버튼 요소를 가져올거다

loginBtn.addEventListener("click", function () {
  let inputId = document.querySelector(".id").value;
  let inputPw = document.querySelector(".pw").value;
  if (inputId.includes("@") && inputPw.length > 5) {
    document.querySelector(".loginBtn").style.background = "blue";
    let link = "실습과제2.html"; //조대리님
    location.href = link; //조현손 대리님이 성공
  } else {
    alert("아이디와 암호를 다시 확인 후 입력해 주세요");
    /* document.querySelector(".loginBtn").style.background = "default"; */
    return;
  } //경고창 뜨고 페이지 넘어가지 않게
});
