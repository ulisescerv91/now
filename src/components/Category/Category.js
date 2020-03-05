import React from 'react'

import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'
const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => {
  return (
    <div>
      <Link href={path}>
        <Image src={cover} alt='' />
        {emoji}
      </Link>
    </div>
  )
}

export default Category
