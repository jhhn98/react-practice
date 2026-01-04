/* // counterSlice.ts
import { createSlice } from '@reduxjs/toolkit'
// 슬라이스에서 관리할 상태의 구조를 인터페이스로 정의한다. 여기서는 number 타입의 value 속성을 정의한다.
export interface CounterState {
    value: number
}
// 인터페이스에서 정의한 타입을 사용해 상태의 초깃값을 { value: 0 }으로 설정한다.
const initialState: CounterState = {
    value: 0,
}
//createSlice() 함수로 슬라이스를 생성한다. 인자는 객체로 받는다. 객체에는 슬라이스를 만들기 위한 값이 들어간다.
export const counterSlice = createSlice({
    // 슬라이스 이름을 'counter'로 설정한다. 이 이름은 'counter/increment'와 같이 자동으로 액션 타입 이름에 반영된다.
    name: 'counter',
    // 앞서 설정한 { value: 0 }을 초깃값으로 사용한다.
    initialState,
    // 리듀서를 정의한다. 각 리듀서는 특정 액션에 대한 처리를 담당한다.
    // * Redux에서는 상태의 불변성(immutability)을 지켜야 해서 원래는 상태를 직접 바꾸면 안된다. 그러나 createSlice()는 내부적으로 Immer라는 라이브러리를 사용한다. Immer는 상태를 직접 바꾸는 코드를 작성해도 실제로는 상태를 복사해서 새 상태를 반환하는 방식으로 처리한다. state.value += 1처럼 작성해도 불변성을 유지하면서 안전하게 처리된다.
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        }
    }
})
// 액션 생성 함수를 구조 분해 할당으로 추출해 내보낸다.
export const { increment, decrement, reset } = counterSlice.actions
// 슬라이스 안에서 자동 생성된 리듀서를 기본값으로 내보낸다. 이 리듀서는 store.ts 파일에서 사용한다.
export default counterSlice.reducer */

// counterSlice.ts 12.3.7 값을 전달해 상태 변경하기
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
export interface CounterState {
    value: number
}
const initialState: CounterState = {
    value: 0,
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        },
        incrementByAmount: (state, action: PayloadAction<{ count: number }>) => {
            state.value += action.payload.count
        }
    }
})
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer