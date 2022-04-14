
function createUser(name, email) {

    fetch('http://localhost:3001/adduser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email}),
    })
    .then(response => {
        return response.text();
    })
}

function deleteUser(id) {
    fetch(`http://localhost:3001/deleteuser/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        return response.text();
    })
}

export {createUser, deleteUser}