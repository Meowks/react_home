import React from "react";
import AppButton from "../components/AppButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppInput from "../components/AppInput";


const PageThree = () => {
  const navigate = useNavigate()
  const [answer, setAnswer] = useState("");

  
  return (
    <>
      <AppInput
        inputValue={answer}
        inputChange={setAnswer}
      />
      <AppButton
        buttonText={"Далее"}
        buttonType={"button"}
        isDisabled={false}
        buttonClick={()=>navigate("/page-four")}
      />
    </>

  )
}

export default PageThree