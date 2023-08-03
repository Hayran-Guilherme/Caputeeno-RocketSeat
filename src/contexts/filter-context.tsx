"use client"

import { FilterType } from "@/types/fliter-types";
import { PriorityType } from "@/types/priority-types";
import { createContext, useState } from "react";

export const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterType.ALL,
  priority: PriorityType.NEWS,
  setPriority: (value: PriorityType) => {},
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
})

interface ProviderProps {
  children: React.ReactNode
}

export function FilterContextProvider({children}: ProviderProps){
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [type, setType] = useState(FilterType.ALL)
  const [priority, setPriority] = useState(PriorityType.NEWS)

  return(
    <FilterContext.Provider 
      value={{
        search, 
        page, 
        type, 
        priority,
        setSearch, 
        setPage, 
        setType,
        setPriority}}>
      {children}
    </FilterContext.Provider>
  )
}