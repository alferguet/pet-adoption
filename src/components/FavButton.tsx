import React, { useState } from 'react'
import { setFavorite } from '../services/listings.service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { PetListing } from '../types/pet-listing.interface'

interface FavButtonProps {
  listing: PetListing
}
export const FavButton: React.FC<FavButtonProps> = ({
  listing,
}: FavButtonProps) => {
  const [inHover, setHover] = useState(false)
  const getColor = () => {
    if (inHover) return 'tomato'
    return listing.favorite ? 'pink' : 'black'
  }
  return (
    <FontAwesomeIcon
      onClick={() => setFavorite(listing.id, !listing.favorite)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      icon={faHeart}
      size="2x"
      color={getColor()}
    />
  )
}
