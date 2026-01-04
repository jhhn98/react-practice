/* import { useState } from 'react'
import CountDisplay from './components/CountDisplay'
import CountButtons from './components/CountButtons'

export default function App() {
    const [count, setCount] = useState(0)
    const increment = () => setCount((count) => count + 1)
    const decrement = () => setCount((count) => count - 1)
    const reset = () => setCount(0)
    return (
        <>
            <CountDisplay count={count} />
            <CountButtons increment={increment} decrement={decrement} reset={reset} />
        </>
    )
} */
// 12.1.2 전역 상태 관리
import { useState } from 'react'
import Count from './components/Count'
import CountOutsideDisplay from './components/CountOutsideDisplay'

export default function App() {
    const [count, setCount] = useState(0)
    const increment = () => setCount((count) => count + 1)
    const decrement = () => setCount((count) => count - 1)
    const reset = () => setCount(0)
    return (
        <>
            <Count count={count} increment={increment} decrement={decrement} reset={reset} />
            <CountOutsideDisplay count={count} />
        </>
    )
}