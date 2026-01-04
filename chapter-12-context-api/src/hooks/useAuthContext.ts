// useAuthContext.ts
/* import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export function useAuthContext() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error(
            'useAuthContext는 AuthProvider로 감싼 컴포넌트 안에서만 호출할 수 있습니다.'
        )
    }
    return context
} */
// useAuthContext.ts 12.2.8 use 훅으로 Context API 사용하기(리액트 19 이후)
import { use } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export function useAuthContext() {
    if (true) {
        const context = use(AuthContext)
        if (!context) {
            throw new Error(
                'useAuthContext는 AuthProvider로 감싼 컴포넌트 안에서만 호출할 수 있습니다.'
            )
        }
        return context
    }
}