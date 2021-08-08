const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

//이미지 랜덤으로 가져오기
const chosenImage = images[Math.floor(Math.random()* images.length)];

//콘솔에 이미지 이름 나오게 함
console.log(chosenImage);

//자바스크립트에서 이미지 추가하기
const bgImage = document.createElement("img");

//이미지 불러오기
bgImage.src = `img/${chosenImage}`;
console.log(bgImage);

//body에 html 추가해줌
document.body.appendChild(bgImage);