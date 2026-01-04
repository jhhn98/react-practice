// Auth.tsx
import { useAuthContext } from '../hooks/useAuthContext'

export default function Auth() {
    console.log('Auth rendering')
    const { isLogin, login, logout } = useAuthContext()
    return (
        <>
            <h1>Login: {isLogin.toString()}</h1>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
        </>
    )
}