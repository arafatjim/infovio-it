"use client"
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import SideMunu from './sideMenu'

const MobileMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} >
        <AlignLeft className='text-white w-6 h-6  hover:text-logo-primary cursor-pointer md:hidden'  />
        </button>
      <div className='md:hidden' >
        <SideMunu isOpen={isSidebarOpen} onClose={()=> setIsSidebarOpen(false)} />
      </div>
    
    </>
  )
}

export default MobileMenu
