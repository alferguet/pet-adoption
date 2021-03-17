import React from 'react'
import NavItem from 'react-bootstrap/NavItem'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

interface NavButtonProps {
  to: string
  title: string
}

export const NavButton: React.FC<NavButtonProps> = ({
  to,
  title,
}: NavButtonProps) => {
  return (
    <NavItem className="pr-3">
      <Link to={to}>
        <Button>{title}</Button>
      </Link>
    </NavItem>
  )
}
