export default function aplicarBotaoLerMais(content) {
  const conteudo = content.querySelector('.conteudo');
  const botao = content.querySelector('.ler-mais');

 // Pode clicar em qualquer lugar do card que ele expande
  content.addEventListener('click', () => {
    conteudo.classList.toggle('expandido');
    botao.textContent = conteudo.classList.contains('expandido') ? 'Ler menos' : 'Ler mais';
  });

  
}
