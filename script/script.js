function aparecerMenu(){
    let menu = document.querySelector('.responsive-menu')
    if(menu.classList.contains('aparecer')){
        menu.classList.remove('aparecer')
        document.getElementById('icone').src = '../assets/icons/menu-icon.svg'        
    } else {
        menu.classList.add('aparecer')
        document.getElementById('icone').src = '../assets/icons/close-icon.svg'        
    }
}