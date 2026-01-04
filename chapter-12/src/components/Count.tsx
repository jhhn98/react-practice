// Count
import CountDisplay from './components/CountDisplay'
import CountButtons from './components/CountButtons'
export default function Count({
    count,
    increment,
    decrement,
    reset,
}: {
    count: number,
    increment: () => void
    decrement: () => void
    reset: () => void
}) {
    return (
        <>
            <CountDisplay count={count} />
            <CountButtons increment={increment} decrement={decrement} reset={reset} />
        </>
    )
}