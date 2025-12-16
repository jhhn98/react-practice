import { useRef } from 'react'

export default function Input() {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const inputValue = inputRef.current?.value
        // inputRef.current?.value 는 ref.current가 null 인지 아닌지 확신할 수 없을 때 사용하는 문법으로 옵셔널 체이닝(optional chaining)이라고 한다.
        // 이는 JSX에서 값을 안전하게 읽는 방식으로, 특히 초기 렌더링 직후나 컴포넌트가 조건부 렝더링하는 경우에는 ?.를 사용하는 것이 좋다.
        // ref.current가 null이면 undefined를 반환하고 오류를 일으키지 않는다.
        console.log('Submitted value: ', inputValue)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' ref={inputRef}/>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}