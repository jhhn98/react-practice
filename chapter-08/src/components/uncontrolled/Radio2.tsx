import { useRef } from 'react'

export default function Radio2() {
    const formRef = useRef<HTMLFormElement>(null)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        console.log('Selected option: ', formData.get('option'))
    }
    const handleClick = () => {
        if (formRef.current) {
            const formData = new FormData(formRef.current)
            console.log('Selected option: ', formData.get('option'))
        }
    }
    return(
        <>
        <form ref={formRef} onSubmit={handleSubmit}>
            <div>
                <label>
                    <input type='radio' name='option' value='option1' defaultChecked/>
                    Option1
                </label>
            </div>
            <div>
                <label>
                    <input type='radio' name='option' value='option2'/>
                    Option2
                </label>
            </div>
            <div>
                <label>
                    <input type='radio' name='option' value='option3'/>
                    Option3
                </label>
            </div>
            <button type='button' onClick={handleClick}>Click</button>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}