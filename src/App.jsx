import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {

  const [value,setValue] = useState("")
  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus();
  },[])

  const calculate = ()=>{
    try{
      if(value){
        const result = eval(value.replace(/x/g,"*"))
        setValue(result.toString())
      }
    }catch(error){
      alert(`Invalid Expression`)
    }
  }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{height:'100vh',width:'100%'}}>
        <div className='p-4 shadow rounded bg-info' style={{width:'400px'}}>
          <input ref={inputRef} value={value} type="text" className='form-control mb-4' style={{height:'3.5rem'}}/>
          <div className='container'>
            <div className='row gap-1 my-2' style={{height:'3rem'}}> {/* Use g-1 for smaller gaps */}
              <button onClick={()=>setValue("")} className='col-6 btn btn-dark'>AC</button>
              <button onClick={()=>setValue(value.slice(0,-1))} className='col btn btn-dark'>DEL</button>
              <button onClick={()=>setValue(value+"/")} className='col btn btn-danger'>/</button>
            </div>
            <div className='row gap-1 my-2' style={{height:'3rem'}}>
              <button onClick={()=>setValue(value+"7")} className='col btn btn-light'>7</button>
              <button onClick={()=>setValue(value+"8")} className='col btn btn-light'>8</button>
              <button onClick={()=>setValue(value+"9")} className='col btn btn-light'>9</button>
              <button onClick={()=>setValue(value+"*")} className='col btn btn-danger'>*</button>
            </div>
            <div className='row gap-1 my-2' style={{height:'3rem'}}>
              <button onClick={()=>setValue(value+"4")} className='col btn btn-light'>4</button>
              <button onClick={()=>setValue(value+"5")} className='col btn btn-light'>5</button>
              <button onClick={()=>setValue(value+"6")} className='col btn btn-light'>6</button>
              <button onClick={()=>setValue(value+"+")} className='col btn btn-danger'>+</button>
            </div>
            <div className='row gap-1 my-2' style={{height:'3rem'}}>
              <button onClick={()=>setValue(value+"1")} className='col btn btn-light'>1</button>
              <button onClick={()=>setValue(value+"2")} className='col btn btn-light'>2</button>
              <button onClick={()=>setValue(value+"3")} className='col btn btn-light'>3</button>
              <button onClick={()=>setValue(value+"-")} className='col btn btn-danger'>-</button>
            </div>
            <div className='row gap-1 my-2' style={{height:'3rem'}}>
              <button onClick={()=>setValue(value+"0")} className='col btn btn-light'>0</button>
              <button onClick={()=>setValue(value+".")} className='col btn btn-light'>.</button>
              <button onClick={calculate} className='col-6 btn btn-dark'>=</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
