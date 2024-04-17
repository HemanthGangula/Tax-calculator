function toCurrency(number, currency, countryCode) {
    var locale;
    switch (countryCode) {
        case 'INR':
            locale = 'en-IN';
            break;
        default:
            locale = 'en-US';
    }
    return Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(number);
}

function showPopup(event) {
    event.preventDefault(); // Prevent form submission
    console.log("hello");
    var grossIncome = parseFloat(document.getElementById("grossIncome").value.replace(/,/g, ''));
    var extraIncome = parseFloat(document.getElementById("extraIncome").value.replace(/,/g, ''));
    var deductions = parseFloat(document.getElementById("deductions").value.replace(/,/g, ''));
    var age = parseFloat(document.getElementById("age").value.replace(/,/g, ''));
   
    console.log(age,extraIncome,deductions,grossIncome);
    // Check if grossIncome is not a number
if (isNaN(grossIncome)) {
setErrorFor(document.getElementById("grossIncome"), 'Gross Income cannot be blank');
} else {
// Check if grossIncome is positive
if (grossIncome < 0) {
    setErrorFor(document.getElementById("grossIncome"), 'Gross Income must be a positive number');
} else {
    setSuccessFor(document.getElementById("grossIncome"), 'Accepted');
}
}

// Check if extraIncome is not a number
if (isNaN(extraIncome)) {
setErrorFor(document.getElementById("extraIncome"), 'Extra Income cannot be blank');
} else {
// Check if extraIncome is positive
if (extraIncome < 0) {
    setErrorFor(document.getElementById("extraIncome"), 'Extra Income must be a positive number');
} else {
    setSuccessFor(document.getElementById("extraIncome"), 'Accepted');
}
}
console.log(grossIncome);
// Check if deductions is not a number
if (isNaN(deductions)) {
setErrorFor(document.getElementById("deductions"), 'Deductions cannot be blank');
} else {
// Check if deductions is positive
if (deductions < 0) {
    setErrorFor(document.getElementById("deductions"), 'Deductions must be a positive number');
} else {
    setSuccessFor(document.getElementById("deductions"), 'Accepted');
}
}
console.log(age);
// Check if age is not a number
if (isNaN(age)) {
setErrorFor(document.getElementById("age"), 'Age cannot be blank');
} else {
// Check if age is positive
if ( age < 0) {
    setErrorFor(document.getElementById("age"), 'age positive only');
} else {
    setSuccessFor(document.getElementById("age"), 'Accepted');
}
}
    if(age > 500){
        setErrorFor(document.getElementById("age"), 'Invalid ! Age must be less then 500)');
        console.log(age);
        return;
    }
    if(isNaN(grossIncome) || isNaN(age) || isNaN(deductions) || isNaN(extraIncome)) return;
    if(grossIncome <0 || age<0 || deductions < 0 || extraIncome < 0) return;
    // Declaration of taxRate
    var taxRate;

    if (age < 40) {
        taxRate = 0.3;
    } else if (age >= 40 && age < 60) {
        taxRate = 0.4;
    } else {
        taxRate = 0.1;
    }

    // Calculate taxable income
    var taxableIncome = grossIncome + extraIncome - deductions;
     if(taxableIncome <= 800000){
        var formattedTaxAmount = toCurrency(taxableIncome, 'INR', 'INR');
        document.getElementById("taxAmount").textContent = formattedTaxAmount;
        document.getElementById("taxstatement").textContent = "No tax deductions";
        document.getElementById("popupDiv").classList.add("show");
     }
     else{
    // Calculate tax amount
    var taxAmount = taxableIncome * taxRate;

    // Format tax amount with currency based on selected country
    var formattedTaxAmount = toCurrency(taxAmount, 'INR', 'INR');
    
    console.log(formattedTaxAmount);
    // Update tax amount in popup div
    document.getElementById("taxAmount").textContent =  formattedTaxAmount;
    document.getElementById("taxstatement").textContent =  "after tax deductions";

    // Show popup div
    document.getElementById("popupDiv").classList.add("show");
     }
}

function setErrorFor(input, message) {
   
const formControl = input.parentElement;
const small = formControl.querySelector('#tooltiptext');
formControl.className = 'input-wrapper error';
console.log(formControl);
 small.innerText = message;

}

function setSuccessFor(input, message) {
const formControl = input.parentElement;
const small = formControl.querySelector('#tooltiptext');
formControl.className = 'input-wrapper success';
small.innerText = message;
}


function hidePopup() {
    // Hide popup div
    document.getElementById("popupDiv").classList.remove("show");
}

var numberInputs = document.querySelectorAll('input.number');
numberInputs.forEach(function(input) {
    input.addEventListener('input', function() {
        // Remove non-numeric characters
        var removeChar = this.value.replace(/[^0-9]/g, '');

        // Format the number in Indian style
        var formattedNumber = removeChar.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        this.value = formattedNumber;
    });

    input.addEventListener('keypress', function(event) {
// Check if the pressed key is a number or backspace/delete key
var charCode = event.which ? event.which : event.keyCode;
if (charCode < 48 || charCode > 57) {
    // Prevent default behavior if not a number
    event.preventDefault();

    // Display an error message to the user
    setErrorFor(this, "");

    // Optionally, you can also remove the error message after a delay
    setTimeout(() => {
        setErrorFor(this, "please enter numerical text"); // Clear error message after a delay
    }, 200); // Adjust the delay time as needed (in milliseconds)
} else {
    // Reset the border color if a valid input is entered
    setSuccessFor(this, 'Accepted');
     // Reset to default
}
});

});



// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
    const close_btn = document.querySelector('.close-btn');
    const social_panel_container = document.querySelector('.social-panel-container');
    
    floating_btn.addEventListener('click', () => {
        social_panel_container.classList.toggle('visible')
    });
    
    close_btn.addEventListener('click', () => {
        social_panel_container.classList.remove('visible')
    });