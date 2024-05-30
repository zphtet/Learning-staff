
import React, { ComponentPropsWithoutRef, useState, useTransition } from 'react'
import About from './about'
import Projects from './projects'
import Contact from './contact'



type TabButtonType = {
    title : string,
    active: boolean,
    isLoading?  :boolean
} & ComponentPropsWithoutRef<'button'>

const TabButton : React.FC< TabButtonType> = ({title , active ,isLoading,...other})=>{
     return <button className={`py-2 px-6 border border-blue-500 rounded-md ${active && 'bg-blue-500 text-white'} ${isLoading && 'animate-bounce'}`} {...other}>{title}</button>
}

const Transition = () => {


    const AboutMemo =  React.memo(About)
    const ProjMemo = React.memo(Projects)
    const ContactMemo = React.memo(Contact)

    const mapObj = {
        about : AboutMemo,
        projects: ProjMemo,
        contact : ContactMemo,
   }

   type tabs =keyof typeof mapObj;

    const [tab , setTab] = useState<tabs>('about')
    const [isPending , startTransition] = useTransition()

    console.log("current tab", tab)
    const onTabClick = (title : tabs)=>{

          startTransition(()=>{
               setTab(title)
          })
        
    }  

    // const Component = mapObj[tab]

  return (
    <div className='w-full flex flex-col items-center justify-center p-10'>
            <div className='space-x-10'>
                <TabButton onClick={()=> onTabClick('about')}    active={tab === 'about'}  title='about'/>
                <TabButton onClick={()=> onTabClick('projects')}     isLoading={isPending} active={tab === 'projects'} title='projects'/>
                <TabButton onClick={()=> onTabClick('contact')}    active={tab === 'contact'}  title='contact'/>
            </div>

            <div className='max-h-[800px] overflow-scroll'>
                {

                    tab === 'about' && <AboutMemo/>
                
                }
                {
                    tab === 'contact' && <ContactMemo/>
                }

{
                    tab === 'projects' && <ProjMemo/>
                }
                 
            </div>
    </div>
  
  )
}

export default Transition