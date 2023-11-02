import { useState,useEffect } from "react"
import RemoveButton from "./components/RemoveButton"

const App = () => {

  const [store, setStore] = useState([])
  const [value, setValue] =useState('')
  const [total, setTotal] = useState(0)
  const handleItem = () =>{
    if(value.trim() === ''){
      return
    }
    setStore([... store, value])
    setValue('')
  }
  useEffect(() =>{
    const result = store.reduce((accum, value) => accum + parseInt(value), 0)
    setTotal(result)
  }, [store])

  const clearItems = () =>{
    setStore([])
  }

  return (
    <div className="p-4 bg-slate-400 h-screen">
      <section className="flex justify-center bg-slate-400">
      <h1 className="m-6 text-3xl">Calorie tracker</h1>
      </section>
    <div className="p-3 flex justify-center items-center">
      <div className="shadowWithHover flex justify-center space-x-9">
        
        <div>
          <input type="number" placeholder="enter calorie" value={value} onChange={(event) => setValue(event.target.value)} className=" p-2 rounded-sm"/>
          <button onClick={handleItem} disabled={value.trim() === ''} className="rounded-sm bg-slate-500 p-2 ml-2 hover: shadow-slate-200">submit</button>
        </div>
        <div className="flex justify-center items-center text-sm">
          <ul>
            {store.map((calorie,index) => (
              <li key={index}>{calorie}</li>
            ))}
          </ul>
        </div>
        
      </div>
      <div className="shadowWithHover flex justify-center items-center text-3xl">
        <h1>{store.length === 0? "results" 
        :"Total calories: "+ total}</h1>
      </div>
    </div>
    <div>
      <RemoveButton data={clearItems}/>
    </div>
    </div>
  )
}

export default App