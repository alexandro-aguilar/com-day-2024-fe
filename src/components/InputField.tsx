import React, { ChangeEvent } from 'react';

interface InputFieldProps {
  label: string,
  type: string,
  value: string,
  required: boolean
  autoComplete: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<InputFieldProps> = ({ label, type, value, required, onChange, autoComplete }) => (
  <div className='mb-4'>
    <label
      className='block text-gray-700 text-sm font-bold mb-2'
    >
      {label}
    </label>
    <input
      type={ type }
      value={ value }
      onChange={ onChange }
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      required={ required }
      autoComplete={ autoComplete }
    />
  </div>
);

export default InputField;