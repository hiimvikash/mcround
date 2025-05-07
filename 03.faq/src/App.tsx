import './App.css'
import Accordion from './components/Accordion'

function App() {
  

  return (
    <div className='main'>
      <div className="container">
        <h1>
          FAQ
        </h1>
        <div className="accordion-container">
          <Accordion/>
        </div>
      </div>
    </div>
  )
}

export default App
