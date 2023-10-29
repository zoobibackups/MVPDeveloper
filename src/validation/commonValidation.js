function isValidName(name) {
    var pattern = /^[A-Za-z\s]{5,}$/;
    return pattern.test(name);
}
function isValidPassword(password) {
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return pattern.test(password);
}

function isValidEmail(email) {
    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    var pattern = /^[0-9]{1,15}$/;
    return pattern.test(phoneNumber);
  }
export {isValidName,isValidPassword,isValidEmail,isValidPhoneNumber}