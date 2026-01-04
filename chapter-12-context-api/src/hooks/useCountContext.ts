/* import { useContext } from 'react'
import { CountContext } from '../contexts/CountContext'

export function useCountContext() {
    // useContext는 Context API로 공유된 값을 하위 컴포넌트에서 직접 가져올 수 있게 해주는 훅이다.
    const context = useContext(CountContext)
    // context: 컨텍스트에서 제공한 데이터이다. 보통 객체 형태이므로 필요한 값만 구조 분해 할당해서 사용할 수 있다.
    // CountContext: creatContext()로 생성한 컨텍스트 객체이다. createContext()로 객체를 생성할 때 export한 이유가 바로 useContext 훅에서 사용하기 위함이다.

    // useContext 훅의 반환 값을 확인한다. 이 값이 null 또는 undefined라면 Context Provider(*Provider.tsx)로 감싸지 않은 것이므로 잘못된 사용을 알리기 위해 예외 처리한다.
    if (!context) {
        throw new Error(
            'useCountContext는 CountContext로 감싼 컴포넌트에서만 호출할 수 있습니다.'
        )
    }
    // 정상적으로 조회된 컨텍스트 데이터를 반환한다.
    return context
} */
// useCountContext.ts 렌더링 최적화
import { useContext } from 'react'
import { CountActionContext, CountContext } from '../contexts/CountContext'

export function useCountContext() {
    const context = useContext(CountContext)
    if (!context) {
        throw new Error(
            'useCountContext는 CountContext로 감싼 컴포넌트에서만 호출할 수 있습니다.'
        )
    }
    return context
}
export function useCountActionContext() {
    const actionContext = useContext(CountActionContext)
    if (!actionContext) {
        throw new Error(
            'useCountActionContext는 CountContext로 감싼 컴포넌트 안에서만 호출할 수 있습니다.'
        )
    }
    return actionContext
}