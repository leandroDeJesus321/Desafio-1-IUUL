// função para incrementar classe incrementar ao clicar no menu hamburguer

    var btn = document.querySelector('.menu-hamburguer');

    btn.addEventListener('click', ()=>{
        btn.classList.toggle("abrir");
    })
