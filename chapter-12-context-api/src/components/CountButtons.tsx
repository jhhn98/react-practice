// CountButtons.tsx
/* import { useCountContext } from '../hooks/useCountContext'

export default function CountButtons() {
    console.log('CountButtons rendering')
    const { increment, decrement, reset } = useCountContext()
    return (
        <>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </>
    )
} */
// CountButtons.tsx 렌더링 최적화
import { useCountActionContext } from '../hooks/useCountContext'

export default function CountButtons() {
    console.log('CountButtons rendering')
    const { increment, decrement, reset } = useCountActionContext()
    return (
        <>
            <button onClick={decrement}>Decrement</button>            
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </>
    )
}