import React from "react";


const AppInput = ({
  inputValue,
  inputChange,
  hasError,
}) => {
  return(
    <input 
    required
    type="text" 
    id="input" 
    placeholder="Введите что-нибудь" 
    // value={inputValue}
    onClick={(e) => inputChange(e.target.value)}
    />
  )
}

export default AppInput