//1. Selecting all needed elementd from the DOM
const nameField = document.getElementById("full-name")
const phoneField = document.getElementById("phone")
const emailField = document.getElementById("email")
const websiteField = document.getElementById("website")
const passwordField = document.getElementById("password")
const confirmPasswordField = document.getElementById("confirm-password")
const formMessage = document.getElementById("formMessage")

const form = document.querySelector(".form")

// Clearing the values of all inputs when page reloads
document.querySelectorAll("input").forEach(input => input.value = '')

// General Variables
let validItems = []
let formData = {}

// 2. On starting typing on each input field, the validation function should be called
// If it is validated, the outline should be green => add class of valid

// Add Item Function => add valid items to the validItems array
const addItem = (arr,element) => {if(!arr.includes(element)) arr.push(element) }
// Remove Item function => removing items from the validItems array if it is not valid
const removeItem = (arr,element) => arr.filter(ele => ele != element)

function checkName(e) {
    const fullName = e.target.value;
    // The length of the full name must be more than 3 characters 
    if(fullName.length > 3) {
        nameField.classList.add("valid")
       addItem(validItems,'name')
    } else {
        nameField.classList.remove("valid")
        validItems = removeItem(validItems,'name')
    }

    // Sending data to the form object
    formData.fullName = fullName
}

function checkPhone(e) {
    // number must be 10 digits, no space, no comma, no punctuation, and no + sign => We use regex and match method for validation check
    const phoneNumber = e.target.value
    const validFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

    if(phoneNumber.match(validFormat)) {
        phoneField.classList.add("valid")
       addItem(validItems,'phone')
    } else {
        phoneField.classList.remove("valid")
        validItems = removeItem(validItems,'phone')
    }

    // Sending data to the form object 
    formData.phoneNumber = phoneNumber
}

function checkEmail(e) {
    // Email separated into two parts by @ symbol. a "personal_info" and a domain,
    // Uppercase (A-Z) and lowercase (a-z) English letters.
    // Digits (0-9).
    // Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
    // Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.
    const email = e.target.value
    const validFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(email.match(validFormat)) {
        emailField.classList.add("valid")
       addItem(validItems,'email')
    } else {
        emailField.classList.remove("valid")
        validItems = removeItem(validItems,'email')
    }
    // Sending data to the form object
    formData.email = email;
}

function checkWebsite(e) {
    const website = e.target.value
    const validFormat = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g

    if(website.match(validFormat)) {
        websiteField.classList.add("valid")
       addItem(validItems,'website')
    } else {
        websiteField.classList.remove("valid")
        validItems = removeItem(validItems,'website')
    }
    // Sending data to the form object
    formData.website = website
}

function checkPassword(e) {
    // To check a password between 8 to 16 characters which contain only characters,
    //  numeric digits, 
    // underscore and first character must be a letter
    const password = e.target.value
    const validFormat = /^[A-Za-z]\w{7,14}$/

    if(password.match(validFormat)) {
        passwordField.classList.add("valid")
       addItem(validItems,"password")
    } else {
        passwordField.classList.remove("valid")
        validItems = removeItem(validItems,"password")
    }
    // Sending data to the form object
    formData.password = password
}

function checkConfirmPassword(e) {
    const password = passwordField.value
    const confirmPass = e.target.value
    
    if(password == confirmPass) {
        confirmPasswordField.classList.add("valid")
       addItem(validItems,"confirmPass")
    } else {
        confirmPasswordField.classList.remove("valid")
        validItems = removeItem(validItems,"confirmPass")
    }
}

// 3. Register the form and send data to an object
function registerForm(e) {
    e.preventDefault();
    // If all the fields are valid, the data will be sent
    if(validItems.length == 6) {
        formMessage.textContent = "All Done, You Are Registered 😍"
        console.log(formData)
    } else {
        formMessage.textContent = "Ooops!😢 Please Check The Inputs"
    }
}

// Event listeners
nameField.addEventListener("input", checkName)
phoneField.addEventListener("input",checkPhone)
emailField.addEventListener("input",checkEmail)
websiteField.addEventListener("input",checkWebsite)
passwordField.addEventListener("input",checkPassword)
confirmPasswordField.addEventListener("input",checkConfirmPassword)

form.addEventListener("submit",registerForm)