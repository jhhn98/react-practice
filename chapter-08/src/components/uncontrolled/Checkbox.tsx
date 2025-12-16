import { useRef } from 'react'

export default function Checkbox() {
    const checkboxRef = useRef<HTMLInputElement>(null)
    const handleSubmit = (e: React.FormEvent)=> {
        e.preventDefault()
        const isChecked = checkboxRef.current?.checked//옵셔널 체이닝. null이나 undefined때 에러를 막기 위해 쓰는 문법.
        console.log('Checkbox is', isChecked? ' checked' : ' unchecked')
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <input type='checkbox' ref={checkboxRef}/>
                {/** 컴포넌트가 렌더링 되면 checkboxRef.current에는 checkbox의 DOM요소가 저장된다 */}
                <label>Item1</label>
            </div>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}