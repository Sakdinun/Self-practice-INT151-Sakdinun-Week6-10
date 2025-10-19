const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password')
const conpassword = document.getElementById('confirm-password');
const sumbit_button = document.getElementById('submit');
const daText = document.getElementsByTagName('form')[0].lastElementChild;

const newText = document.createElement("p");
newText.style.color = "red"


// document.addEventListener("DOMContentLoaded", () => {
//     newText.textContent = "missing some values, please try again!"
// })

function changeText(text) {
    newText.textContent = `${text}`
}



conpassword.addEventListener("input", () => {
    if (conpassword.value !== password.value) {
        newText.textContent = "password and confirm do not match, please try again."
    } else {
        newText.textContent = ""
        
    }
})



daText.appendChild(newText)

inputna = document.getElementsByTagName('input')

sumbit_button.addEventListener("click", (e) => {
    e.preventDefault()

    const isAnyFilled = Array.from(inputna).some(inputing => inputing.value.trim().length === 0)
    newText.style.color = isAnyFilled ? "red" : "green";
    newText.textContent = isAnyFilled 
    ? "missing some values, please try again!" 
    : "your data complete"


})