'use client';

import Image from 'next/image'
import headshotPic from "../../public/headshot.jpg"
import Layout from '@/components/Layout'
import { LinkArrow } from '@/components/Icons'
import Script from 'next/script'
import Link from 'next/link'
import Anchor from '@/components/Anchor'

export default function Home() {
  return (
    <main>

      <Layout className='pt-0'>

        <section className='max-w-full'>

          <div className=' w-full flex justify-between'>
            
            <div className='w-3/5 grid gap-4'>

              <h1 className='mt-12 text-4xl font-medium font-title'>I study CS and philosophy at St Andrews.</h1>

              <p>
                I like <Anchor class="border-b" href="https://www.roblox.com/groups/7169793/Luwabi-Productions#!/about" text='Roblox'/>,&nbsp; 
                <Anchor class="border-b" href="https://play.google.com/store/apps/developer?id=David+Fadare" text='Android apps'/>, and
                the <Anchor class="border-b" href="https://saintspad.org.uk/" text='Formula Student Competition'/>.
              </p>

              <p>
                I watch anime and meditate in my freetime.
              </p>

              <Script strategy='beforeInteractive' id="jquery" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"/>
              <Script strategy='beforeInteractive' id="music" src="/music.js" type="text/javascript" defer/>

              {/* Add music components*/}

              <music-component></music-component>

              <div className='flex items-center self-start mt-2'>

                <Link 
                  href="https://1drv.ms/b/s!AuRu6SxDF7WrhN9c-YshuS-9vVjsuA?e=F5rm2r" 
                  className='flex items-center 
                    border-2 border-solid border-transparent p-2 px-4 rounded-lg 
                    bg-dark text-light text-lg font-semibold 
                    hover:bg-light hover:text-dark hover:border-dark
                    dark:bg-light dark:text-dark
                    hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'
                  target={"_blank"} download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"}/>
                </Link>

                <Anchor 
                  href="mailto:of.fadare@gmail.com"
                  className='ml-4 text-lg font-medium'
                  text='Contact'
                />

              </div>

            </div>

            <div className='w-2/5 items-center mt-12'>
              <Image src={headshotPic} alt='Fẹ́mi' className='w-full h-auto rounded'
              priority sizes = "(max-width: 768px) 100vw, (max-wwidth:1200px) 50vw, 50vw" />
            </div>
          </div>

        </section>

        <section class="mt-12">
          <h2 class="flex items-center space-x-4 mb-4">
            <span class="font-semibold">Connect</span>
            <span class="border-t flex-1"></span>
          </h2>

          <div class="text-gray-600 dark:text-gray-300 markdown grid gap-4">
            
            <p>
              Leave anonymous feedback on <Anchor href="https://www.admonymous.co/offadare" text='Admonymous'/>.
            </p>

            <p>
              Recommend me <Anchor href="https://myanimelist.net/profile/offad" text='anime to watch'/>.
            </p>

            <p>
              Subscribe to my blog.
              <iframe src="https://offad.substack.com/embed"  frameborder="0" scrolling="no"
                className="w-full max-w-lg rounded-lg 
                border-2 border-solid border-dark
                dark:border-light">
              </iframe>
              <p class="mt-1.5 text-xs">Or follow me on <Anchor href="https://twitter.com/Offadare" text='Twitter'/></p>
            </p>

            
                    
                    

          </div>

        </section>

        <section class="mt-12">
          <h2 class="flex items-center space-x-4 mb-4">
            <span class="font-semibold">Colophone</span>
            <span class="border-t flex-1"></span>
          </h2>
          <div class="text-gray-600 dark:text-gray-300 markdown grid gap-4">
            <p>
              Text is set in&nbsp;
              <Anchor href="https://fonts.google.com/specimen/Cinzel" text='Cinzel'/>.
              The favicon was obtained from&nbsp;
              <Anchor href="https://www.flaticon.com/authors/freepik" text='Freepik'/>.
              My most recently listened to Spotify track is fetched with&nbsp; 
              <Anchor href="https://swiperjs.com/" text='Swiper'/>
              &nbsp;and&nbsp;
              <Anchor href="https://www.last.fm/api" text='Last.fm'/>
            </p>

            <p>
              I took inspiration from&nbsp; 
              <Anchor href="https://www.jedmund.com/" text='Justin Edmund'/>,&nbsp;
              <Anchor href="https://mitchellh.com/" text='Mitchell Hashimoto'/>,&nbsp;
              <Anchor href="https://minimal-nextjs-portfolio-website.vercel.app/" text='CodeBucks'/>,&nbsp;
              <Anchor href="https://vanajmoorthy.com/" text='Vanaj Moorthy'/>, and&nbsp;
              <Anchor href="https://kabirgoel.com/" text='Kabir Goel'/>.
            </p>

            <p>
              Take a look at the code&nbsp;
              <Anchor href="https://github.com/offad/portfolio-site" text='here'/>     
              &nbsp;for a look behind the hood.
            </p>
          </div>
        </section>

      </Layout>
    </main>
  )
}
