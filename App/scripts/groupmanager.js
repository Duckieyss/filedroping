import { displayError } from './errornotification.js';
let createGroupBtn = document.querySelector('.create-group-btn')
let roomNameInput = document.querySelector('.room-name-input')

createGroupBtn.addEventListener('click', ()=>{
    if (roomNameInput.value.trim() != ''){
        //Create group
        localStorage.setItem("roomName", roomNameInput.value)
        window.location.href="./dashboard.html"
    } else {
        //Handle invalid group name
        displayError("Please enter a valid group name")
        createGroupBtn.disabled=true
        setTimeout(()=>{
            createGroupBtn.disabled=false
        }, 1000)
    }
})