import React, {useState} from "react"
import AppButton from "../components/AppButton"
import AppInput from "../components/AppInput"
import { Link } from "react-router-dom"



const PageOne = () => {
  const [val, setVal] = useState("");
  return(
    <>
    <AppInput 
      inputValue={val}
      inputChange={setVal}
    />

    <Link to="/page-two">
    <AppButton 
      buttonText={"Далее"}
      buttonType={"button"}
      isDisabled={false}
      
    />
    </Link>
    </>
  )
}

export default PageOne