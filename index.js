// console.log('Inside index.js');func
function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(result => displayUsers2(result));
}
function displayUsers2(result){
    const ul = document.getElementById('users-list');
   for ( const user of result){
    console.log(user.name);
    const li = document.createElement('li');
    li.innerText = user.name;
    ul.appendChild(li);
   }
}