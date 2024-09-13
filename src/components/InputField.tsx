import React, { ChangeEvent } from 'react';

interface InputFieldProps {
  label: string,
  type: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange }) => (
  <div>
    <label>{label}</label>
    <input type={ type } value={ value } onChange={ onChange } required />
  </div>
);

export default InputField;