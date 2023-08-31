import React from 'react'
import Header from '../containers/Header'

function Layout({children}) {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}

export default Layout