import React from 'react'

const Button = ({
  btnText,btnStyle
}) => {
  return (
    <button className={`${btnStyle} px-6 py-2 rounded`}>
      {
        btnText
      }
    </button>
  )
}

export default Button