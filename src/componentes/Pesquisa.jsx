import React from 'react';

const Pesquisa = () => {
  const [busca, setBusca] = React.useState('');

  React.useEffect(() => {
    const cards = document.querySelectorAll('.card-principal');
    let algumCorresponde = false;

    if (busca === '') {
      cards.forEach((card) => {
        card.style.display = 'block';
      });
      return;
    }

    const termo = busca.toLowerCase();

    cards.forEach((card) => {
      const titulo = card.querySelector('.titulo').textContent.toLowerCase();
      const conteudo = card
        .querySelector('.conteudo')
        .textContent.toLowerCase();

      const corresponde = titulo.includes(termo) || conteudo.includes(termo);

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
  }, [busca]);

  return (
    <form className="pesquisa">
      <div className="busca">
        <input
          className="texto-pesquisa"
          id="texto-pesquisa"
          type="text"
          placeholder="Pesquisar no blog"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
        />
      </div>
    </form>
  );
};

export default Pesquisa;
