// CountDisplay.tsx
import { useSelector } from 'react-redux'
import { type RootState } from '../store/store'

export default function CountDisplay() {
    console.log('CountDisplay rendering')
    const count = useSelector((state: RootState) => state.counter.value)
    return <h1>Count: {count}</h1>
}