import { useState } from 'react';

import BaseAmount from '../BaseAmount/BaseAmount';
import Currencies from '../Currencies/Currencies';
import ResultConversion from '../ResultConversion/ResultConversion';
import Footer from '../Footer/Footer';

import './App.scss';

import currenciesData from '../../data/currencies';

function App() {
  const [likesCount, setLikesCount] = useState(0);
  const [rate, setRate] = useState(1);
  const [description, setDescription] = useState('euro');

  return (
    <div className="App">
      <BaseAmount />
      <Currencies
        currencies={currenciesData}
        setRate={setRate}
        setDescription={setDescription}
      />
      <ResultConversion rate={rate} description={description} />
      <Footer likesCount={likesCount} setLikesCount={setLikesCount} />
    </div>
  );
}

export default App;
