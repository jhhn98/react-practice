/*
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
*/

// 메모이제이션 무효화 예제
/*
import { useState } from 'react'
import A from './components/A'

export default function App() {
  console.log('App render')
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>App Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Add</button>
      <A count={count} />
    </>
  )
}
*/
// 11.3.1 함수를 props로 전달하는 예제 - 함수 메모이제이션
/*
import { useState } from 'react'
import A from './components/A'

export default function App() {
  console.log('App render')
  const [count, setCount] = useState(0)
  const increment = () => setCount((count) => count + 1)
  return (
    <>
      <h1>App Count: {count}</h1>
      <A increment={increment}/>
    </>
  )
}
*/
// 11.3.3 상태 변경 함수를 콜백 함수 형태로 사용하기
import { useCallback, useState } from 'react'
import A from './components/A'

export default function App() {
  console.log('App render')
  const [count, setCount] = useState(0)
  //const increment = useCallback(() => setCount(count + 1), [])
  const increment = useCallback(() => setCount(count + 1), [count])
  return (
    <>
      <h1>App Count: {count}</h1>
      <A increment={increment} />
    </>
  )
}