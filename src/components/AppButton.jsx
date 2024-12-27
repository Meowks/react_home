import React from "react"


const AppButton = ({
  buttonType,
  isDisabled,
  buttonText,
  buttonClick,
}) => {
  return(
    <button id={buttonType} type={buttonType} disabled={isDisabled} onClick={buttonClick}>
      {buttonText}
    </button>
  )
}

export default AppButton