function formValidation() {
    const $form = document.getElementById("signup_form")
    const name = $form.name.value
    const lastName = $form.lastName.value
    const email = $form.email.value
    const password = $form.password.value

    if(name.trim() === ""){
        displayError("name")
    } else {
        removeError("name")
    }

    if(lastName.trim() === "") {
        displayError("lastName")
    } else {
        removeError("lastName")
    }

    if(!validateEmail(email)){
        displayError("email")
    } else {
        removeError("email")
    }

    if(!validatePassword(password)){
        displayError("password")
    } else {
        removeError("password")
    }
}

function displayError(name) {
    const input = document.getElementById(name)
    input.classList.add("error-input")
    const errorText = document.getElementById(`${name}-error`)
    errorText.className = "error-text"
}

function removeError(name) {
    const input = document.getElementById(name)
    input.classList.remove("error-input")
    const errorText = document.getElementById(`${name}-error`)
    errorText.classList.remove("error-text")
}

function validatePassword(password) {
    return /(?=\S+$)/.test(password)
}

function validateEmail(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email)
}

const $form = document.getElementById("signup_form")

$form.addEventListener("submit", (e) => {
  e.preventDefault()
  formValidation()
})