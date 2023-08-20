function toast({title='', message='', duration, type}) {
    const main = document.getElementById('toast');
    if(main) {
        const toastDiv = document.createElement('div');
        const icons = {
            success: 'fa-solid fa-circle-check',
            error: 'fa-solid fa-circle-exclamation'
        }
        const icon = icons[type];

        const autoRemove = setTimeout(()=>{
            main.removeChild(toastDiv);
        }, duration + 1000);

        toastDiv.onclick = (e) => {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toastDiv);
                clearTimeout(autoRemove);
            }
        };

        toastDiv.classList.add('toast', `toast--${type}`);
        const delay = (duration / 1000).toFixed(2);
        toastDiv.style.animation = `SideOnLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toastDiv.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
        `;
        main.appendChild(toastDiv);

    }
}

function showSuccessMessage() {
    toast({
        title: 'Success',
        message: 'Success message',
        duration: 2000,
        type: 'success'
    })
}   

function showErrorMessage() {
    toast({
        title: 'Error',
        message: 'Error message',
        duration: 2000,
        type: 'error'
    })
}