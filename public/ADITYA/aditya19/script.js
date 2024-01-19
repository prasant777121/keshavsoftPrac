


let submitData = () => {
    var itemId = document.getElementById('itemId').value;
    var itemName = document.getElementById('itemName').value;
    var itemPrice = document.getElementById('itemPrice').value;

    // Validation (you can add more robust validation as needed)
    if (!itemId || !itemName || !itemPrice) {
      alert('Please fill in all fields');
      return;
    }

    // Add data to the table
    var tableBody = document.getElementById('dataTableBody');

    // Create a new row
    var newRow = document.createElement('tr');

    // Create three td elements and append them to the row
    var tdItemId = document.createElement('td');
    tdItemId.innerHTML = itemId;
    newRow.appendChild(tdItemId);

    var tdItemName = document.createElement('td');
    tdItemName.innerHTML = itemName;
    newRow.appendChild(tdItemName);

    var tdItemPrice = document.createElement('td');
    tdItemPrice.innerHTML = itemPrice;
    newRow.appendChild(tdItemPrice);

    // Append the row to the table body
    tableBody.appendChild(newRow);

    // Save the data to IndexedDB
    saveToIDB(itemId, itemName, itemPrice);

  
    jFClearDom();
};



const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', () => {
  submitData();
});




let jFClearDom = () => {
  
    // Clear the form fields after submission
    document.getElementById('itemId').value = '';
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';

};


