const hamburguer = document.getElementById('hamburguer');
let boolean = false;

hamburguer.addEventListener('click',function() {
    const menu = document.getElementById('menu-hamburguer');
    if(boolean==false){
    menu.style.display = 'flex';
    menu.children[0].style.display = 'flex';
    menu.children[0].style.flexDirection = 'column';
    boolean = true;
    hamburguer.children[0].classList.remove('fa-solid');
    hamburguer.children[0].classList.remove('fa-bars');
    hamburguer.children[0].classList.add('fa-solid');
    hamburguer.children[0].classList.add('fa-x');
    }else{
        menu.style.display = 'none';
        boolean = false;
        hamburguer.children[0].classList.remove('fa-solid');
        hamburguer.children[0].classList.remove('fa-x');
        hamburguer.children[0].classList.add('fa-solid');
        hamburguer.children[0].classList.add('fa-bars');
        
    }
console.log('teste');
});