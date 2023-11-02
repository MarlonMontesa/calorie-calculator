
const RemoveButton = ({data}) => {
    const remove = () =>{
        data()
    }
  return (
    
    <div>
        <button onClick={remove} className="bg-red-500 rounded-2xl hover: shadow-red-300">REMOVE DATA</button>
    </div>
  )
}

export default RemoveButton