import { useState } from "react";
import "./App.css";
import React from "react";
import useCurrencyInfo from "./hooks/customhooks";
import { InputBox } from "./components";

// https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    if (currencyInfo[to]) setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="flex">
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  SWAP
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} To {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg')",
        }}
      >
        <div className="w-full max-w-md p-6 rounded-lg backdrop-blur-md bg-white/30 shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Currency Converter
          </h2>
          <p className="text-white/90 text-sm leading-relaxed">
            Convert currencies instantly with real-time exchange rates. Simple,
            fast, and reliable conversion between global currencies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
