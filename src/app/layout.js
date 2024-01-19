`use client`;

import { Cinzel } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Script from 'next/script'

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: "--font-cinzel"
})

export const metadata = {
  title: 'Olúwanífẹ́mi Fádáre',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cinzel.className}-900 bg-light dark:bg-dark dark:text-light`}>
        <Script strategy='beforeInteractive' id="theme-switcher">
            {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
            `}
        </Script>

        <div className='max-w-screen-md mx-auto py-12 px-4'>
          <Header />
          {children}
        </div>

      </body> 
    </html>
  )
}