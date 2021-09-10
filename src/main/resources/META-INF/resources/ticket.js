const URL = 'http://localhost:8080';
let tickets = [];

const createTicket = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const ticket = {};
    ticket['ticketName'] = document.getElementById("createTicketname").value

    console.log("" + document.getElementById("createTicketname").value);

    fetch(`${URL}/tickets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(ticket)
    }).then((result) => {
        result.json().then((ticket) => {
            tickets.push(ticket);
            renderTickets();
        });
    });
};

const indexTickets = () => {
    fetch(`${URL}/tickets`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then((result) => {
        result.json().then((result) => {
            tickets = result;
            renderTickets();
        });
    });
    renderTickets();
};

const createCell = (text) => {
    const cell = document.createElement('td');
    cell.innerText = text;
    return cell;
};

const renderTickets = () => {
    const display = document.querySelector('#ticketDisplay');
    display.innerHTML = '';
    tickets.forEach((ticket) => {
        const row = document.createElement('tr');
        row.appendChild(createCell(ticket.id));
        row.appendChild(createCell(ticket.ticketName));
        display.appendChild(row);
    });
};

const ticketSelection = () => {
    const display = document.querySelector('#ticketSelection');
    display.innerHTML = '';
    tickets.forEach((ticket) => {
        const option = document.createElement('option').text = ticket.ticketName;
        option.setAttribute("value", ticket.id);
        document.getElementById("setTicket").appendChild(option);
    });
};


document.addEventListener('DOMContentLoaded', function () {
    const createTicketForm = document.querySelector('#createTicketForm');
    createTicketForm.addEventListener('submit', createTicket);
    indexTickets();
});

document.addEventListener('DOMContentLoaded', function () {
    const deleteTicketForm = document.querySelector('#deleteTicketForm');
    deleteTicketForm.addEventListener('submit', deleteTicket);
    indexTickets();
});

function deleteTicket() {

    let id = document.getElementById("deleteTicketId").value;


    fetch(`${URL}/tickets/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then((result) => {
        renderTickets();
    });

    console.log("Funktiioniert");
}

document.addEventListener('DOMContentLoaded', function () {
    const updateTicketForm = document.querySelector('#updateTicketForm');
    updateTicketForm.addEventListener('submit', updateTicket);
    indexTickets();
});

const updateTicket = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const ticket = {};
    ticket['id'] = document.getElementById("updateTicketId").value
    ticket['ticketName'] = document.getElementById("updateTicketname").value;

    fetch(`${URL}/tickets/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(ticket)
    }).then((result) => {
        indexTickets();
    });


};