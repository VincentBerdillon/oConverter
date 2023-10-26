import './ResultConversion.scss';

type ResultConversionProps = {
  value: number;
  currencyName: string;
};

function ResultConversion({ value, currencyName }: ResultConversionProps) {
  return (
    <div className="result-conversion">
      <p className="result-conversion__result">{value}</p>
      <p className="result-conversion__currency">{currencyName}</p>
    </div>
  );
}
export default ResultConversion;
