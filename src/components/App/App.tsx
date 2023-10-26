import { useState } from 'react';
import { Currency } from '../../types/currency';

import BaseAmount from '../BaseAmount/BaseAmount';
import Currencies from '../Currencies/Currencies';
import ResultConversion from '../ResultConversion/ResultConversion';
import Footer from '../Footer/Footer';

import './App.scss';

import currenciesData from '../../data/currencies';

function App() {
  const [likesCount, setLikesCount] = useState(0);
  //const [rate, setRate] = useState(1);
  const [currency, setCurrency] = useState<Currency>(currenciesData[0]);

  return (
    <div className="App">
      <BaseAmount />
      <Currencies
        currencies={currenciesData}
      />
      <ResultConversion value={currency.rate} currencyName={currency.description} />
      <Footer likesCount={likesCount} setLikesCount={setLikesCount} />
    </div>
  );
}

export default App;
