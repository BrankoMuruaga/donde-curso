import React from "react";
import { type SelectProps } from "@src/types";

function Select({ label, options, defaultOption, id, ...props }: SelectProps) {
  return (
    <>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium">
          {label}
        </label>
      )}
      <select id={id} {...props}>
        <option value="" disabled>
          {defaultOption}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
