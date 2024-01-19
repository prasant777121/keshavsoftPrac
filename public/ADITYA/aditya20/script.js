// Handlebars template
const source = document.getElementById('tableRowTemplate').innerHTML;
const template = Handlebars.compile(source);

let submitData = () => {
    var itemId = document.getElementById('itemId').value;
    var itemName = document.getElementById('itemName').value;
    var itemPrice = document.getElementById('itemPrice').value;

    // Validation (you can add more robust validation as needed)
    if (!itemId || !itemName || !itemPrice) {
      alert('Please fill in all fields');
      return;
    }

    // Create data object for the template
    const data = { itemId, itemName, itemPrice };

    // Render the template and append it to the table body
    var tableBody = document.getElementById('dataTableBody');
    tableBody.innerHTML += template(data);

    // Clear the form fields after submission
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
