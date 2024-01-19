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
    var newRow = tableBody.insertRow(tableBody.rows.length);
    newRow.insertCell(0).innerHTML = itemId;
    newRow.insertCell(1).innerHTML = itemName;
    newRow.insertCell(2).innerHTML = itemPrice;

    // Clear the form fields after submission
    document.getElementById('itemId').value = '';
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
};
