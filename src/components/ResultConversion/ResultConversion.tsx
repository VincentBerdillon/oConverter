import './ResultConversion.scss';

type ResultConversionProps = {
  rate: number;
  description: string;
};

function ResultConversion({ rate, description }: ResultConversionProps) {
  return (
    <div className="result-conversion">
      <p className="result-conversion__result">{rate}</p>
      <p className="result-conversion__currency">{description}</p>
    </div>
  );
}
export default ResultConversion;
