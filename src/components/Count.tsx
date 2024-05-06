import { useCounterStore } from "../store"

const Count = () => {
  const count = useCounterStore((state) => state.count)
  const incrementAsync = useCounterStore((state) => state.incrementAsync)
  const decrement = useCounterStore((state)=> state.decrement)
  
  return (
    <div>{count}
    
    <div>
    <div><button onClick={incrementAsync}>incrementAsync</button></div>
    <div><button onClick={decrement}> Decrement</button></div>
    </div>
    
    </div>
    
  )
}

export default Count