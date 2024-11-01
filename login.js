const BACKEND_URL = "http://localhost:3000"

const registerButton = document.querySelector("#register")
const connectionButton = document.querySelector("#connection")

registerButton.addEventListener("click", async function() {
    const user = {
        name: document.querySelector("#registerName").value,
        email: document.querySelector("#registerEmail").value,
        password: document.querySelector("#registerPassword").value,
    };

    const response = await fetch(`${BACKEND_URL}/users/signup`, {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(user)
    });

    const data = await response.json();
    if (data.result) {
        window.location.assign("index.html")
    }
})

connectionButton.addEventListener("click", async function() {
    const user = {
        email: document.querySelector("#connectionEmail").value,
        password: document.querySelector("#connectionPassword").value,
    };

    const response = await fetch(`${BACKEND_URL}/users/signin`, {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(user)
    });

    const data = await response.json();
    if (data.result) {
        window.location.assign("index.html")
    }
})