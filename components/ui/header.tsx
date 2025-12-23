import Container2 from '@/app/container'
import Logo from './logo'
import HeaderMenue from './header-menu'
import SearchBar from './searchBar'
import CartIcon from './cartIcon'
import FavouriteBtn from './favouriteBtn'
import SignIn from './signIn'
import MobileMenu from './mobileMenu'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = async () => {
  const user = await currentUser()

  return (
    <header className='bg-[#0e6b8e] flex justify-center py-5 shadow-sm sticky max-w-full top-0 z-50 mx-auto'>
      <Container2 className='flex px-2 justify-between w-full mx-auto items-center'> 

        {/* Left */}
        <div className='flex items-center gap-2.5'>
          <MobileMenu />
          <Logo />
        </div>

        {/* Center */}
        <HeaderMenue />

        {/* Right */}
        <div className='flex items-center gap-4'>
          <SearchBar />
          <CartIcon />
          <FavouriteBtn />

          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <SignIn />
            </SignedOut>
          </ClerkLoaded>
        </div>

      </Container2>
    </header>
  )
}

export default Header
