import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../icons/search-icon";
import { InputContainer, PrimaryInput } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  
}

export function PrimaryInputWsearchIcon(props: InputProps){
  return(
    <InputContainer>
      <PrimaryInput {...props}/>
      <SearchIcon/>
    </InputContainer>
  )
};