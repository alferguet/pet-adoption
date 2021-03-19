import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHands } from '@fortawesome/free-solid-svg-icons'

interface AdoptButtonProps {
  id: number
}
export const AdoptButton: React.FC<AdoptButtonProps> = ({
  id,
}: AdoptButtonProps) => {
  const [inHover, setHover] = useState(false)
  const getColor = () => {
    if (inHover) return 'gold'
  }
  return (
    <FontAwesomeIcon
      className="pb-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      icon={faHands}
      size="2x"
      color={getColor()}
    />
  )
}
