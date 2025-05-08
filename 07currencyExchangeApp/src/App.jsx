import { useEffect, useState } from 'react';

function App() {
  const [amount, setAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [currencies, setCurrencies] = useState({});
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch list of currencies
  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.frankfurter.app/currencies')
      .then(res => res.json())
      .then(data => setCurrencies(data))
      .catch(() => setCurrencies({}))
      .finally(() => setIsLoading(false));
  }, []);

  // Fetch conversion when amount/from/to changes
  useEffect(() => {
    if (!amount || isNaN(amount)){
      setResult(null);
      return;
    }

    if (fromCurrency === toCurrency) {
      setResult(amount);
      return;
    }

    setIsLoading(true);
    fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
      .then(res => res.json())
      .then(data => setResult(data.rates[toCurrency]))
      .catch(() => setResult(null))
      .finally(() => setIsLoading(false));
  }, [amount, fromCurrency, toCurrency]);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Allow empty value or valid numbers
    if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Currency Converter</h1>
          <p className="text-indigo-200">Real-time exchange rates</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
          <div className="mb-6">
            <label className="block text-sm font-medium text-white/80 mb-2">Amount</label>
            <div className="relative">
              <input
                type="text"
                value={amount}
                onChange={handleAmountChange}
                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter amount"
                inputMode="decimal"
              />
              <span className="absolute right-3 top-3 text-white/70">{fromCurrency}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex-1 mr-4">
              <label className="block text-sm font-medium text-white/80 mb-2">From</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                disabled={isLoading}
              >
                {Object.keys(currencies).map((cur) => (
                  <option key={cur} value={cur} className="bg-purple-800">
                    {cur} - {currencies[cur]}
                  </option>
                ))}
              </select>
            </div>

            <button 
              onClick={swapCurrencies}
              className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-all duration-200 mt-6 flex items-center justify-center"
              aria-label="Swap currencies"
            >
        swap
            </button>

            <div className="flex-1 ml-4">
              <label className="block text-sm font-medium text-white/80 mb-2">To</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                disabled={isLoading}
              >
                {Object.keys(currencies).map((cur) => (
                  <option key={cur} value={cur} className="bg-purple-800">
                    {cur} - {currencies[cur]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-sm text-white/70 mb-1">Conversion Result</div>
            <div className="text-2xl font-bold text-white min-h-10">
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Calculating...</span>
                </div>
              ) : result !== null && amount ? (
                <>
                  {amount} {fromCurrency} = <span className="text-purple-300">{Number(result).toFixed(4)}</span> {toCurrency}
                </>
              ) : (
                <span className="text-white/70">Enter amount to convert</span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-white/50 text-xs">
          Rates provided by Frankfurter API
        </div>
      </div>
    </div>
  );
}

export default App;