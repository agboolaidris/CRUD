import React from "react";
import { InputContainer } from "./textArea.style";

interface Props {
  Icon?: any;
  onChange?: (e: any) => any;
  value?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  error?: string;
}

function InputText({
  Icon,
  onChange,
  value,
  name,
  placeholder,
  required,
  type,
  error,
}: Props) {
  return (
    <InputContainer active={error ? true : false}>
      {Icon && <Icon />}
      <input
        placeholder={error ? error : placeholder}
        onChange={onChange}
        value={error ? "" : value}
        name={name}
        required={required}
        type={type}
      />
    </InputContainer>
  );
}

export default InputText;
