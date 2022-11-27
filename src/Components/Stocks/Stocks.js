import React from 'react'
import { Instruments2 } from '../Instruments2/Instruments2'
import { Header } from '../Header/Header'
import { SideBar } from '../SideBar/SideBar';
import TreeMapChart from '../charts/TreeMapChart'
import {Footer} from '../Footer/Footer'

import './stocks.css'

export const Stocks = () => {
  return (
    <>
        <SideBar/>
        <Header/>
        <Instruments2/>
        <TreeMapChart/>
    </>
  )
}

