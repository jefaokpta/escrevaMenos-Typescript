let ul;
ul = document.querySelector('#ul');
const frutas = ['banana', 'maca', 'framboesa'];
frutas.forEach(f => {
    let li = document.createElement('li');
    li.addEventListener('click', () => li.classList.toggle('highlighted'));
    li.textContent = f;
    ul.appendChild(li);
});
