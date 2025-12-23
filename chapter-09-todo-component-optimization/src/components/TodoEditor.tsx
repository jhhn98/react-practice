import { useState } from 'react'
import Button from './html/Button'
import Input from './html/Input'

export default function TodoEditor({ addTodo }: { addTodo: (title: string) => void }) {
    // 새로운 할 일을 등록하는 addTodo() 함수를 TodoEditor 컴포넌트에서 사용할 수 있도록 props로 전달받는다. 앞에서 addTodo() 함수의 타입이 { addTodo: (title: string) => void } 임을 확인했으므로 이를 그대로 TodoEditor 컴포넌트의 매개변수에 지정한다.
    const [text, setText] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() // 기본 동작 막기
        if (!text.trim()) return // 입력칸이 비어 있으면 함수 종료
        addTodo(text) // 부모 컴포넌트에서 전달받은 함수 실행
        setText('') // 입력 필드 초기화
    }
    return (
        <>
            <form className='todo__form' onSubmit={handleSubmit}>{/* <form>은 할 일 입력과 등록을 위한 폼 요소이다. 이후 이벤트를 연결해 할 일을 추가한다. */}
                <div className='todo__editor'>
                    <Input type='text' className='todo__input' placeholder='Enter Todo List' value={text} onChange={(e) => setText(e.target.value)}/>
                    <Button className='todo__button' type='submit'>Add</Button>
                </div>
            </form>
        </>
    )
}