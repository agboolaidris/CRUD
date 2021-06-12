import React from "react";
import { TextAreaContainer } from "./textinput.style";

interface Props {
  onChange?: (e: any) => any;
  value?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

function TextArea({
  onChange,
  value,
  name,
  placeholder,
  required,
  error,
}: Props) {
  return (
    <TextAreaContainer active={error ? true : false}>
      <textarea
        placeholder={error ? error : placeholder}
        onChange={onChange}
        value={error ? "" : value}
        name={name}
        required={required}
      ></textarea>
    </TextAreaContainer>
  );
}

export default TextArea;
