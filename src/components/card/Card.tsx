import s from './card.module.scss';

type CardProps = {
  gameImg: string;
  gameName: string;
};

export const Card = ({ gameName, gameImg }: CardProps) => {
  return (
    <div className={s.wrapper}>
      <img src={gameImg} alt={gameName} className={s.img} />
      <h2 className={s.title}>{gameName}</h2>
    </div>
  );
};
