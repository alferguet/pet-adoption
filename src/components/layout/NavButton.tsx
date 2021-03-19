import React from 'react'
import NavItem from 'react-bootstrap/NavItem'
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
      <Link className="text-dark" to={to}>
        <b>{title}</b>
      </Link>
    </NavItem>
  )
}
