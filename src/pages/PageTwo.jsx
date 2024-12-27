import React from "react"
import AppButton from "../components/AppButton"
import { Link } from "react-router-dom"


const PageTwo = () => {
  return(
    <Link to="/page-three">
    <AppButton 
      buttonText={"Далее"}
      buttonType={"button"}
      isDisabled={false}
    />
    </Link>
  )
}

export default PageTwo