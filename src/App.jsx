
import './App.css'
import Counter from './counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick (){
    alert('button clicked')
  }

  const handClick2=()=>{
    alert('button clicked2')
  }

  const addToFive=(num)=>{
    alert(num+4);
  }
  

  return (
    <>
     
      <h1>React Core Concepts</h1>
      <Friends></Friends>

      <Users></Users>

      <Team></Team>

    <Counter></Counter>
    



      
      <button onClick={handleClick}>clicked</button>

      <button onClick={handClick2}>clicked 2</button>
      <button onClick={()=>{alert('button clicked3')}}>clicked 3</button>
      <button onClick={()=> (addToFive(5))}>five</button>
     
     
    </>
  )
}

export default App
