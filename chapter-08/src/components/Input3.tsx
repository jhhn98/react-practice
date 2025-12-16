import { useState } from 'react'

export default function Input3() {
    const [formState, setFormState] = useState({
        id: '', password: '', date: ''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((formState) => ({
            ...formState,
            [e.target.name]: e.target.value
            //입력 값(e.target.value)을 객체의 특정 속성 값으로 할당하는 방식이다. 이는 객체의 속성 이름을 동적으로 설정하는 자바스크립트 문법으로 계산된 속성이름(computed property name)이라고 한다. 예를 들어 입력 요소의 name 속성 값이 id이고, 사용자가 입력한 값이 newUser라면 formState['id'] = 'newUser'라는 의미이다.
        }))
    }
    return (
        <>
            <form>
                <h1>
                    ID: {formState.id} / Passowrd: {formState.password} / Date: {formState.date}
                </h1>
                <input type='text' name='id' value={formState.id} onChange={handleChange}/>
                <input type='passowrd' name='password' value={formState.password} onChange={handleChange}/>
                <input type='date' name='date' value={formState.date} onChange={handleChange}/>
            </form>
        </>
    )
}