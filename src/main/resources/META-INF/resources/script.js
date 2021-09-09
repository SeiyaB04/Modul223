const URL = 'http://localhost:8080';
let entries = [];
let users = [];

const dateAndTimeToDate = (dateString, timeString) => {
    return new Date(`${dateString}T${timeString}`).toISOString();
};

const createEntry = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entry = {};
    entry['checkIn'] = dateAndTimeToDate(formData.get('checkInDate'), formData.get('checkInTime'));
    entry['checkOut'] = dateAndTimeToDate(formData.get('checkOutDate'), formData.get('checkOutTime'));

    fetch(`${URL}/entries`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entry)
    }).then((result) => {
        result.json().then((entry) => {
            entries.push(entry);
            renderEntries();
        });
    });
};

const indexEntries = () => {
    fetch(`${URL}/entries`, {
        method: 'GET'
    }).then((result) => {
        result.json().then((result) => {
            entries = result;
            renderEntries();
        });
    });
    renderEntries();
};

const createCell = (text) => {
    const cell = document.createElement('td');
    cell.innerText = text;
    return cell;
};

const renderEntries = () => {
    const display = document.querySelector('#entryDisplay');
    display.innerHTML = '';
    entries.forEach((entry) => {
        const row = document.createElement('tr');
        row.appendChild(createCell(entry.id));
        row.appendChild(createCell(new Date(entry.checkIn).toLocaleString()));
        row.appendChild(createCell(new Date(entry.checkOut).toLocaleString()));
        display.appendChild(row);
    });
};

document.addEventListener('DOMContentLoaded', function(){
    const createEntryForm = document.querySelector('#createEntryForm');
    createEntryForm.addEventListener('submit', createEntry);
    indexEntries();
});

const register = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const register = {};
    register['username'] = (formData.get('registerUsername'));
    register['password'] = (formData.get('registerPassword'));

    fetch(`${URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(register)
    }).then((result) => {
        result.json().then((register) => {
            users.push(register);
            renderUser();
        });
    });
};

const renderUser = () => {
    const display = document.querySelector('#userDisplay');
    display.innerHTML = '';

    users.forEach((user) => {
        const row = document.createElement('tr');
        row.appendChild(createCell(user.id));
        row.appendChild(createCell(user.username));
        row.appendChild(createCell(user.password));
        display.appendChild(row);
    })
};

document.addEventListener('DOMContentLoaded', function(){
    const registerForm = document.querySelector('#registerForm');
    registerForm.addEventListener('submit', register);
    indexEntries();
});

/*const login = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const login = {};
    login['username'] = (formData.get('loginUsername'));
    login['password'] = (formData.get('loginPassword'));

    if (login['username'] == )

    fetch(`${URL}/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(register)
    }).then((result) => {
        result.json().then((register) => {
            users.push(register);
            renderUser();
        });
    });
};

 */