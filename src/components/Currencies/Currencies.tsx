import { ChangeEvent, useState } from 'react';
import './Currencies.scss';
import{ Currency } from '../../types/currency';

type CurrenciesProps = {
  currencies: Currency[];
  setRate: (value: number) => void;
  setDescription: (value: string) => void;
};

function Currencies({ currencies, setRate, setDescription }: CurrenciesProps) {
  const [searchText, setSearchText] = useState('');

  function handleChangeSearchtextInput(
    event: ChangeEvent<HTMLInputElement>
  ): void {
    const newValue = event.target.value;
    setSearchText(newValue);
  }

  const currenciesFiltered = currencies.filter((currency) => {
    const searchTextLowerCased = searchText.toLocaleLowerCase();
    return currency.description.toLowerCase().includes(searchTextLowerCased);
  });

  function handleClickCurrency(currencyClicked: Currency) {
    const { description } = currencyClicked;
    const { rate } = currencyClicked;
    setRate(rate);
    setDescription(description);
  }

  return (
    <div className="currencies">
      <div className="currencies__title">
        <input
          type="text"
          className="currencies__input"
          value={searchText}
          placeholder="recherche rapide"
          onChange={handleChangeSearchtextInput}
        />
      </div>
      <ul className="currencies__list">
        {currenciesFiltered.map((currency) => (
          <li className="currencies__list-item" key={currency.code}>
            <button
              type="button"
              className="currencies__list-itemBtn"
              onClick={() => handleClickCurrency(currency)}
            >
              {currency.description}
            </button>
          </li>
        ))}
        {currenciesFiltered.length === 0 && (
          <li className="currencies__item">
            <button type="button" className="currencies__list-itemBtn" disabled>
              Aucune devise trouvée
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
export default Currencies;
