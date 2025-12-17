import React, { FC } from 'react'
interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
const SideMunu:FC<SideMenuProps> = ({isOpen,onClose}) => {
  return (
    <div className={`fixed top-0 left-0 h-full w-2xl bg-black/85 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 hoverEffect`}>
      sidemenu
    </div>
  )
}

export default SideMunu
