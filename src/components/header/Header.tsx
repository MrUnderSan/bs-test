import s from './header.module.scss';
import { GameType } from '../gameType';
import { Search } from '../search';

export const Header = () => {
  return (
    <header className={s.header}>
      <GameType />
      <Search />
    </header>
  );
};
