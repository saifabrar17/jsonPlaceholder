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
    .then(data => displayUsers(data));
}

function displayUsers(data){

    const ul = document.getElementById('users');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name} and Email: ${user.email}`;
        ul.appendChild(li);
    }
}