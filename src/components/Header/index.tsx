"use client"
import { TagHeader, TagLogo, } from "./style";

import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWsearchIcon } from './../Input/InputWSearchIcon';
import { BagControl } from './../Bag/bag-control';

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin'] 
  })

interface HeaderProps {

}
export function Header(props : HeaderProps){
    return(
        <TagHeader>
            <TagLogo className={sairaStencil.className}>Caputeeno</TagLogo>
            <div>
              <PrimaryInputWsearchIcon placeholder="Procurando por algo específico?"></PrimaryInputWsearchIcon>
              <BagControl/>
            </div>
        </TagHeader>
    )
}