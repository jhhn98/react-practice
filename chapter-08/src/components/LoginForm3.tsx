import useInput from '../hooks/useInput'

export default function LoginForm3() {
    const { value: email, onChange: changeEmail } = useInput('')
    const { value: password, onChange: changePassword } = useInput('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(email, password)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='uid'>
                    <input type='text' id='uid' placeholder='Please your email' value={email} onChange={changeEmail}/>
                </label>
                <label htmlFor='upw'>
                    <input type='password' id='upw' placeholder='Enter your password' value={password} onChange={changePassword}/>
                </label>
            </form>
        </>
    )
}