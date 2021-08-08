<!--cons loginForm = document.getElementById("login-form");
<!--cons loginInput = loginForm.querySelector("input");<!--로그인 폼에서 바로 찾을 수 있음
<!--cons loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //반복되어 사용되는 String을 오타없이 쓸 수 있게 해줌
const USERNAME_KEY = "username"; //반복되어 사용되는 String을 오타없이 쓸 수 있게 해줌

<!--const loginButton = document.querySelector("#login-form button");

<!--로그인 클릭 버튼을 실행할 함수 만들어줌, 클릭버튼 누르면 콘솔에 click뜸



function onLoginSubmit(event){
    event.preventDefault(); <!--preventDefault 함수 호출하기
    loginForm.classList.add(HIDDEN_CLASSNAME);<!-- form에 값 입력 된 후에는 폼 형식이 없어짐
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);<!-- username 받아옴
    paintGreeting(username);
  // greeting.innerText = "Hello " + username;<!-- 로그인 창에 텍스트 입력시 뜨는 문구
  // greeting.innerText = `Hello ${username}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);<!--버튼 누르면 문구는 뜨고 입력창은 사라짐
}

function paintGreeting(username){
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);//이름이 입력되지 않으면 HIDDEN_CLASSNAME를 지움
    loginForm.addEventListener("submit", onLoginSubmit);//입력 된 값이 없으니 입력 폼을 다시 보여줌
}else{
    //위에 함수 만들어준거 호출해주기
    paintGreeting(savedUsername);
   // greeting.classList.remove(HIDDEN_CLASSNAME);//이름이 입력되면 폼지우고
    //greeting.innerText = `Hello ${savedUsername}`;//문구를 출력함
}
console.log(savedUsername);


<!-- () 를 추가할 경우 브라우저가 자동으로 이 function을 실행시킴 :onLoginSubmit();
onLoginSubmit();

<!-- loginButton.addEventListener("click",onLoginBtnClick);<!--로그인 클릭 이벤트 버튼 만들어줌