// alert 
document.getElementById('alert-btn').addEventListener('click', function () {
    alert('Tui sob somoy Bejhal koris kno re !')
})
// confirm
document.getElementById('confirm-btn').addEventListener('click', function () {
    const display = document.getElementById('display-container');
    display.classList.remove('d-none')
    const opinioun = confirm('Tui jabi ki na seta bol');
    if (!!opinioun) {
        display.innerHTML = ` 
            <h2>Tahole 500 Taka Bkash kore de</h2>
        `
    } else {
        display.innerHTML = ` 
            <h2>Thak tui tor vab niye</h2>
         `
    }
})

// prompt 
document.getElementById('prompt-btn').addEventListener('click', function () {
    const result = prompt('Enter You Name ');
    if (result.length !== 0) {
        const promtDisplay = document.getElementById('display-prompt');
        promtDisplay.classList.remove('d-none');
        promtDisplay.innerHTML = ` 
            <h2>Congratulation "${result}" you are winner</h2>
        `
    }
})