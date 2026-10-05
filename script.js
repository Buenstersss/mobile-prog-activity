function show(output, code){
document.getElementById("output").innerHTML = output;
document.getElementById("code").innerText = code;
}

function clearOutput(){
show("", "");
}

/* BACKGROUND TOGGLE */

let bgToggle = false;

function activity8(){

if(bgToggle){
document.body.style.backgroundColor = "#0f172a";
}else{
document.body.style.backgroundColor = "#334155";
}

bgToggle = !bgToggle;

show(
"Background switched (Kenneth).",
"Toggle between #0f172a and #334155"
);
}

/* DARK MODE */

function activity9(){

document.body.classList.toggle("dark-mode");

show(
"Dark mode enabled/disabled (Kenneth).",
"classList.toggle('dark-mode')"
);
}

/* ADD LIST ITEM */

function activity10(){

let newItem = document.createElement("li");
newItem.textContent = "Kenneth's Item";

document.getElementById("list").appendChild(newItem);

show(
"New item added.",
"createElement('li')"
);
}

/* REMOVE PARAGRAPH */

function activity11(){

let textPara = document.getElementById("paragraph");

if(textPara){
textPara.remove();
show("Text removed successfully.","remove()");
}else{
show("Text already removed.","No element");
}
}

/* CHARACTER COUNTER */

function activity12(){

let userText = document.getElementById("textInput");

show(
"Total characters: " + userText.value.length,
"value.length"
);
}

/* ADDITION CALCULATOR */

function activity13(){

let first = Number(document.getElementById("num1").value) || 0;
let second = Number(document.getElementById("num2").value) || 0;

let totalSum = first + second;

show(
"Answer: " + totalSum,
"first + second"
);
}

/* CHANGE IMAGE */

let imgSwitch = false;

function activity14(){

let picture = document.getElementById("image");

if(imgSwitch){
picture.src = "image1.jpg";
}else{
picture.src = "image2.jpg";
}

imgSwitch = !imgSwitch;

show(
"Image changed.",
"Switch image source"
);
}

/* MINI TODO */

function activity15(){

let userTask = prompt("Enter your task:");

if(userTask){
let taskItem = document.createElement("li");
taskItem.textContent = userTask;

document.getElementById("list").appendChild(taskItem);

show(
"Added task: " + userTask + " (Kenneth)",
"createElement('li')"
);
}
}