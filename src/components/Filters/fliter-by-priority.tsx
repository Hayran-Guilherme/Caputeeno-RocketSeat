import styled from "styled-components";
import { FilterIcon } from "../icons/filter-icon";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityType } from '@/types/priority-types';

interface FilterByPriorityProps {

}

const PrioContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button{
    border: none;
    background: transparent;
    cursor: pointer;
    
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);

    display: flex;
    align-items: center;
    justify-content: center;

    svg{
      margin-left: 16px;
    }
  }
`

const PriorityFilter = styled.ul`
  position: absolute;
  width: 176px;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 16px;

  list-style: none;

  top: 100%;

  li{
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    color: var(--text-dark);

    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`

export function FilterByPriority(props : FilterByPriorityProps){
  const [isOpen, setIsOpen] = useState(false)
  const { setPriority } = useFilter()

  const handleOpen = () => setIsOpen(prev => !prev)
  const handleUpdatePriority = (value: PriorityType) => {
    setPriority(value)
    setIsOpen(false)
  }

    return(
        <PrioContainer>
          <button onClick={handleOpen}> Organizar por <FilterIcon/> </button>
          {isOpen && 
            <PriorityFilter>
              <li onClick={()=> handleUpdatePriority(PriorityType.NEWS)}>Novidades</li>
              <li onClick={()=> handleUpdatePriority(PriorityType.BIGGEST_PRICE)}>Preço: Maior - menor</li>
              <li onClick={()=> handleUpdatePriority(PriorityType.MINOR_PRICE)}>Preço: Menor - menor</li>
              <li onClick={()=> handleUpdatePriority(PriorityType.POPULARITY)}>Mais vendidos</li>
            </PriorityFilter>}
        </PrioContainer>
    )
}