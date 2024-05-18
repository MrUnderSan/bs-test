import s from './logoBlock.module.scss';
import { Logo } from 'src/assets/icons';
import { useSelector } from 'react-redux';
import { errorSelector, statusSelector } from 'src/services';
import { Error } from '../error';

export const LogoBlock = () => {
  const error = useSelector(errorSelector);
  const status = useSelector(statusSelector);

  const errorText = status === 'failed' && error ? error : 'Unknown error';

  return (
    <div className={s.wrapper}>
      <div className={s.logoBox}>
        <Logo />
        <h1 className={s.title}>Pragmatic play</h1>
      </div>
      {status === 'failed' && <Error message={errorText} />}
    </div>
  );
};
