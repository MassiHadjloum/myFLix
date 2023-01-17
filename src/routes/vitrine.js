import NavBar from 'components/navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Vitrine = () => {
  return (
    <>
    <NavBar shownav={true}/>
    <Outlet />

    </>
  )
}

export default Vitrine