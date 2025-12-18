/*
import B from './B'

export default function A() {
    console.log('A render')
    return (
        <>
            <h1>A Component</h1>
            <B/>
        </>
    )
}
*/
/*
// 메모이제이션
import React from 'react'
// import { memo } from 'react' 
import B from './B'

export default React.memo(function A() {
//export default memo(function A() {}) 
// 이렇게도 사용할 수 있지만.. 난 위 방식이 더 뭘 뜻하는지 알겠어서 더 좋다. 하지만 실무에선 이 방식을 더 많이 사용한다.
    console.log('A')
    return (
        <>
            <h1>A</h1>
            <B />
        </>
    )
})
*/

// 메모이제이션 무효화 예제
/*
import React from 'react'
import B from './B'

export default React.memo(function A({ count }: { count: number }}) {
    console.log('A render')
    return (
        <>
            <h1>A Component: {count}</h1>
            <B />
        </>
    )
})
*/

//11.3.1 함수 메모이제이션 예제
import { memo } from 'react'
import B from './B'

export default memo(function A({ increment }: { increment: () => void }) {
    console.log('A render')
    return (
        <>
            <h1>A Component</h1>
            <button onClick={increment}>Increment</button>
            <B />
        </>
    )
})