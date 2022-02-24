function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => console.log(response))
}

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(res => console.log(res));
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => console.log(res));
}