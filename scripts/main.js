// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');
myImage.onclick = function(){
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/firefox-icon2.jpg')
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png')
  }
}

function setUserName() {
  var myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.textContent = "Mozilla はすばらしいよ、" + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = "Mozilla はすばらしいよ、" + storedName;
}

myButton.onclick = function() {
  setUserName();
}
