// get date 
const date = new Date();
const newDate = document.getElementById('show-date');
newDate.innerText = date.toLocaleDateString();

// set buyer info to invoice 

document.getElementById('detail-submit-btn').addEventListener('click', function(){
    const getBuyerName = document.getElementById('buyer-details-input');
    const buyerName = getBuyerName.value;
    // get invoice id where to set buyer name
    const invoiceId = document.getElementById('buyer-info');
    invoiceId.innerText = buyerName;
    getBuyerName.value = '';
})

// set invoice number 
// function for if the number is less than four digit 
function getNumber(){
    const number = generateNumber();
    const numberString = number + '';
    if(numberString.length !== 3){
        return number;
    }
    else{
        return getNumber();
    }
}
// generate random number and get date 
function generateNumber(){
    const date = new Date();
    const day = date.getDate();
    const month = (date.getMonth() + 1);
    const year = date.getFullYear();
    const randomNumber = Math.round(Math.random()*1000);
    const invoiceNumber = `${day}${month}${year}-${randomNumber}`;
    return invoiceNumber;
}
// window onload for reload the browser and generate new random number on each reload
window.onload = function(){
    const number = getNumber();
    const getInvoiceId = document.getElementById('invoice-number');
    getInvoiceId.innerText = number;
}

// get the input details and set it to invoice field 

const addBtn = document.getElementById('add-details-btn');
addBtn.addEventListener('click', function(){
    // get insert table id 
    const getTableId = document.getElementById('info-table');
    // Get the current row number
     const rowNumber = getTableId.rows.length + 1;

    // Create a new row.
    const newRow = document.createElement("tr"); 
    
     // Add a cell for the row number.
    const rowNumberCell = document.createElement("td");
    rowNumberCell.textContent = rowNumber;
    newRow.appendChild(rowNumberCell);

    // Add cells for the product name and price.
    const productNameCell = document.createElement("td");
    // get product name form input
    const getProductName = document.getElementById('item-name-input');
    const productName = getProductName.value
    // set product name into table cell
    productNameCell.textContent = productName;
    newRow.appendChild(productNameCell);

    // set product quantity
    const productPriceCell = document.createElement("td");
    // get product quantity from input 
    const getProductQuantity = document.getElementById('item-quantity-input');

    const productQuantity = getProductQuantity.value;

    // set the value into table cell 
    productPriceCell.textContent = `${productQuantity} Pcs`;
    newRow.appendChild(productPriceCell);

    // Add the new row to the table.
    getTableId.appendChild(newRow);

    // empty the input fields after update on table 
    getProductName.value = '';
    getProductQuantity.value = '';
})