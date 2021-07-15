// Show input error message
function showError(id, message) {
    return `${id}: ${message}`;
}

// Show success outline
function showSuccess(id) {
    return `${id} successfully validate!`;
}

// Check email is valid
function checkEmail(id,input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Email ist nicht gültig.')
        }
    }
    return result;
}

// Check required fields
function checkRequired(id, input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    //if input is empty ...
    if (input.trim() === '') {
        //.. then it's not valid
        result = {
            isNotValid: true,
            msg: showError(id, `${input.toString()} wird benötigt.`)
        }
    }
    //return validation result
    return result;
}

// Check input length
function checkLength(id, input, min, max) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (input.length < min) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} muss mindestens ${min} Zeichen haben.`)
        }
    } else if (input.length > max) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} darf maximal ${max} Zeichen haben`)
        }
    }
    return result;
}

// Check phone is valid
function checkPhone(id,input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const tel = /^(1\s|1|)?(((\d{3}))|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/;
    if (!tel.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Telefonnummer ist nicht gültig.')
        }
    }
    return result;
}

// Check password is valid
function checkPassword(id,input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const pw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!pw.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Passwort ist nicht stark genug.')
        }
    }
    return result;
}


//Check passwod 1 and password 2
/**
function checkPassword1(id, input1, input2 ) {

    let passw1 = input1.value.trim();
    let passw2 = input2.value.trim();

    console.log(`${passw1}, ${passw2}`);

    // If Not same return False.
    if (passw1 !== passw2) {

        showError(input1, 'Das Passwörter stimmen nicht überein.');
    }
    // If same return True.
    else{
        showSuccess(input, input2);
    }
}
 */

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT beackets!
 *
 *
 */

module.exports = {
    checkEmail,
    checkLength,
    checkRequired,
    checkPhone,
    checkPassword,

}
