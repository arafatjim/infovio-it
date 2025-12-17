import React, { FC } from 'react'
import Logo from './logo';
import HeaderMenue from './header-menu';
import { X } from 'lucide-react';
import { HeaderData } from '../constants/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialMedia from './socialMedia';
import { useOutsideClick } from '@/hooks/useOutsideCLick';
interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
const SideMunu:FC<SideMenuProps> = ({isOpen,onClose}) => {
  const pathname= usePathname();
  const sidebarRef= useOutsideClick <HTMLDivElement> (onClose);
  return (
    <div className={`fixed top-0 left-0 h-full w-11/12 bg-black/85 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50`}>
      
      <div ref={sidebarRef} className='w-11/12 py-4 mx-auto overflow-hidden border-b border-btn-primary'>
      <Logo />
      <button>
        <X onClick={onClose} className='text-white w-6 h-6 text-center hover:text-logo-primary cursor-pointer absolute top-4 right-4' />
      </button>
      </div>

      <div className='flex flex-col gap-6 mt-4 ml-6 text-white/70 font-semibold text-normal'>
      {HeaderData?.map((item)=>(
        <Link href={item?.href} key={item?.title} className={` hover:text-logo-primary hoverEffect ${pathname === item?.href && 'text-logo-primary'}`} onClick={onClose} >
          {item?.title}
        </Link>
      ))}
      </div>
      
      <div className='text-white/70 mt-4 ml-6'>
        <SocialMedia />
      </div>
    </div>
  )
}

export default SideMunu
