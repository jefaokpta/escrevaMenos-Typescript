
let ul: HTMLUListElement;

ul=document.querySelector('#ul');

const frutas=['banana','maca','framboesa'];

frutas.forEach(f => {
    let li=<HTMLLIElement>document.createElement('li');
    li.addEventListener('click',() => li.classList.toggle('highlighted'));
    li.textContent=f;
    ul.appendChild(li);
});

