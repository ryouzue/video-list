import React from 'react';

const Music = ({ size }) => {
  return (
    <svg 
      className='icon music'
      width={size + 'px'}
      height={size + 'px'}
      viewBox='0 0 24 24' 
      fill='none' 
      stroke='currentColor' 
      strokeWidth='2' 
      strokeLinecap='round' 
      strokeLinejoin='round'
    ><path 
        d='M9 18V5l12-2v13'
      ></path>
      <circle 
        cx='6' 
        cy='18' 
        r='3'
      ></circle>
      <circle 
        cx='18' 
        cy='16' 
        r='3'
      ></circle>
    </svg>
  )
}

export default Music;