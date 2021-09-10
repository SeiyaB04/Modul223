const URL = 'http://localhost:8080';
let entries = [];

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
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
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
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then((result) => {
        result.json().then((result) => {
            entries = result;
            renderEntries();
        });
    });
    renderEntries();
};

const createEntryCell = (text) => {
    const cell = document.createElement('td');
    cell.innerText = text;
    return cell;
};

const renderEntries = () => {
    const display = document.querySelector('#entryDisplay');
    display.innerHTML = '';
    entries.forEach((entry) => {
        const row = document.createElement('tr');
        row.appendChild(createEntryCell(entry.id));
        row.appendChild(createEntryCell(new Date(entry.checkIn).toLocaleString()));
        row.appendChild(createEntryCell(new Date(entry.checkOut).toLocaleString()));
        display.appendChild(row);
    });
};

document.addEventListener('DOMContentLoaded', function () {
    const createEntryForm = document.querySelector('#createEntryForm');
    createEntryForm.addEventListener('submit', createEntry);
    indexEntries();
});

document.addEventListener('DOMContentLoaded', function () {
    const deleteEntryForm = document.querySelector('#deleteEntryForm');
    deleteEntryForm.addEventListener('submit', deleteEntry);
    indexEntries();
});

function deleteEntry() {

    let id = document.getElementById("deleteId").value;


    fetch(`${URL}/entries/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then((result) => {
        renderEntries();
    });

    console.log("Funktiioniert");
}

document.addEventListener('DOMContentLoaded', function () {
    const updateEntryForm = document.querySelector('#updateEntryForm');
    updateEntryForm.addEventListener('submit', updateEntry);
    indexEntries();
});

const updateEntry = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entry = {};
    entry['id'] = document.getElementById("updateId").value
    entry['checkIn'] = dateAndTimeToDate(formData.get('updateCheckInDate'), formData.get('updateCheckInTime'));
    entry['checkOut'] = dateAndTimeToDate(formData.get('updateCheckOutDate'), formData.get('updateCheckOutTime'));

    fetch(`${URL}/entries/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(entry)
    }).then((result) => {
        indexEntries();
    });
};