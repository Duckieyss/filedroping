import { displayError } from './errornotification.js';

let nameStage = document.querySelector('.name-selection-stage')
let roomStage = document.querySelector('.room-create-join-stage')
let nameChangeBtn = document.querySelector('.change-name')
let confirmName = document.querySelector('.confirm-name')
let nameInput = document.querySelector('.name-input')

function SwitchStages() {
    if (nameStage.style.display=="none") {
        nameStage.style.display='flex'
        roomStage.style.display='none'
    } else {
        nameStage.style.display='none'
        roomStage.style.display='flex'
    }
}

confirmName.addEventListener('click', () => {
    confirmName.disabled=true;
    if (nameInput.value.trim() != "") {
        SwitchStages()
    } else {
        displayError('Please enter a valid name');
    }
    setTimeout(()=> {
        confirmName.disabled=false;
    }, 1000)
})

nameChangeBtn.addEventListener('click', () => { SwitchStages()} )
