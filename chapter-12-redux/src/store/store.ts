// store.ts 
/* //redux-toolkit 패키지에서 configureStore() 함수를 가져온다.
import { configureStore } from '@reduxjs/toolkit'

// configureStore() 함수에 객체를 전달하고, 그 안에 reducer 속성을 정의한다. 아직 사용할 리듀서가 없기 때문에 현재는 빈 객체({})로 설정한다. 나중에 실제 리듀서를 생성한 뒤 이 위치에 등록한다.
export const store = configureStore({
    reducer: {},// 리듀서 등록 위치
})
// store.getState()는 스토어의 현재 상태를 반환하는 디스패치 함수이다. 반환 값의 타입은 ReturnType<typeof 함수>를 사용해 추론한다. ReturnType<typeof 함수>는 어떤 함수가 반환하는 값의 타입을 자동으로 추론해주는 타입스크립트 유틸리티이다. 추론한 타입을 사용할 수 있게 RootState 변수에 담아 내보낸다.
export type RootState = ReturnType<typeof store.getState>
// store.dispatch()는 액션을 보낼 때 사용하는 함수이다. 여기에 어떤 변수나 함수의 타입을 가져오는 연산자인 typeof를 사용하면 해당 함수의 타입을 추론할 수 있다. 이를 AppDispatch 변수에 담아 내보낸다.
// * 디스패치(dispatch)는 스토어에 어떤 액션이 발생했다고 알려주는 함수이다. 이 함수를 사용해 리듀서가 상태를 변경하게 된다.
export type AppDispatch = typeof store.dispatch */

// store.ts 12.5.3 슬라이스를 스토어에 추가하기
import { configureStore } from '@reduxjs/toolkit'
// counterSlice.ts에서 리듀서를 불러온다.
import counterSlice from './slice/counterSlice'

export const store = configureStore({
    reducer: {
        // reducer 객체 안에 counter: counterSlice를 추가한다. 이때 counter라는 키는 컴포넌트에서 슬라이스를 구분하는 이름 역할을 한다.
        counter: counterSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch