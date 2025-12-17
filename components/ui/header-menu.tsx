"use client"
import React from 'react'
import { HeaderData } from '../constants/data'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'



const HeaderMenue = ({className}:{className?:string}) => {
    const pathname= usePathname();
    console.log('Path name is: ', pathname);
    

  return (
    <div className={cn(" md:flex justify-between gap-6 font-semibold text-white w-1/3",className)}>
      {HeaderData?.map((item)=>(
        <Link
         key={item?.title} href={item?.href} className={`hover:text-logo-primary hoverEffect relative group mx-auto  whitespace-nowrap ${pathname === item?.href && "text-logo-primary"}`}>
            {item?.title}
            <span
             className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-logo-primary group-hover:w-1/2 hoverEffect group-hover:left-0 ${pathname === item?.href && "w-1/2"}`}
             />

            <span
             className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-logo-primary group-hover:w-1/2 hoverEffect group-hover:right-0 ${pathname === item?.href && "w-1/2"}`}
            />
            
        </Link>
      ))}
    </div>
  )
}

export default HeaderMenue
