import aplicarBotaoLerMais from './expandirConteudo.js';

export default async function mostrarCard() {
  const postsResponse = await fetch('./public/posts.json');
  const postsJson = await postsResponse.json();

  const cardsNavegacao = document.getElementById('cards-navegacao');

  function formatarData(novaData) {
    const data = new Date(novaData);

    const formatador = new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
    let dataFormatada = formatador.format(data);
    dataFormatada = dataFormatada.replace('. de ', ', ');

    return dataFormatada;
  }

  postsJson.forEach(post => {

    const divCard = document.createElement('div');
    const data = document.createElement('h4');
    const sectionConteudo = document.createElement('section');
    const titulo = document.createElement('h2');
    const conteudo = document.createElement('p');
    const botaoLerMais = document.createElement('button');
    

    divCard.classList.add('card-principal');
    data.classList.add('data');
    titulo.classList.add('titulo');
    conteudo.classList.add('conteudo');
    botaoLerMais.classList.add('ler-mais');

    data.textContent = formatarData(post.data);
    titulo.textContent = post.titulo;
    conteudo.textContent = post.conteudo;
    botaoLerMais.textContent = 'Ler mais';

    sectionConteudo.appendChild(titulo);
    sectionConteudo.appendChild(conteudo);
    sectionConteudo.appendChild(botaoLerMais);
    divCard.appendChild(data);
    divCard.appendChild(sectionConteudo);

    cardsNavegacao.appendChild(divCard);

    aplicarBotaoLerMais(divCard);
  });
}


