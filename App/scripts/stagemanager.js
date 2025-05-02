export {RemoveAllStages, SwitchStages}
import { displayError } from './errornotification.js';
let allStages = document.querySelectorAll('.stage')
let backBtn = document.querySelector('.stage-back-btn')


let nameStage = document.querySelector('.name-selection-stage')
let roomStage = document.querySelector('.room-create-join-stage')



function RemoveAllStages() {
    allStages.forEach((stage)=>{
        stage.style.display='none'
    })
}

backBtn.addEventListener('.click', ()=>{
    //go back a stage
})

//Switch between enter name and join/create group stages
function SwitchStages() {
    if (nameStage.style.display=="none") {
        nameStage.style.display='flex'
        roomStage.style.display='none'
    } else {
        nameStage.style.display='none'
        roomStage.style.display='flex'
    }
}
