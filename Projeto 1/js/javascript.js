const hamburguer = document.getElementById('hamburguer');
let boolean = false;

hamburguer.addEventListener('click',function() {
    const menu = document.getElementById('menu-hamburguer');
    if(boolean==false){
    menu.style.display = 'flex';
    menu.children[0].style.display = 'flex';
    menu.children[0].style.flexDirection = 'column';
    boolean = true;
    }else{
        menu.style.display = 'none';
        boolean = false;
    }
console.log('teste');
});