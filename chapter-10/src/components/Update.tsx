import { useEffect, useState } from 'react'

export default function Update() {
    const [count, setCount] = useState(0)
    // count라는 상태 변수를 초깃값 0으로 정의한다. setCount() 함수는 count 값을 변경할 때 사용한다.
    useEffect(() => {
        console.log(`Update: ${count}`)
    }, [count])
    // useEffect 훅의 의존성 배열에 count가 포함되어 있으므로 count 값이 변경될 때마다 내부의 설정 함수가 실행된다. 즉,[Increase] 버튼을 클랙해 count를 변경하면 콘솔에 Updated: [현재 Count 값]이 출력된다.
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount((count) => count + 1)}>Increase</button>
        </>
    )
    //count 값은 <h1> 태그로 표시한다. [Increase] 버튼을 클릭하면 setCount() 함수가 호출되어 count 값이 1씩 증가한다. 여기서 (count) => count + 1은 이전 상태 값을 기반으로 새 상태를 계산하는 업데이트 방식이다.
}