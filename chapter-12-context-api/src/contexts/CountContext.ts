// context/CountContext.ts
/* import { createContext } from 'react'

interface CountContextType { // 공유하려는 데이터(상태와 함수들)의 타입 구조를 정의한 인터페이스이다. 이때 interface 대신 type 키워드를 써도 무방하다
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
}
// createContext() 함수로 컨텍스트 객체를 생성한다. 아직 실제 데이터를 공급할 수 없으므로 초깂값은 null로 지정한다. 타입 안정성을 위해 CountContextType | null 유니언 타입으로 null을 허용한다
export const CountContext = createContext<CountContextType | null>(null) */

// CountContext.ts 렌더링 최적화 작업
import { createContext } from 'react'

interface CountContextType {
    count: number
}
interface CountActionContextType {
    increment: () => void
    decrement: () => void
    reset: () => void
}

export const CountContext = createContext<CountContextType | null>(null)
export const CountActionContext = createContext<CountActionContextType | null>(null)