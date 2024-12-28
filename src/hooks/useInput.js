import { useState, useRef, useEffect } from "react";
export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef()
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    console.log(value);
  }, [value]);
  return {value, setValue, handleOnChange, inputRef}
}
