import style from '../css/Cards.module.css';

type DataProps = {
  novaData: string;
};

const Data = ({ novaData }: DataProps) => {
  const data = new Date(novaData.replace(/-/g, '/'));

  const formatador = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  let dataFormatada = formatador.format(data);

  dataFormatada = dataFormatada.replace('. de ', ', ');

  return <h4 className={style.data}>{dataFormatada}</h4>;
};

export default Data;
