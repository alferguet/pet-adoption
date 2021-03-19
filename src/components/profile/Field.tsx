import React from 'react'
interface FieldProps {
  title: string
  value: string
}
export const Field: React.FC<FieldProps> = ({ title, value }: FieldProps) => {
  return (
    <span className="d-flex flex-row">
      <p className="pr-3">
        <b>{title}</b>
      </p>
      <p>{value}</p>
    </span>
  )
}
