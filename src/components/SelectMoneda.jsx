import React from "react";

export const SelectMoneda = ({
  label,
  value,
  onChange,
  currencyNames,
  currencyCodes,
}) => {
  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        <option value="" disabled>
          Seleccione una moneda
        </option>
        {currencyNames.map((currency, index) => (
          <option value={currencyCodes[index]} key={index}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};
