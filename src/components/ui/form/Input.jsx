import React from 'react'

export const Input = ({type,label}) => {
  return (
    <div>
        <label htmlFor="">{label}</label>
        <input type={type} />
    </div>
  )
}
