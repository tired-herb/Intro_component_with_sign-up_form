const submit = document.querySelector(".claimButton")
const input = document.querySelectorAll("input")
const form = document.querySelector("form")
const firstName = document.getElementById("labelFN")
const lastName = document.getElementById("labelLN")
const email = document.getElementById("labelEmail")
const password = document.getElementById("labelPassword")

const firstNameInput = document.getElementById("firstName")
const lastNameInput = document.getElementById("lastName")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")

form.addEventListener("submit", validation)
submit.addEventListener("click", validation)


function validation(e){
    e.preventDefault()

    
    if (firstNameInput.value.trim() === "" ){
        error(firstName, firstNameInput)
    }
    else remove(firstName, firstNameInput)


    if (lastNameInput.value.trim() === ""){
        error(lastName, lastNameInput )
    }
    else remove(lastName, lastNameInput)


    if (passwordInput.value.trim() === ""){
        error(password, passwordInput)
    }
    else remove(password, passwordInput)

    
    
    if (!correctEmail(emailInput.value.trim())){
        error(email, emailInput)
    }
    else remove(email, emailInput) 
}


function error(labelid, inputs) {
    labelid.classList.replace("error-text", "error-text-visible")
    inputs.classList.add("errorInput")
    
}

function remove(labelid, inputs){
    labelid.classList.replace( "error-text-visible", "error-text")
    inputs.classList.remove("errorInput")
}

function correctEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}

