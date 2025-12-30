import MainPage from '../../pages/main-page/main-page.tsx';

type AppScreenProps = {
  offersAmount: number;
}

function App({offersAmount}: AppScreenProps): JSX.Element {
  return (
    <MainPage offersAmount={offersAmount} />
  );
}

export default App;
