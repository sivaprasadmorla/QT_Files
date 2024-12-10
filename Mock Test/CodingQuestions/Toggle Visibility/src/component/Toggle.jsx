import React from 'react'

const Toggle = ({message,isVisible}) => {
  return (
    <div className='mt-[10px]'>
      {isVisible && <p>{message}</p>}
    </div>
  )
}

export default Toggle
