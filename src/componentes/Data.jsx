import React from 'react';

const Data = ({ novaData }) => {
  const data = new Date(novaData).toLocaleString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });

  return <h4 className="data">{data}</h4>;
};

export default Data;
