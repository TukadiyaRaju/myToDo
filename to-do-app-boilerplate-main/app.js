var todo =[];

const input = document.getElementById('input');
const todolist= document.getElementById('todolist');

document.getElementById('button').onclick=click;

function click() {
    if (input.value=='') {
        alert ("Please input a task first")
    }
    else {
        todo.push(input.value);
        input.value="";
        display();
    }
}

function display() {
    todolist.innerHTML="";
    todo.forEach (function (item,index) {
        todolist.innerHTML += `<li> ${item} <a onclick='edit(${index})'>Edit</a> <a onclick='del(${index})'>&times &nbsp &nbsp| &nbsp&nbsp&nbsp </a></li>`;
    })
}

function del(i) {
    todo.splice(i,1);
    display();
}

function edit(i) {
var newEntry= prompt("Insert the new Task");
todo.splice(i,1,newEntry);
display();
}