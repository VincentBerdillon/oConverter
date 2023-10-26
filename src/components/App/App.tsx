import { useEffect, useState } from 'react';
import { Currency } from '../../types/currency';

import BaseAmount from '../BaseAmount/BaseAmount';
import Currencies from '../Currencies/Currencies';
import ResultConversion from '../ResultConversion/ResultConversion';
import Footer from '../Footer/Footer';

import './App.scss';

import currenciesData from '../../data/currencies';

function App() {
  const [likesCount, setLikesCount] = useState(0);
  const [currency, setCurrency] = useState<Currency>(currenciesData[0]);
  //const [rate, setRate] = useState(0);

  useEffect(()=>{
    document.title = `${currency.description} - React Currency Converter - ${likesCount} likes`;
    // fetch(
    //   `http://api.exchangerate.host/convert?from=EUR&to=${currency.code}&amount=1&access_key=f2fd6ae06abf0999da92bf08591832c8`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setRate(data.result);
    //   });
  }, [currency, likesCount]);
  // useEffect permet d'exécuter une action lorsque les variables précisées en tableau changent
  // si on passe un tableau vide, l'action ne sera exécuté qu'au premier chargement (ex.tous les arcticles d'un blog);

  return (
    <div className="App">
      <BaseAmount />
      <Currencies
        currencies={currenciesData}
        onClickCurrency={setCurrency}
      />
      <ResultConversion value={currency.rate} currencyName={currency.description} />
      <Footer likesCount={likesCount} setLikesCount={setLikesCount} />
    </div>
  );
}

export default App;
