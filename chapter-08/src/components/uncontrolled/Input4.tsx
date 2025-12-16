import { useRef } from 'react'

export default function Input4() {
    const formRef = useRef<{
        id: HTMLInputElement | null,
        password: HTMLInputElement | null,
        date: HTMLInputElement | null
    }>({
        id: null, password: null, date: null
    })
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const {id, password, date } = formRef.current
        console.log('Submitted values: ', {
            id: id?.value, password: password?.value, date: date?.value
        })
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            {/**
             * 아래 코드는 동작은 하지만 React의 공식 타입 규칙에는 맞지 않는 코드이다. 책에서는 javascript를 기준으로 설명했지만 TypeScript + React 환경에서는 문제가 생긴다.
             * 에러가 나는 이유는 할당 표현식으로 값을 반환하기 때문이다. React의 ref 콜백은 반환하면 안되고 void여야 한다.
            <input type='text' name='id' ref={(el) => (formRef.current.id = el)}/>
            <input type='password' name='password' ref={(el) => (formRef.current.password = el)}/>
            <input type='date' name='date' ref={(el) => (formRef.current.date = el)}/>
             * React에서는 아래처럼 써야 한다.
             * 위나 아래나 모두 formRef.current.date = el을 수행은 하지만 차이점은 반환값이다.
             * 위는 el을 반환하게 되고 아래는 아무것도 반환하지 않는다.(void)
             */}
            <input type='text' name='id' ref={(el) => {formRef.current.id = el}}/>
            <input type='password' name='password' ref={(el) => {formRef.current.password = el}}/>
            <input type='date' name='date' ref={(el) => {formRef.current.date = el}}/>
        </form>
        </>
    )
}