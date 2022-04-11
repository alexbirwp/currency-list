import ActiveCurrency from './components/ActiveCurrency/ActiveCurrency';
import Currencies from './components/Currency/Currencies';
import ActiveValuteProvider from './context/ActiveValuteContext';

function App() {
  return (
    <>
      <main>
        <ActiveValuteProvider>
          <Currencies />
          <ActiveCurrency />
        </ActiveValuteProvider>
      </main>
      <footer>
        <a href="https://www.cbr-xml-daily.ru/">API для курсов ЦБ РФ</a>
      </footer>
    </>
  );
}

export default App;
