import s from './search.module.scss';
import { useSelector } from 'react-redux';
import { currentSearchGamesSelector, useFilterGames } from 'src/services';
import { useDebounce } from 'src/common/hooks';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';

export const Search = () => {
  const currentSearchGames = useSelector(currentSearchGamesSelector);
  const [searchGames, setSearchGames] = useState(currentSearchGames);
  const debouncedSearchGames = useDebounce(searchGames);
  const { changeFilterBySearch } = useFilterGames();

  const handleSetSearchGames = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchGames(e.currentTarget.value);
  };

  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changeFilterBySearch(searchGames);
  };

  useEffect(() => {
    changeFilterBySearch(searchGames);
  }, [debouncedSearchGames]);

  return (
    <div className={s.wrapper}>
      <div className={s.title}>Search</div>
      <form action="" className={s.form}>
        <input
          type="text"
          className={s.input}
          value={searchGames}
          onChange={handleSetSearchGames}
        />
        <button className={s.button} onClick={onSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};
