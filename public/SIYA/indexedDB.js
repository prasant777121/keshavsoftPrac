// Function to add data to indexedDB
function addToDB(username, password) {
    const openRequest = indexedDB.open('UserDataDB', 1);

    openRequest.onupgradeneeded = function (event) {
        const db = event.target.result;

        // Create object store
        const objectStore = db.createObjectStore('userData', { keyPath: 'id', autoIncrement: true });

        // Create indexes
        objectStore.createIndex('username', 'username', { unique: false });
        objectStore.createIndex('password', 'password', { unique: false });
    };

    openRequest.onsuccess = function (event) {
        const db = event.target.result;

        const transaction = db.transaction(['userData'], 'readwrite');
        const objectStore = transaction.objectStore('userData');

        const addRequest = objectStore.add({ username: username, password: password });

        addRequest.onsuccess = function () {
            alert('Data saved to indexedDB!');
        };

        addRequest.onerror = function () {
            console.error('Error adding data to indexedDB');
        };
    };
};

// Function to handle button click and save to indexedDB
function saveData() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    addToDB(username, password);
};

let jFaddToDB = (username, password) => {
    const openRequest = indexedDB.open('UserDataDB', 1);

    openRequest.onsuccess = function (event) {
        const db = event.target.result;

        const transaction = db.transaction(['userData'], 'readwrite');
        const objectStore = transaction.objectStore('userData');

        const addRequest = objectStore.add({ username: username, password: password });

        addRequest.onsuccess = function () {
            alert('Data saved to indexedDB!');
        };

        addRequest.onerror = function () {
            console.error('Error adding data to indexedDB');
        };
    };
};

let jFReadData = () => {
    const openRequest = indexedDB.open('UserDataDB', 1);

    openRequest.onsuccess = function (event) {
        const db = event.target.result;

        const transaction = db.transaction(['userData'], 'readwrite');
        const objectStore = transaction.objectStore('userData');
        const request = objectStore.get(1);

        request.onsuccess = (event) => {
            // Do something with the request.result!
            console.log(`Name for SSN 444-44-4444 is ${event.target.result.username}`);
        };
    };
};

let jFReadDataFromInput = ({ inId }) => {
    const openRequest = indexedDB.open('UserDataDB', 1);

    openRequest.onsuccess = function (event) {
        const db = event.target.result;

        const transaction = db.transaction(['userData'], 'readwrite');
        const objectStore = transaction.objectStore('userData');
        const request = objectStore.get(inId);

        request.onsuccess = (event) => {
            // Do something with the request.result!
            console.log(`Name for SSN 444-44-4444 is ${event.target.result.username}`);
        };
    };
};
