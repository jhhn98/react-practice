import { type FormEvent, useRef } from 'react'

export default function Radio3() {
    const formRef = useRef<HTMLFormElement>(null)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const selectedGender = formData.get('gender')
        const selectedColor = formData.get('color')
        console.log('Selected Gender: ', selectedGender)
        console.log('Selected Color: ', selectedColor)
    }
    const handleClick = () => {
        if (formRef.current) {
            const formData = new FormData(formRef.current)
            const selectedGender = formData.get('gender')
            const selectedColor = formData.get('color')
            console.log('Selected Gender: ', selectedGender)
            console.log('Selected Color: ', selectedColor)
        }
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <input type='radio' name='gender' value='male' defaultChecked/>
                    Male
                </label>
                <label>
                    <input type='radio' name='gender' value='female'/>
                    Female
                </label>
            </div>
            <div>
                <label>
                    <input type='radio' name='color' value='yellow' defaultChecked/>
                    Yellow
                </label>
                <label>
                    <input type='radio' name='color' value='tomato'/>
                    Tomato
                </label>
            </div>
            <button type='button' onClick={handleClick}>Click</button>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}