// console.log('app.js')
// Data format gulu Object or Array akare likha jabe.
function loadData2()
{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res =>res.json())
    .then(data => console.log(data));
    
}
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then(result =>console.log(result));
}

function loadData3(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response2 => response2.json())
    .then(result2 =>helloUsers(result2))
}

function helloUsers(result2){
    console.log(result2);
}