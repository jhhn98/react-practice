import { useState } from 'react'

export default function LoginForm2() {
    const [email, setEmail] = useState('')
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const [password, setPassword] = useState('')
    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    return(
        <>
            <form>
                <label htmlFor='uid'>
                    <input type='text' id='uid' placeholder='Please your email' value={email} onChange={changeEmail}/>
                </label>
                <label htmlFor='upw'>
                    <input type='password' id='upw' placeholder='Enter your password' value={password} onChange={changePassword}/>
                </label>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}