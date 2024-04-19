"use client";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  name?: string;
  disabled?: boolean;
  onBlur?: () => void;
  ref: any;
}

export default function InputPhone({
  value,
  onChange,
  ref,
  name,
  disabled,
  onBlur,
}: InputProps) {
  return (
    <div>
      <PhoneInput
        defaultCountry="in"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        ref={ref}
        name={name}
        className=""
        inputClassName="input-background_primary"
        inputStyle={{
          width: "100%",
          border: "none",
          background:
            "linear-gradient(97.49deg, #FFFFFF30 -18.1%, #1D1C1C30 109.71%)",
          color: "white",
        }}
        countrySelectorStyleProps={{
          buttonStyle: {
            background:
              "linear-gradient(97.49deg, #FFFFFF30 -18.1%, #1D1C1C30 109.71%)",
            border: "none",
            padding: "0 10px",
          },
        }}
      />
    </div>
  );
}
