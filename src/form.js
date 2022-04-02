// This is an email sign-up form
import social from './socialmedia.js'
import personjpg from './images/person.jpg'

function signUpBox() {
    let box = document.createElement('div')
    box.id = 'signup-box'
    box.append(person(), signUpAndSocial())
    return box
}

function signUpAndSocial() {
    let box = document.createElement('div')
    box.id = 'signup-and-social'
    box.append(signUpCard(), social())
    return box
}

function signUpCard() {
    let box = document.createElement('div')
    box.id = 'signup-card'
    box.append(signUpText(), form())
    return box
}

function signUpText() {
    let text = document.createElement('h3')
    text.innerText = 'Sign up for our newsletter!'
    return text    
}

function form() {
    let box = document.createElement('div')
    box.id = 'form-box'
    let nameBox = document.createElement('div')
    nameBox.id = 'name-box'
    let firstName = document.createElement('input')
    firstName.id = 'first-name'
    let lastName = document.createElement('input')
    lastName.id = 'last-name'
    let labelFName = document.createElement('label')
    let labelLName = document.createElement('label')
    labelFName.setAttribute('for', 'fname')
    labelLName.setAttribute('for', 'lname')
    labelFName.innerHTML = 'First Name: '
    labelLName.innerHTML = 'Last Name: '
    let emailBox = document.createElement('div')
    emailBox.id = 'email-box'
    let emailLabel = document.createElement('label')
    let emailForm = document.createElement('input')
    emailForm.id = 'email'
    emailForm.type = 'email'
    emailLabel.htmlFor = 'email'
    emailLabel.innerHTML = 'Email: '
    let emailSubmit = document.createElement('button')
    emailSubmit.type = 'submit'
    emailSubmit.innerText = 'Sign me up!'
    nameBox.append(labelFName, firstName, firstName, labelLName, lastName)
    emailBox.append(emailLabel, emailForm, emailSubmit)
    box.append(nameBox, emailBox)
    return box
}

function person() {
    let image = document.createElement('img')
    image.id = 'person-image'
    image.src = personjpg
    return image
}

export default signUpBox