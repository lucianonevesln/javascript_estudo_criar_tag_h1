// recebe a interacao do usuario com a aplicacao
botaoInsereTagH1 = document.querySelector('#idEnter');

// escuta o comportamento de click do botao
botaoInsereTagH1.addEventListener('click', function(Event)
{
    // previne a execucao de comportamento padrao
    Event.preventDefault();
    // recebe valor digitado pelo usuario
    var palavra = document.querySelector('#idInput').value;
    // invoca funcao que criara a tag h1
    criaTagH1(palavra);
    // remove texto digitado
    palavra = document.querySelector('#idInput').value = '';
});

// funcao que cria e insere a tag no html
function criaTagH1 (palavra)
{
    // estrutura para criar tag h1
    var criaH1 = document.createElement('h1');
    // estrutura usada como referencia para opsicao em que a tag criada sera inserida
    var h1Atual = document.querySelector('#idInput');
    // estrutura que recebe valor que sera inserido na tag criada
    var adicionaConteudo = document.createTextNode('Tag h1 criada com valor: ' + palavra);
    // estrutura que insere valor na tag criada
    criaH1.appendChild(adicionaConteudo);
    // estrutura que insere tag/valor no DOM
    document.body.insertBefore(criaH1, h1Atual);
};