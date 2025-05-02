import { RemoveAllStages } from './stagemanager.js'
let createRoomBtn = document.querySelector('.create-room-btn')
let createRoomStageContainer = document.querySelector('.create-room-stage')

createRoomBtn.addEventListener('click', () => {
    RemoveAllStages()
    createRoomStageContainer.style.display='flex' //Show room create stage
})

