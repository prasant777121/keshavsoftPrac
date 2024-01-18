// Function to open IndexedDB database
function openDatabase() {
    return new Promise((resolve, reject) => {
        const openRequest = indexedDB.open('UserDataDB', 1);

        openRequest.onerror = function(event) {
            reject(event.target.error);
        };

        openRequest.onsuccess = function(event) {
            const db = event.target.result;
            resolve(db);
        };

        openRequest.onupgradeneeded = function(event) {
            const db = event.target.result;

            // Create an object store named 'userData'
            const objectStore = db.createObjectStore('userData', { keyPath: 'id', autoIncrement: true });

            // Create indexes for username and password
            objectStore.createIndex('username', 'username', { unique: false });
            objectStore.createIndex('password', 'password', { unique: false });
        };
    });
}

// Function to insert user data into IndexedDB
function insertUserData() {
    const username = document.getElementById('insertUsername').value;
    const password = document.getElementById('insertPassword').value;

    openDatabase().then(db => {
        const transaction = db.transaction(['userData'], 'readwrite');
        const objectStore = transaction.objectStore('userData');

        const userData = { username, password };
        objectStore.add(userData);

        transaction.oncomplete = function() {
            alert('User data inserted successfully!');
        };

        transaction.onerror = function(event) {
            console.error('Error inserting user data:', event.target.error);
        };
    });
}

// Function to fetch all usernames and passwords from IndexedDB
function fetchAllUserData() {
    return new Promise((resolve, reject) => {
        openDatabase().then(db => {
            const transaction = db.transaction(['userData'], 'readonly');
            const objectStore = transaction.objectStore('userData');

            const usersData = [];

            // Open a cursor to iterate over all records in the object store
            const cursorRequest = objectStore.openCursor();
            cursorRequest.onsuccess = function(event) {
                const cursor = event.target.result;
                if (cursor) {
                    usersData.push({ username: cursor.value.username, password: cursor.value.password });
                    cursor.continue();
                } else {
                    resolve(usersData);
                }
            };

            cursorRequest.onerror = function(event) {
                reject(event.target.error);
            };
        });
    });
}

// Function to populate the dropdown with usernames and passwords
function populateDropdown() {
    fetchAllUserData().then(usersData => {
        const dropdown = document.getElementById('userDropdown');
        dropdown.innerHTML = '';  // Clear existing options

        usersData.forEach(userData => {
            const option = document.createElement('option');
            option.value = userData.username;
            option.text = ${userData.username} (${userData.password});
            dropdown.appendChild(option);
        });
    }).catch(error => {
        console.error('Error fetching user data:', error);
    });
}

// Function to get user data and display it
function getUserDataAndPopulateForm() {
    const selectedUsername = document.getElementById('userDropdown').value;

    fetchAllUserData().then(usersData => {
        const selectedUserData = usersData.find(userData => userData.username === selectedUsername);

        if (selectedUserData) {
            document.getElementById('userDataDisplay').innerText = Password for ${selectedUserData.username}: ${selectedUserData.password};
        } else {
            document.getElementById('userDataDisplay').innerText = 'User not found';
        }
    }).catch(error => {
        console.error('Error fetching user data:', error);
    });
}

// Fetch usernames on page load
populateDropdown();