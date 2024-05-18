import s from './error.module.scss';

type ErrorProps = {
  message: string;
};

export const Error = ({ message }: ErrorProps) => {
  return (
    <div className={s.wrapper}>
      Error: <span className={s.title}>{message}</span>
    </div>
  );
};
