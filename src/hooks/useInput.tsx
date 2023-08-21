import { useCallback, useState } from 'react';

/**
 * @description 텍스트 input hook
 */
const useTextInput = (initText?: string) => {
  const [inputValue, setInputValue] = useState(initText ?? '');

  const onChangeInputValue = useCallback((text: string) => {
    setInputValue(text);
  }, []);

  return { inputValue, onChangeInputValue, setInputValue };
};

export default useTextInput;
