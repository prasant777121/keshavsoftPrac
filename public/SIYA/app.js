// Local storage save function
function saveToLocal(username, password) {
    const userData = {
        username: username,
        password: password
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Data saved to local storage!');
}

// Function to handle button click and save to local storage
function saveData() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    saveToLocal(username, password);
}
