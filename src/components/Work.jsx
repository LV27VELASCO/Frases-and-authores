import React, {useState} from 'react'

    const Work = ({fraseRandom,clickButton}) => {

  return (
    <div className='Card'>
        <div className='containerfrase'>
        <p>{fraseRandom.quote}</p>
        </div>
        <div className='containerautor'>
        <div className='autor'>
            <h2>{fraseRandom.author}</h2>
        </div>
        <button onClick={clickButton}>
            <i class='bx bx-chevrons-right'></i>
        </button>
        </div>
    </div>
  )
}

export default Work