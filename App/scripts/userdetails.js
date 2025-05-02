import { SwitchStages } from './stagemanager.js';
import { displayError } from './errornotification.js';
let confirmNameBtn = document.querySelector('.confirm-name')
let confirmName = document.querySelector('.confirm-name')
let nameInput = document.querySelector('.name-input')

confirmNameBtn.addEventListener('click', () => {
    //Set name to local storage if valid
    if (document.querySelector('.name-input').value.trim() != "") {
        localStorage.setItem("username", document.querySelector('.name-input').value)
    }
})

//Switch stages if name is valid
confirmName.addEventListener('click', () => {
    confirmName.disabled=true;
    if (nameInput.value.trim() != "") {
        setTimeout(()=>{
            SwitchStages()
        }, 1000)
        
    } 
    //Handle invalid name
    else {
        displayError('Please enter a valid name');
    }
    setTimeout(()=> {
        confirmName.disabled=false;
    }, 1000)
})

nameChangeBtn.addEventListener('click', () => { SwitchStages()} )
