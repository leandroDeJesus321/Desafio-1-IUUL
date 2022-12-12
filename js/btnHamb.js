// função para incrementar classe incrementar ao clicar no menu hamburguer
function clickHandler() {
    var btn = document.querySelector('.menu-hamburguer');
    

    btn.addEventListener('click', ()=>{
        var dropdown = document.querySelector('.nav-bar')
        btn.classList.toggle("abrir");
        dropdown.classList.toggle("drop");
    })
    
}
