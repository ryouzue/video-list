import React from 'react';

const Minimize = ({ size }) => {
  return (
    <svg 
      className='icon minimize'
      width={size + 'px'}
      height={size + 'px'}
      viewBox='0 0 24 24' 
      fill='none' 
      stroke='currentColor' 
      strokeWidth='2' 
      strokeLinecap='round' 
      strokeLinejoin='round' 
    ><polyline 
        points='4 14 10 14 10 20'
      ></polyline>
      <polyline 
        points='20 10 14 10 14 4'
      ></polyline>
      <line 
        x1='14' 
        y1='10' 
        x2='21' 
        y2='3'
      ></line>
      <line 
        x1='3' 
        y1='21' 
        x2='10' 
        y2='14'
      ></line>
    </svg>
  )
}

export default Minimize;