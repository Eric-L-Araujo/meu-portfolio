let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let image = document.getElementById('')
let titleTheme = document.getElementById('title-theme')
// NOVO! — ao carregar a página, verifica se há tema salvo
const temaSalvo = localStorage.getItem('tema'); 
if (temaSalvo === 'dark') {
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');
    titleTheme.textContent= "Tema escuro";
}   else {
    titleTheme.textContent= "Tema claro";
}

trilho.addEventListener('click', ()=> {
    // Uma classe dinâmica: se existir, eu quero que remova, se não existir, eu quero que adicione. Ela não pode existir no CSS.
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    titleTheme.textContent= "Tema claro"
    // NOVO! — salva o tema atual no localStorage
    if (body.classList.contains('dark')) {
        localStorage.setItem('tema', 'dark');
        titleTheme.textContent= "Tema escuro";
    } else {
        localStorage.setItem('tema', 'light')
        titleTheme.textContent= "Tema claro";
    }

});




