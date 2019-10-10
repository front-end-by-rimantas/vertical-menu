document.querySelectorAll('.title').forEach( item => {
    item.addEventListener('click', (e) => {
        e.path[1].classList.toggle('show');
        
    })
})