import React from 'react';
import style from '../css/Header.module.css';

const Search = () => {
  const [busca, setBusca] = React.useState<string>('');

  React.useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('#cardPrincipal');

    let algumCorresponde = false;

    if (busca.trim() === '') {
      cards.forEach((card) => {
        card.style.display = 'block';
      });
      return;
    }

    const termo = busca.toLowerCase();

    cards.forEach((card) => {
      const tituloEl = card.querySelector<HTMLElement>('#titulo');
      const conteudoEl = card.querySelector<HTMLElement>('#conteudo');

      const titulo = tituloEl?.textContent?.toLowerCase() || '';
      const conteudo = conteudoEl?.textContent?.toLowerCase() || '';

      const corresponde = titulo.includes(termo) || conteudo.includes(termo);

      if (corresponde) {
        algumCorresponde = true;
      }

      card.style.display = corresponde ? 'block' : 'none';
    });

    const cardsNavegacao = document.getElementById('cardsNavegacao');
    const existente = document.getElementById('nao-encontrado');
    if (existente) {
      existente.remove();
    }

    if (!algumCorresponde && cardsNavegacao) {
      const naoEncontrado = document.createElement('p');
      naoEncontrado.classList.add('animaCard');
      naoEncontrado.id = 'nao-encontrado';
      naoEncontrado.textContent = 'Não há artigos relacionados';
      cardsNavegacao.appendChild(naoEncontrado);
    }
  }, [busca]);

  return (
    <form className={style.pesquisa} onSubmit={(e) => e.preventDefault()}>
      <div className={style.busca}>
        <input
          className={style.textoPesquisa}
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

export default Search;
