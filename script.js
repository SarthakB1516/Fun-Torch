function cursorTorch() {
    const torch = document.querySelector('.torch');
    const light = document.querySelector('.light');
    document.addEventListener('mousemove', (e) => {
        torch.style.left = e.pageX + -45 + 'px';
        torch.style.top = e.pageY + -45 + 'px';
        light.style.left = e.pageX + -1001 + 'px';
        light.style.top = e.pageY + -227 + 'px';
    });
}

function bodyON()
{
    const body = document.getElementById('body');
    body.style.backgroundColor = "#00ffff82";
    const light = document.querySelector('.light');
    light.classList.add('invisible');
    const torch = document.querySelector('.torch');
    torch.classList.add('invisible');
}

function bodyOFF()
{
    const body = document.getElementById('body');
    body.style.backgroundColor = "#1f1c1c";
    const light = document.querySelector('.light');
    light.classList.remove('invisible');
    const torch = document.querySelector('.torch');
    torch.classList.remove('invisible');
}