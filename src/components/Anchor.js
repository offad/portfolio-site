import React from 'react'
import Link from 'next/link'    

const Anchor = ({className='', href, text}) => {
  return (
    <Link className={`${className} underline text-blue-800 dark:text-blue-300`} href={href} target={"_blank"}>
        {text}
    </Link>
  )
}

export default Anchor