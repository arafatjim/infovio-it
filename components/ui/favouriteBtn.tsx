import { FileArchiveIcon, Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavouriteBtn = () => {
  return (
    <Link href="/favourites" className='group relative'>
        <Heart className='text-white w-5 h-5 hover:text-logo-primary cursor-pointer' />
      <span className='absolute -top-2 -right-2 bg-logo-primary text-white w-4 h-4 rounded-full flex items-center justify-center text-xs font-semibold group-hover:bg-white group-hover:text-logo-primary transition-all'>3</span>
    </Link>
  )
}

export default FavouriteBtn
