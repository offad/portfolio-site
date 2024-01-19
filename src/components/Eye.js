'use client';

import React from 'react'
import {motion} from "framer-motion"
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { MoonIcon, SunIcon } from './Icons';

const Eye = () => {
  const [mode, setMode] = useThemeSwitcher();
  
  return (
    <div className='flex items-center justify-center ml-2 w-6'>
        <motion.button
        className={`rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
        whileHover={{scale:1.2}}
        onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {
            mode === "light" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/>
          }
        </motion.button>
    </div>
  )
}

export default Eye