let element = document.getElementById('nav-list');
let close = document.getElementById('btn-close');
let menu = document.getElementById('btn-open')

function showElement() {
    element.style.display = 'flex';
    close.style.display = 'block' ;

    if(element.style.display = 'flex'){
        menu.style.display = 'none';
    }
}

    
    function hideElement() {
        element.style.display = 'none';
        if(element.style.display = 'none'){
            
            menu.style.display = 'block';

            close.style.display = 'none'
        }
}