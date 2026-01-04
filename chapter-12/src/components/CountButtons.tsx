// CountButtons.tsx
export default function CountButtons({
    increment, decrement, reset
}: {
    increment: () => void
    decrement: () => void
    reset: () => void
}) {
    return (
        <>
            <button onClick={decrement}>decrement</button>
            <button onClick={increment}>increment</button>
            <button onClick={reset}>reset</button>
        </>
    )
}