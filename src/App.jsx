import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Work from './components/Work'
import frases from './Json/frases.json'

function App() {
  
  const createRandom= array => {
    return Math.floor(Math.random()* array.length)
  }
  
  const arrayColors=[
    '#8C0487','#2AA007','#5B791C','#04952B',
    '#715324','#AD5469','#54925E','#6A0DFA',
    '#EB1D76','#649B09','#47228F','#FB4E54',
    '#08CC42','#112908','#1E120B','#35C096',
    '#480215','#756692','#771752','#132767',
    '#602505','#8A71C5','#1A3200','#1EA2B2'
  ]

  

  const getElementRandom=array=>{
    const i =createRandom(array)
    return array[i]
  }


  const [fraseRandom, setFraseRandom] = useState(getElementRandom(frases))
  const [colorRandom, setcolorRandom] = useState(getElementRandom(arrayColors))


  const clickButton= () => {
    setFraseRandom(getElementRandom(frases))
    setcolorRandom(getElementRandom(arrayColors))
  }

  const fondoColor={
    backgroundColor:colorRandom
  }

  const texColor={
    color:colorRandom
  }

return (
    <div className='head' style={fondoColor}>
    <Work
    fraseRandom={fraseRandom}
    colorRandom={colorRandom}
    clickButton={clickButton}
    texColor={texColor}
    fondoColor={fondoColor}
    />
    </div>
  )
}

export default App
