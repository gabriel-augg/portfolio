function aparecerMenu(){
    let menu = document.querySelector('.responsive-menu')
    if(menu.classList.contains('aparecer')){
        menu.classList.remove('aparecer')
        document.getElementById('icone').src = 'assets/icons/menu-icon.svg'        
    } else {
        menu.classList.add('aparecer')
        document.getElementById('icone').src = 'assets/icons/close-icon.svg'        
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt("#texto", {
        speed: 200,
        loop: true
    }).type('Full-Stack', {delay: 1000}).delete(10).type('Front-End', {delay: 1000}).delete(9).type('Back-End', {delay: 1000}).delete(8).go()
})
