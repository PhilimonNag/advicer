import { useEffect, useState } from 'react'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const [advice,setAdvice]=useState("")
  async function getAdvice(){
    const res=await fetch("https://api.adviceslip.com/advice")
    const data= await res.json()
    setAdvice(data.slip.advice)
    setCount(c=>c+1)
  }
  useEffect(function(){
    getAdvice()
  },[])
  return (
    <>
      <h3>{advice}</h3>
      <p>You Have read <strong>{count}</strong> piece of advice</p>
      <button onClick={getAdvice}>Get Advice</button>
    </>
  )
}

export default App
