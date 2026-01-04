/* import { useState } from 'react'
// 데이터를 공유할 Context를 불러온다
import { CountContext } from '../contexts/CountContext'

export default function CountProvider({
    children,
}: {
    children: React.ReactNode
}) { // 컨텍스트 범위를 지정한다. 여기서 children은 Provider 컴포넌트로 감쌀 대상 컴포넌트들을 의미한다. 이렇게 작성하면 children에 해당하는 컴포넌트들만 CountProvider가 제공하는 상태를 사용할 수 있다.
    // count 상태와 상태를 조작하는 함수를 정의한다.
    const [count, setCount] = useState(0)
    const increment = () => setCount((count) => count + 1)
    const decrement = () => setCount((count) => count - 1)
    const reset = () => setCount(0)
    return (
        <>
            / CountContext의 value 속성에 공유할 데이터를 객체 형태로 전달한다. 이 데이터는 children에 해당하는 모든 하위 컴포넌트에서 props 없이 직접 사용할 수 있다. /
            <CountContext value={{ count, increment, decrement, reset }}>
                {children}
            </CountContext>
        </>
    )
} */

// CountProvider.tsx 렌더링 최적화. 메모이제이션
import { useMemo, useState } from 'react'
import { CountActionContext, CountContext } from '../contexts/CountContext'

export default function CountProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [count, setCount] = useState(0)
    const increment = () => setCount((count) => count + 1)
    const decrement = () => setCount((count) => count - 1)
    const reset = () => setCount(0)
    const memoizedValue = useMemo(() => ({ increment, decrement, reset }), [])
    return (
        <>
            <CountActionContext value={memoizedValue}>
                <CountContext value={{count}}>
                    {children}
                </CountContext>
            </CountActionContext>
        </>
    )
}