import React from 'react'
import PropTypes from 'prop-types'

export default function Button({margin, title, isColorFlipped}) {

  const button = {
    backgroundColor: isColorFlipped ? '#fff' : '#611707',
    color: isColorFlipped? '#611707' : '#fff',
    padding: '6px 12px',
    border: ' 1px solid #611707',
    borderRadius: '5px',
    fontSize: '15px',
    fontWeight: '600',
    fontFamily: 'Poppins',
    letterSpacing: '1px',
    margin: `${margin}`,
  } 

  return (
    <div>
        <button style={button}>{title}</button>
    </div>
  )
}

Button.propTypes = {
  margin: PropTypes.string,
  title: PropTypes.string,
  isColorFlipped: PropTypes.string
}
