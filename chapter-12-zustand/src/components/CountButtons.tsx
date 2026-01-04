/* // CountButtons.tsx
// useCounterStore 커스텀 훅을 사용해 전역 상태를 직접 조회하거나 업데이트 하도록 수정한다.
import { useCounterStore } from '../store/counterStore'

export default function CountButtons() {
    const increment = useCounterStore((state) => state.increment)
    const decrement = useCounterStore((state) => state.decrement)
    const reset = useCounterStore((state) => state.reset)
    const resetIfEven = useCounterStore((state) => state.resetIfEven)
    return (
        <>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={resetIfEven}>Reset(Even)</button>
            <button onClick={increment}>Increment</button>
        </>
    )
}
// count 값을 직접 조회한다. 상위 컴포넌트에서 props를 전달받을 필요 없이 커스텀 훅 한 줄로 상태를 가져올 수 있다는 점이 매우 편리하다. 상태를 변경할 때도 액션 함수를 동일한 방식으로 사용할 수 있다. */
// CountButtons.tsx 12.4.4 Zustand의 고급기능 subscribWithSelector 미들웨어
import { useEffect } from 'react'
import { useCounterStore } from '../store/counterStore'

export default function CountButtons() {
    const increment = useCounterStore((state) => state.increment)
    const decrement = useCounterStore((state) => state.decrement)
    const reset = useCounterStore((state) => state.reset)
    const resetIfEven = useCounterStore((state) => state.resetIfEven)
    useEffect(() => {
        const unsubscribe = useCounterStore.subscribe( // 상태 구독 설정
            (state) => state.count, // 구독할 상태 선택
            (newCount) => { // 상태가 변경될 때 실행할 함수
                console.log('Count has changed to: ', newCount)
            }
        )
        return () => { // 컴포넌트 언마운트 시 구독 해제
            unsubscribe()
        }
    }, [])
    return (
        <>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={resetIfEven}>Reset(Even)</button>
            <button onClick={increment}>Increment</button>
        </>
    )
}