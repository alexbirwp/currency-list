import Currencies from './components/Currency/Currencies';
import CurrencyList from './components/Currency/CurrencyList';

function App() {
  return (
    <div>
      <Currencies />
      <footer>
        <a href="https://www.cbr-xml-daily.ru/">API для курсов ЦБ РФ</a>
      </footer>
    </div>
  );
}

export default App;
