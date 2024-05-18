import { GameList, Header, LogoBlock, Spinner } from 'src/components';
import { statusSelector, useGetGamesQuery } from 'src/services';
import { useSelector } from 'react-redux';
import s from './mainPage.module.scss';

export const MainPage = () => {
  const { isLoading } = useGetGamesQuery();
  const status = useSelector(statusSelector);

  return (
    <>
      <Header />
      <LogoBlock />

      {(isLoading || status === 'loading') && (
        <div className={s.content}>
          <Spinner />
        </div>
      )}
      <GameList />
    </>
  );
};
