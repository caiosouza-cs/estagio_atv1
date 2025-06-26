export default function filtrarCards() {
  const pesquisa = document.getElementById('texto-pesquisa');
  
  function handleKeyUp(event) {
    const input = event.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card-principal');
    let algumCorresponde = false;

    cards.forEach(card => {
      const titulo = card.querySelector('.titulo')?.textContent.toLowerCase() || '';
      const conteudo = card.querySelector('.conteudo')?.textContent.toLowerCase() || '';

      const corresponde = titulo.includes(input) || conteudo.includes(input);
      
      if (corresponde) {
        algumCorresponde = true;
      }

      card.style.display = corresponde ? 'block' : 'none';
    });

    const cardsNavegacao = document.getElementById('cards-navegacao');
    
    
    const existente = document.getElementById('nao-encontrado');
    if (existente) {
      existente.remove();
    }

    if (!algumCorresponde) {
      const naoEncontrado = document.createElement('p');
      naoEncontrado.id = 'nao-encontrado';
      naoEncontrado.textContent = 'Não há artigos relacionados';
      cardsNavegacao.appendChild(naoEncontrado);
    }
  }

  pesquisa.addEventListener('keyup', handleKeyUp);
}
