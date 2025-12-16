import { useState } from 'react'
import A from './components/A'
export default function App() {
  console.log('App render: ')
  const [count, setCount] = useState(0)
  console.log('App render: ' + count)
  return (
    <>
      <h1>App Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Add</button>
      <A/>
    </>
  )
}   