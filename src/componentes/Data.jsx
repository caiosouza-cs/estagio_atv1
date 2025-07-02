import React from 'react';

const Data = ({ novaData }) => {
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

  return <h4 className="data">{formatarData(novaData)}</h4>;
};

export default Data;
