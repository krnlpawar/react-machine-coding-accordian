import './App.css'
import Accordian from './components/Accordian'
import data from './data.json'

function App() {
  return (
    <>
      <Accordian items={data} showOne={false}/>
    </>
  )
}

export default App
