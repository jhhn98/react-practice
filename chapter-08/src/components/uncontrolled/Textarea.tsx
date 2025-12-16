import { useRef } from 'react'

export default function Textarea() {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const text = textareaRef.current?.value
        console.log('Input text: ', text)
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <textarea ref={textareaRef}/>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}