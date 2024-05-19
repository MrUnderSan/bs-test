import s from './gameType.module.scss';
import { useSelector } from 'react-redux';
import {
  currentGameTypeSelector,
  gameTypesSelector,
  useFilterGames,
} from 'src/services';

export const GameType = () => {
  const gameTypes = useSelector(gameTypesSelector);
  const currentGameType = useSelector(currentGameTypeSelector);
  const { changeFilterByType } = useFilterGames();

  return (
    <div className={s.wrapper}>
      <div className={s.title}>Game Type</div>
      <select
        name="gameType"
        className={s.select}
        onChange={changeFilterByType}
        defaultValue={currentGameType}
      >
        {gameTypes.map(t => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
};
