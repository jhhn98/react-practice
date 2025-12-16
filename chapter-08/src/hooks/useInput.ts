import { useState } from 'react'

export default function useInput(initialValue = '') {
    // 예제 코드
    //const [value, setValue] = useState('')
    //const handleChange = (e) => setValue(e.target.value)
    const [value, setValue] = useState(initialValue)
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    return {
        value, onChange
    }
}