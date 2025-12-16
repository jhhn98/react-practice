import { useState } from 'react'

export default function ValidationForm() {
    const [formData, setFormData] = useState({
        username: '', email: '', age: '', birthdate: '', phone: '', website: '', color: '#000000', rating: '5'
    })
    const [submitStatus, setSubmitStatus] = useState('')
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        if (form.checkValidity()) { // 브라우저가 기본으로 제공하는 HTML 표준 API이다. 현재 폼 안의 모든 <input> 요소가 HTML 속성의 조건을 만족하는지 검사한다. 조건을 모두 만족하면 true, 하나라도 만족하지 않으면 false를 반환한다. 조건을 만족하지 못한 입력 필드에는 웹 브라우저가 자동으로 경고 메시지를 표시한다.
            setSubmitStatus('Success')
            console.log('Form Data: ', formData)
        } else {
            setSubmitStatus('error')
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev, [name]: value
        }))
    }
    return (
        <>
            <h1>Join</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name: 
                        <input type='text' name='username' value={formData.username} onChange={handleChange} required minLength={3} maxLength={20} pattern='[A-Za-z0-9]+' title='Enter 3-20 characters using letters and numbers'/>
                    </label>
                </div>
                <div>
                    <label>
                        Email: 
                        <input type='email' name='email' value={formData.email} onChange={handleChange} required/>
                    </label>
                </div>
                <div>
                    <label>
                        Age: 
                        <input type='number' name='age' value={formData.age} onChange={handleChange} required min={18} max={120}/>
                    </label>
                </div>
                <div>
                    <label>
                        Birthday: 
                        <input type='date' name='birthdate' value={formData.birthdate} onChange={handleChange} required min='1900-01-01' max={new Date().toISOString().split('T')[0]}/>
                    </label>
                </div>
                <div>
                    <label>
                        Tel:
                        <input type='tel' name='phone' value={formData.phone} onChange={handleChange} pattern='[0-9]{3}-[0-9]{4}-[0-9]{4}' placeholder='010-1234-5678'/>
                    </label>
                </div>
                <div>
                    <label>
                        WebSite: 
                        <input type='url' name='website' value={formData.website} onChange={handleChange} placeholder='https://example.com'/>
                    </label>
                </div>
                <div>
                    <label>
                        Favorite Color:
                        <input type='color' name='color' value={formData.color} onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Range:
                        <input type='range' name='rating' value={formData.rating} onchange={handleChange} min='0' max='10' step='1'/>
                        <span>{formData.rating}</span>
                    </label>
                </div>
                {submitStatus === 'success' && (
                    <div><span>Success submit</span></div>
                )}
                {submitStatus === 'error' && (
                    <div><span>Please input value</span></div>
                )}
                <button type='submit'>Join</button>
            </form>
        </>
    )
}