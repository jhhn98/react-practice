import { useState } from 'react'

export default function Checkbox2() {
    const [formState, setFormState] = useState({
        agree1: false, agree2: false, agree3: false
    })
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInput Element>) => {
        setFormState((formState) => ({
            ...formState, [event.target.name]: event.target.checked
        }))
    }
    return (
        <>
            <form>
                <input type='checkbox' id='ag1' name='agree1' checked={formState.agree1} onChange={handleCheckboxChange}/>
                <label htmlFor='ag1'>Agree1({formState.agree1 ? 'selected' : 'unSelected'})</label>
                <input type='checkbox' id='ag2' name='agree2' checked={formState.agree2} onChange={handleCheckboxChange}/>
                <label htmlFor='ag2'>Agree2({formState.agree2 ? 'selected' : 'unSelected'})</label>
                <input type='checkbox' id='ag3' name='agree3' checked={formState.agree3} onChange={handleCheckboxChange}/>
                <label htmlFor='ag3'>Agree3({formState.agree3 ? 'selected' : 'unSelected'})</label>
            </form>
        </>
    )
}