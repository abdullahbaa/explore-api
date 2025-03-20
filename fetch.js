// console.log('Fetching');
// Senario-1
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json()) //.JSON is not similar but close to JSON.Parse()
      .then(json => console.log(json))

// Senario-2
    const url ='https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))

// Senario-3
function loadData(){
    const url ='https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}
