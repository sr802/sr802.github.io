//html에서 만든거 받아오기
const toDoForm = document.getElementById("todo-form");
//const toDoInput = document.querySelector("#todo-form input");과 같은 거
const toDoInput = document.querySelector("#todo-form input");
//html에서 ul만든거 받아오기
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

//todo리스트 저장하기
function saveToDos(){
    //array를 stringd으로 변환
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    //뭐 클릭된건 알 수 있음
    const li = event.target.parentElement;
    //to do list 삭제버튼 누르면 삭제 되는 거
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.intterText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    //toDoInput 변수의 값을 새로 만들어줌
    const newTodo = toDoInput.value;
    //창에 입력하고 엔터누르고나면 입력한 내용 지우기
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); //사용자가 적어 둔 text를 push함
    //console.log(toDoInput.value);
    paintToDo(newTodoObj);
    saveToDos();
}    

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

function sayHello(){
    console.log("this is the turn of", item);
}


if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);    
}
//지우고 싶은 목록만 지우고 나머지는 그대로 둠 :filter 사용하기, true를 리턴해야 아이템 유지 됨
//function sexyFilter(){}
