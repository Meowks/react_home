import React, {useState, useContext} from "react"
import AppButton from "../components/AppButton"
import AppInput from "../components/AppInput"
import { Link } from "react-router-dom"
import { ThemeContext,themes } from "../contexts/themeContext"



const PageOne = () => {
  const {theme,toggleTheme} = useContext(ThemeContext)

  const [val, setVal] = useState("");
  return(
    <div className={`container ${theme===themes.dark && "_dark"}`}>
      <AppInput 
        inputValue={val}
        inputChange={setVal}
      />
      <AppButton 
      buttonType="button" 
      buttonText="тема" 
      buttonClick={toggleTheme}
      />
  
      <Link to="/page-two">
      <AppButton 
        buttonText={"Далее"}
        buttonType={"button"}
        isDisabled={false}  
      />
      </Link>
    </div> 
  )
}

export default PageOne