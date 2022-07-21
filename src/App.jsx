import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

let textFished = "";

function App() {


  const [text, setText] = useState('')

  const handleTextChande = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    textFished = text.replace(/},/g, '}'); // }, to }
    textFished = textFished.replace(/' ?\,/g, ';'); // , to ;
    textFished = textFished.replace(/:\s{1,5}{/g, ' {'); // : { to {
    textFished = textFished.replace(/('&?)/g, ' '); // ' to a space
    
    textFished = textFished.replace(/backgroundColor/g, 'background-color');
    
    textFished = textFished.replace(/justifyContent/g, 'justify-content');
    textFished = textFished.replace(/justifyItems/g, 'justify-items');
    textFished = textFished.replace(/alignItems/g, 'align-items');
    textFished = textFished.replace(/alignContent/g, 'align-content');
    textFished = textFished.replace(/flexWrap/g, 'flex-wrap');
    textFished = textFished.replace(/flexDirection/g, 'flex-direction');

    textFished = textFished.replace(/marginTop/g, 'margin-top');
    textFished = textFished.replace(/marginLeft/g, 'margin-left');
    textFished = textFished.replace(/marginRight/g, 'margin-right');
    textFished = textFished.replace(/marginBottom/g, 'margin-bottom');

    textFished = textFished.replace(/paddingTop/g, 'padding-top');
    textFished = textFished.replace(/paddingLeft/g, 'padding-left');
    textFished = textFished.replace(/paddingRight/g, 'padding-right');
    textFished = textFished.replace(/paddingBottom/g, 'padding-bottom');

    textFished = textFished.replace(/overflowY/g, 'overflow-y');
    textFished = textFished.replace(/overflowX/g, 'overflow-x');
    textFished = textFished.replace(/zIndex/g, 'z-index');

    textFished = textFished.replace(/borderRadius/g, 'border-radius');
    textFished = textFished.replace(/borderTop/g, 'border-top');
    textFished = textFished.replace(/borderLeft/g, 'border-left');
    textFished = textFished.replace(/borderRight/g, 'border-right');
    textFished = textFished.replace(/borderBottom/g, 'border-bottom');

    

    // textFished = new Object(textFished);

    console.log(textFished)
    setText(textFished)
  }

  return (
    <div className="container">

      <form onSubmit={handleSubmit}>
        <input
          value={text}
          name='text'
          onChange={handleTextChande}
        />
      </form>

      <div className='textFinishedContainer'>
        <p>
          {text}
        </p>
      </div>

    </div>
  )
}

export default App
