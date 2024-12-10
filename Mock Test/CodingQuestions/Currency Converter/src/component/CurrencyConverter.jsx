import React, { useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("INR");
  const [total, setTotal] = useState(0);

  const exchangeRates = {
    INR: { INR: 1, USD: 0.012, EUR: 0.011, JPY: 1.5 },
    USD: { INR: 83, USD: 1, EUR: 0.92, JPY: 110 },
    EUR: { INR: 89, USD: 1.09, EUR: 1, JPY: 129.5 },
    JPY: { INR: 0.67, USD: 0.0091, EUR: 0.0077, JPY: 1 },
  };
  const handleConvert = () => {
    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = amount * rate;
    setTotal(result);
  };
  return (
    <div className="bg-[#deb887] w-[100%] h-[100vh] flex flex-col gap-[40px] items-center">
      <h1 className="bg-[purple] h-[60px] w-[100%] text-center text-[30px] text-[white] p-[5px]">
        Currency Converter
      </h1>
      <div className="w-[40%] min-h-[40vh]  bg-[white] rounded-md flex flex-col items-center justify-center">
        <div className="pt-[10px]">
          <label htmlFor="from" className="mr-[20px]">
            From:
          </label>
          <select
            className="mr-[40px]"
            value={fromCurrency}
            onChange={(e) => {
              setFromCurrency(e.target.value);
            }}
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
          </select>

          <label htmlFor="To" className="mr-[20px]">
            To:
          </label>
          <select
            className="mr-[10px]"
            value={toCurrency}
            onChange={(e) => {
              setToCurrency(e.target.value);
            }}
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
          </select>
        </div>
        <label htmlFor="" className="mt-[20px]">
          Amount:{" "}
        </label>
        <input
          type="text"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          className="border border-[black] rounded-md mt-[15px]"
        />{" "}
        <br />
        <button
          className="bg-[blue]  px-[10px] py-[4px] rounded-lg"
          onClick={handleConvert}
        >
          Convert
        </button>
        <div className="bg-[lightBlue] mt-[10px] w-[60%] flex items-center justify-center">
          <h1 className="text-[40px]">{total}</h1>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
