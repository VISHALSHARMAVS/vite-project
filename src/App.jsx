import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

function addCount() {
  if(count<20){
return setCount(count+1);
  }else {return count}
}
function removeCount(){
if(count>0){

 return  setCount(count-1);
}else {return count} 
}
  
  return (
    <>
     <h1>Vishal Sharma </h1>
     <h2>Number : {count}</h2>
     <button onClick={addCount}>AddNumber </button>
     <br />
     <button onClick={removeCount}>RemoveNumber </button>

    </>
  )
}

export default App
