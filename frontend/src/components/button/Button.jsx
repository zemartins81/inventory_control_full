import React from 'react'
import './button.css'

function Button(props) {
  return (
    <div>
      {/* eslint-disable-next-line react/button-has-type,react/jsx-props-no-spreading */}
      <button {...props} />
    </div>
  )
}

export default Button
