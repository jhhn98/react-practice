import { useState } from 'react'

export default function Textarea2() {
    const [formState, setFormState] = useState({
        desc: '', introduce: ''
    })
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormState((formState) => ({
            ...formState, [event.target.name]: event.target.value
        }))
    }
    return (
        <>
            <form>
                <textarea name='desc' value={formState.desc} onChange={handleChange}/>
                <p>Input Text Desc: {formState.desc}</p>
                <textarea name='introduce' value={formState.introduce} onChange={handleChange}/>
                <p>Input Text Introduce: {formState.introduce}</p>
            </form>
        </>
    )
}