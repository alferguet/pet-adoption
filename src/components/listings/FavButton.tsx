import React, { useState } from 'react'
import { setFavorite } from '../../services/listings.service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './beat.css'

interface FavButtonProps {
  id: number
  favorite: boolean
}
export const FavButton: React.FC<FavButtonProps> = ({
  id,
  favorite,
}: FavButtonProps) => {
  const [inHover, setHover] = useState(false)
  const getColor = () => {
    if (inHover) return 'tomato'
    return favorite ? 'pink' : 'black'
  }
  return (
    <FontAwesomeIcon
      className={`${favorite ? 'beat' : ''}`}
      onClick={() => setFavorite(id, !favorite)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      pulse={favorite}
      icon={faHeart}
      size="2x"
      color={getColor()}
    />
  )
}
