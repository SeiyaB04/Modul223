const URL = 'http://localhost:8080';
let users = [];


//Login----------------------------------------------------------------------------------------------

const register = (e) => {
    e.preventDefault();
    const register = {};
    const formData = new FormData(document.getElementById('registerForm'));

    register['username'] = formData.get('registerUsername');
    register['password'] = formData.get('registerPassword');

    fetch(`${URL}/auth/signUp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(register)
    });
};

document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.querySelector('#registerForm');
    registerForm.addEventListener('submit', register);
});

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener('submit', login);
});


async function login(e) {
    e.preventDefault();
    const formData = new FormData(document.getElementById('loginForm'));

    const login = {};
    login['username'] = (formData.get('loginUsername'));
    login['password'] = (formData.get('loginPassword'));

    const response = await fetch(`${URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(login)
    });

    let jwt;
    jwt = await response.json();

    if (jwt != null) {
        localStorage.setItem('token',jwt.token);
        location.replace('http://localhost:8080/entries.html');
    }
}

function logout() {
    localStorage.clear();
    location.replace('http://localhost:8080/index.html');
}


