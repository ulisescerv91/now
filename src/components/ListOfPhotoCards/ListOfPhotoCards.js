import React from 'react'

import { photos } from '../../../api/db.json'

// Components
import PhotoCard from '../PhotoCard/PhotoCard'

const ListOfPhotoCards = () => {
  return <div>
    {
      photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
    }
         </div>
}

export default ListOfPhotoCards
