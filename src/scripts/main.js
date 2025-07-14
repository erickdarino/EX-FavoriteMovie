document.addEventListener('DOMContentLoaded', function () {
    const linkId = document.querySelectorAll('[data-tab-link]'); //pega os li-botões do elenco
    const contentItems = document.querySelectorAll('[data-tab-id]');//pega o id especifico de cada li do elenco
    const questions = document.querySelectorAll('[data-faq-question]');//pega o acordion da faq
    const heroSection = document.querySelector('.hero');//recebe minha seção hero
    const HeroHeight = heroSection.clientHeight;

    window.addEventListener('scroll',function(){// assiste a rolagem da página
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < HeroHeight){
            HiddenHeaderElement();
        } else{
            ShowHeaderElement();
        }
    });

    linkId.forEach(link => {  //looping
        link.addEventListener('click', function () {//observa o click no botao do personagem
            const idTarget = link.dataset.tabLink; //recebe o valor do botao clicado

            linkId.forEach(el => el.classList.remove('elenco__bg__id__link-is--active'));//remove as bordas de todos os botões antes de serem acionados 

            link.classList.add('elenco__bg__id__link-is--active'); //coloca as bordas e ativa o botão após o click
        
            contentItems.forEach(content => content.classList.remove('is-active')); //esconde os conteúdos das li do elenco(data-tab-id)

            const activeContent = document.querySelector(`[data-tab-id="${idTarget}"]`); //recebe a li (data-tab-id) correspondente ao botao clicado (data-tab-link)
            
            if (activeContent) { //mostra o conteúdo na tela
                activeContent.classList.add('is-active'); 
            }
        });
    });

    for (let i = 0; i < questions.length; i++) { //acordion
        questions[i].addEventListener('click', abreOuFechaResposta)
    }
});
function HiddenHeaderElement() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}
function ShowHeaderElement() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento) {  //abre o toggle de perguntas frequentes
    const classe = 'faq__questions__item--is-open'; //recebe a classe
    const elementoPai = elemento.target.parentNode;//recebe a aba correspondente

    elementoPai.classList.toggle(classe);
}
