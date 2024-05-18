import { useAppDispatch } from '../../store';
import { ChangeEvent } from 'react';
import { appActions } from 'src/services/app/app.slice';

export const useFilterGames = () => {
  const dispatch = useAppDispatch();

  const filterGames = () => dispatch(appActions.filterGames());

  const changeFilterByType = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      appActions.changeCurrentGameType({ gameTypes: e.currentTarget.value }),
    );
    filterGames();
  };

  const changeFilterBySearch = (searchGames: string) => {
    dispatch(appActions.changeCurrentSearchGames({ searchGames }));
    filterGames();
  };

  return {
    changeFilterByType,
    changeFilterBySearch,
  };
};
