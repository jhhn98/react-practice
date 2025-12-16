//Button.tsx
type ButtonProps = React.ComponentPropsWithRef<'button'>
export default function Button({ children, ...rest }: ButtonProps) {
    return <button {...rest}>{children}</button>
}
//Input.tsx
type InputProps = React.ComponentPropsWithRef<'input'> & {
    label: string
}
export default function Input({ label, ...rest}: InputProps) {
    const id = rest.id
    return(
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <input {...rest}/>
        </>
    )
}
//App.tsx
import { useState } from 'react'
import Input from './components/Input'
import Button from './components/Button'

export default function App() {
    //아이디, 비밀번호, 오류, 로딩 상태 관리
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    //로그인 폼 제출 이벤트 핸들러
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() //기본 폼 제출 동작 방지
        if (!username) { //username 필드가 비어 있으면 오류 메시지 출력
            alert('아이디를 입력하세요.')
            return
        }
        if (!password) { //password 필드가 비어 있으면 오류 메시지 출력
            alert('비밀번호를 입력하세요.')
            return
        }
    }
    return (
        <>
            <h2>로그인</h2>
            <form onSubmit={handleLogin}>
                <Input label='ID' type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='ID'/>
                <Input label='Password' type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
                <Button type='submit'>Login</Button>
            </form>
        </>
    )
}