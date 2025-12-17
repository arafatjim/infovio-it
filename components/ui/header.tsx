import Container2 from '@/app/container'
import React from 'react'
import Logo from './logo'
import HeaderMenue from './header-menu'
import SearchBar from './searchBar'
import CartIcon from './cartIcon'
import FavouriteBtn from './favouriteBtn'
import SignIn from './signIn'
import MobileMenu from './mobileMenu'


const Header = () => {
  return (
    <header className='bg-[#0e6b8e] flex justify-center py-5 shadow-sm sticky max-w-full top-0 z-50 mx-auto'>
        <Container2  className='flex px-2 justify-between w-full mx-auto items-center '> 
        {/* logo  */}

            <div className='w-auto md: flex  items-center gap-2.5 justify-start'>
              <MobileMenu />
              <Logo />
              
            </div>

        {/* nav-menu-center */}
            <HeaderMenue />
            

        {/* nav-menu-right */}
            <div className=' w-auto justify-end items-center flex gap-4 flex-row flex-nowrap'>
              
              <SearchBar />
              <CartIcon />
              <FavouriteBtn />
              <SignIn />

            </div>
        </Container2>
    </header>
  )
}

export default Header
