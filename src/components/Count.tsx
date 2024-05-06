import { useCounterStore } from "../store"

const Count = () => {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state)=> state.decrement)
  
  return (
    <div>{count}
    
    <div>
    <div><button onClick={increment}>Increment</button></div>
    <div><button onClick={decrement}> Decrement</button></div>
    </div>
    
    </div>
    
  )
}

export default Count