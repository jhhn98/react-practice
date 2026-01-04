// CountOutsideDisplay.tsx
/* import { useCountContext } from '../hooks/useCountContext'

export default function CountOutsideDisplay() {
    console.log('CountOutsideDisplay rendering')
     const { count } = useCountContext()
    return <h1>Outside Count: {count}</h1>
} */
// CountOutsideDisplay.tsx 12.2.7 ContextAPI 사용시 주의사항
export default function CountOutsideDisplay() {
    console.log('CountOutsideDisplay rendering')
    return <h1>Outside Count: 0</h1>
}