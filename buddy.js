const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();
const displayBuddies = (data) => {
    // console.log(data);
    const buddies = data.results;
    const buddyDiv = document.getElementById('buddies');

    for(const buddy of buddies){
        console.log(buddy.email);

        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.first} ${buddy.name.last}
        Email: ${buddy.email}`;
        buddyDiv.appendChild(p);
    }
}