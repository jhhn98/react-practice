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
/*
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
*/
//11.4.1 연산 비용이 큰 작업의 성능 저하 문제
{/*
import { useState } from 'react'
import { initialItems } from './lib/utils'

export default function App() {
  // 상태 정의
  const [count, setCount] = useState(0)
  // 29,999,999개 항목 중 selected가 true인 항목 찾기. 속도가 정말 다르다. 
  const selectItems = initialItems.find((item) => item.selected)
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prevCount) => (prevCount + 1))}>increment</button>
      // 연산 비용이 높은 코드
      <p>{selectItems?.id}</p>
    </>
  )
}
*/}
// 11.4.2 useMemo 훅 사용하기
import { useMemo, useState } from 'react'
import { initialItems } from './lib/utils'

export default function App() {
  // 상태 정의
  const [count, setCount] = useState(0)
  // 3천만 개. ㅏㅇ목 중 selected
  const selectItems = useMemo(() => initialItems.find((item) => item.selected), [])
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>증가</button>
      <p>{selectItems?.id}</p>
    </>
  )
}