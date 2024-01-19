'use client';

import React from 'react'
import Link from 'next/link'

import Eye from './Eye'
import Icons from './Icons'

import { usePathname } from 'next/navigation'
import {motion} from "framer-motion"

export const CustomLink = ({href, title, className=""}) => {
    const currentPage = usePathname();

    return(
        <Link href={href} className={`${className} relative group`}>
        {title}
            <span className={`h-[1px] inline-block
            absolute left-0 bottom-0.5
            group-hover:w-full transition-[width] ease duration-160
            ${currentPage === href ? 'w-full' : 'w-0'}
            bg-dark dark:bg-light`}>
                &nbsp;
            </span>
        </Link>
    )
}

export const CustomAnchor = ({href, target, className="", icon}) => {
    const Icon = Icons[icon];

    return(
        <motion.a href={href} target={target} className={`${className} w-6 mx-2`} 
        whileHover={{y:-4}}
        whileTap={{scale:0.8}}>
            <Icon />
        </motion.a>
    )
}

const Header = () => {
    return (
        <header className='flex justify-between flex-col font-medium pb-2 
        md:flex-row md:items-center md:space-x-4'>

            <CustomLink href="/" title="Olúwanífẹ́mi Fádáre" className='font-bold w-auto'/>

            <div className='flex items-center justify-between flex-1 mt-1 md:mt-0'>
                <ul className='flex items-baseline space-x-4 text-sm overflow-x-uato'>
                    <li><CustomLink href="/projects" title="Projects"/></li>
                    <li><CustomLink href="/guestbook" title="Guestbook" /></li>
                </ul>
                <nav className='flex items-center justify-between'>
                    <CustomAnchor href="https://github.com/offad" target={"_blank"} icon={"GithubIcon"}/>
                    <CustomAnchor href="https://twitter.com/Offadare" target={"_blank"} icon={"TwitterIcon"}/>
                    <CustomAnchor href="https://www.instagram.com/of.fad/" target={"_blank"} icon={"InstagramIcon"}/>
                    <CustomAnchor href="https://www.linkedin.com/in/offad/" target={"_blank"} icon={"LinkedInIcon"}/>
                    <Eye />
                </nav>
            </div>
            
        </header>
    )
}

export default Header