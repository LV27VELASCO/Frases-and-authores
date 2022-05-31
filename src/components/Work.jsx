import React, {useState} from 'react'

    const Work = ({fraseRandom,clickButton,colorRandom,texColor,fondoColor}) => {

  return (
    <div className='Card' style={texColor}>
        <div className='containerfrase'>
        <p><i class='bx bxs-quote-alt-left'></i>{fraseRandom.quote}<i class='bx bxs-quote-alt-right'></i></p>
        </div>
        <div className='containerautor'>
        <div className='autor'>
            <h2>{fraseRandom.author}</h2>
        </div>
        <button onClick={clickButton} style={fondoColor}>
            <i class='bx bx-chevrons-right'></i>
        </button>
        </div>
    </div>
  )
}

export default Work