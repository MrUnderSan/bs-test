import s from './gameList.module.scss';
import { Card } from '../card';
import { gamesSelector, statusSelector } from 'src/services';
import { useSelector } from 'react-redux';
import { useCustomLazy } from 'src/common/hooks';
import {
  GAMES_VIEW_INCREMENT_COUNT,
  GAMES_VIEW_START_COUNT,
} from 'src/common/constants/';

export const GameList = () => {
  const status = useSelector(statusSelector);
  const games = useSelector(gamesSelector);
  const lazyGames = useCustomLazy(
    games,
    GAMES_VIEW_START_COUNT,
    GAMES_VIEW_INCREMENT_COUNT,
  );

  return (
    <section className={s.wrapper}>
      {games.length
        ? lazyGames.map(g => (
            <Card
              key={g.gameID}
              gameName={g.gameName}
              gameImg={`https://bsw-dk1.pragmaticplay.net/game_pic/square/200/${g.gameID}.png`}
            />
          ))
        : status !== 'loading' && <div className={s.empty}>Empty list</div>}
    </section>
  );
};
