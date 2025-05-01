export {displayError}
let errorBox = document.querySelector('.error-box')


function displayError(errorMsg) {
    const errorNotification = document.createElement('div');
    errorNotification.classList.add('error-notification');
    errorNotification.style.opacity = '0';
    errorNotification.style.transition = 'opacity 0.2s ease';

    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-msg');
    errorMessage.textContent = errorMsg;

    const timerBar = document.createElement('div');
    timerBar.classList.add('timer-bar');

    errorNotification.appendChild(errorMessage);
    errorNotification.appendChild(timerBar);

    errorBox.appendChild(errorNotification);
    
    setTimeout(() => {
        errorNotification.style.opacity = '1';
        timerBar.style.transition = 'width 3s linear';
        timerBar.style.width = '0%';
    }, 50);

    setTimeout(() => {
        errorNotification.style.opacity = '0';
        setTimeout(() => {
            errorBox.removeChild(errorNotification)
        }, 300)
    }, 3000);
}