// Objetivo 1 - quando o usuário clicar no botão de mostrar mais, deve abrir os projetos escondidos

//Passo 1 - pegar o botão mostrar mais pelo JS para verificar quando o usuário clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });

    botaoMostrarProjetos.classList.add('remover');
})