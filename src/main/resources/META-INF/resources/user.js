const URL = 'http://localhost:8080';
let users = [];

const createUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = {};
    user['username'] = document.getElementById("createUsername").value;
    user['password'] = document.getElementById("createPassword").value;

    fetch(`${URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(user)
    }).then((result) => {
        result.json().then((user) => {
            users.push(user);
            renderUsers();
        });
    });
};

const indexUsers = () => {
    fetch(`${URL}/users`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then((result) => {
        result.json().then((result) => {
            users = result;
            renderUsers();
        });
    });
    renderUsers();
};

const createCell = (text) => {
    const cell = document.createElement('td');
    cell.innerText = text;
    return cell;
};

const renderUsers = () => {
    const display = document.querySelector('#userDisplay');
    display.innerHTML = '';
    users.forEach((user) => {
        const row = document.createElement('tr');
        row.appendChild(createCell(user.id));
        row.appendChild(createCell(user.username));
        row.appendChild(createCell(user.password));
        display.appendChild(row);
    });
};

document.addEventListener('DOMContentLoaded', function () {
    const createUserForm = document.querySelector('#createUserForm');
    createUserForm.addEventListener('submit', createUser);
    indexUsers();
});

document.addEventListener('DOMContentLoaded', function () {
    const deleteUserForm = document.querySelector('#deleteUserForm');
    deleteUserForm.addEventListener('submit', deleteUser);
    indexUsers();
});

function deleteUser() {

    let id = document.getElementById("deleteUserId").value;


    fetch(`${URL}/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then((result) => {
        renderUsers();
    });

    console.log("Funktiioniert");
}

document.addEventListener('DOMContentLoaded', function () {
    const updateUserForm = document.querySelector('#updateUserForm');
    updateUserForm.addEventListener('submit', updateUser);
    indexUsers();
});

const updateUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = {};
    user['id'] = document.getElementById("updateUserId").value
    user['username'] = document.getElementById("updateUsername").value;
    user['password'] = document.getElementById("updatePassword").value;

    fetch(`${URL}/users/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(user)
    }).then((result) => {
        indexUsers();
    });
};