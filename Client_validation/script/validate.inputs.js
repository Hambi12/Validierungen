/* Aufgabe:
  Fügen Sie die notwendigen Selektoren für
  firstname, lastname, mobile, password2
*/

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const name = document.getElementById('name');
const number= document.getElementById('number');


// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Die Email stimmt nicht.');
    }
}

/* Aufgabe:
    Validieren Sie die Mobile-Nummer ähnlich wie bei der Email mit einer
    Regular expression (regex). Für eine geeignete regex suchen Sie
    im Internet nach "javascript regular expression for mobile number".
*/

// Check phone is valid
function checkPhone(input) {
    const tel = /^(1\s|1|)?(((\d{3}))|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/;
    if (tel.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Phone is not valid');
    }
}


// Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} ist ein Pflichtfeld`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });

    return isRequired;
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} Benötigt mindestens ${min} Zeichen`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} Maximal ${max} Zeichen möglich`
        );
    } else {
        showSuccess(input);
    }
}

/* Aufgabe:
    Validieren Sie, ob die beiden Passwörter übereinstimmen.
    Falls sie nicht übereinstimmen, geben Sie (ähnlich wie in den anderen Beispielen)
    eine Fehlermeldung dem Formular aus.
*/
// Check passwords match
function checkPassword(input1,input2) {
    let passw1 = input1.value.trim();
    let passw2 = input2.value.trim();

    console.log(`${passw1}, ${passw2}`);

    // If Not same return False.
    if (passw1 !== passw2) {

        showError(input1, 'Die Passwörter stimmen nicht überein.');
    }
    // If same return True.
    else{
        showSuccess(input, input2);
    }
}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function validateForm(){
    if(!checkRequired([username, email, password, name, number, password2])){
        //Aufgabe: Validierung der Länge für Vorname (2 bis 20) und Nachname (2 bis 50)
        checkLength(name, 2,20);
        checkPhone(number);
        checkLength(username, 3, 15);
        checkEmail(email);
        checkPassword(password,password2);

        /* Aufgabe:
          Validierung der Telefonnumer ähnlich wie bei der Email mit einer
          Regular expression (regex). Für eine geeignete regex suchen Sie
          im Internet nach "javascript regular expression for mobile number"
        * */
        /* Aufgabe:
          Validierung Sie die beiden Passwörter, damit password
          mit password2 übereinstimmt.
        * */

    }
}

// Event listeners
form.addEventListener('submit', function(e) {
    //https://www.w3schools.com/jsref/event_preventdefault.asp
    e.preventDefault();
    //First validate form
    validateForm();
});
