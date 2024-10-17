import React, { useState } from "react";
import { API } from "../../config";
import { currencyCodes, currencyNames } from "../paises";
import { SelectMoneda } from "./SelectMoneda";
export const Conversor = () => {
  const [moneda1, setMoneda1] = useState("");
  const [moneda2, setMoneda2] = useState("");
  const [dataMoneda, setDataMoneda] = useState([]);
  const [error, setError] = useState();
  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(null);

  const conversorMoneda = async (mon1, mon2) => {
    const url = `https://v6.exchangerate-api.com/v6/${API}/pair/${mon1}/${mon2}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.result !== "success") {
      setError(data.error - type);
    } else {
      setDataMoneda(data.conversion_rate);
      setTotal(parseFloat(cantidad * data.conversion_rate).toFixed(2));
    }
  };

  return (
    <>
      <h1>Currency Converter</h1>
      <div>
        <h3>Choose the currencies you want to compare: </h3>

        <SelectMoneda
          label={"Currency to convert: "}
          value={moneda1}
          onChange={(e) => setMoneda1(e.target.value)}
          currencyNames={currencyNames}
          currencyCodes={currencyCodes}
        ></SelectMoneda>
        <SelectMoneda
          label={"Currency to convert to: "}
          value={moneda2}
          onChange={(e) => setMoneda2(e.target.value)}
          currencyNames={currencyNames}
          currencyCodes={currencyCodes}
        ></SelectMoneda>
        <div>
          <label htmlFor="cantidad">How much to convert? </label>
          <input
            type="number"
            name=""
            id=""
            min="1"
            onChange={(e) => {
              setCantidad(e.target.value);
            }}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            conversorMoneda(moneda1, moneda2);
            console.log(moneda1, moneda2);
          }}
        >
          Convert
        </button>
        <div>
          {total !== null && (
            <p>
              Price: {total} {moneda2}
            </p>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </>
  );
};
