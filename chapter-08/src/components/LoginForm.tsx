import { useRef, useState } from 'react'

export default function LoginForm() {
    const idRef = useRef<HTMLInputElement>(null)
    const pwRef = useRef<HTMLInputElement>(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (email.trim() === '') {
            alert('please Input Email')
            return
        }
        if (password.trim() === '') {
            alert('please Input Password')
            return
        }
    }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (email.trim() === '') {
            alert('Please your email')
            idRef.current?.focus()
            return
        }
        if (password.trim() === '') {
            alert('Plese enter password')
            pwRef.current?.focus()
            return
        }
        alert(`E-mail: ${email}, Password: ${password}`)
        setEmail('')
        setPassword('')
    }
    return (
        <>
        <form onSubmit={submitHandler}>
            <label htmlFor='uid'>
                <input ref={idRef} type='text' id='uid' placeholder='input Email' value={email} onChange={changeEmail}/>
            </label>
            <label htmlFor='upw'>
                <input ref={pwRef} type='password' id='upw' placeholder='input Password' value={password} onChange={changePassword}/>
            </label>
            <button type='submit'>Login</button>
        </form>
        </>
    )
}