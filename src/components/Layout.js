import React from 'react'

const Layout = ({children, classname=''}) => {
  return (
    <div className={`inline-block z-0 ${classname}`}>
        {children}
    </div>
  )
}

export default Layout