import React from 'react';

const VideoOff = ({ size }) => {
  return (
    <svg 
      className='icon video-off'
      width={size + 'px'}
      height={size + 'px'}
      viewBox='0 0 24 24' 
      fill='none' 
      stroke='currentColor' 
      strokeWidth='2' 
      strokeLinecap='round' 
      strokeLinejoin='round'
    ><path 
        d='M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10'
      ></path>
      <line 
        x1='1' 
        y1='1' 
        x2='23' 
        y2='23'
      ></line>
    </svg>
  )
}

export default VideoOff;