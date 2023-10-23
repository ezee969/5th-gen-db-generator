import { useState, ChangeEvent } from 'react';

export interface UseFieldType {
  attributes: {
    type: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };
}

const useField = (type: string, initialValue?: string): UseFieldType => {
  const [value, setValue] = useState(initialValue || '');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    attributes: { type, value, onChange },
  };
};

export default useField;
