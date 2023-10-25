import './ResultConversion.scss';

type ResultConversionProps = {
  selectedCurrency: {
    description: string;
    rate: number;
  } | null;
};

function ResultConversion({ selectedCurrency }: ResultConversionProps) {
  return (
    <div className="result-conversion">
      {selectedCurrency ? (
        <div>
          <p className="result-conversion__value">{selectedCurrency.rate}</p>
          <p className="result-conversion__currency">
            {selectedCurrency.description}
          </p>
        </div>
      ) : (
        <p className="result-conversion__placeholder">
          Sélectionnez une devise
        </p>
      )}
    </div>
  );
}

export default ResultConversion;
