import React, { ChangeEvent } from "react";
import Types from "../utils/types";

interface ComboBoxProps {
  role: Types;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const ComboBox: React.FC<ComboBoxProps> = ({ role, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">Select Role</label>
    <select
      value={ role }
      onChange={ onChange }
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required
    >
      <option value="1">Software Development</option>
      <option value="2">Infrastructure</option>
      <option value="3">Data</option>
    </select>
  </div>
);

export default ComboBox;
