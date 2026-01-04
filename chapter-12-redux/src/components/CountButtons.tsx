/* // CountButtons.tsx
// 버튼 클릭 시 상태를 변경해야 하므로 useDispatch 훅을 사용한다.
import { useDispatch } from 'react-redux'
// 슬라이스에서 내보낸 액션 생성 함수를 불러온다.
import { decrement, increment, reset } from '../store/slice/counterSlice'

export default function CountButtons() {
    console.log('CountButtons rendering')
    // 스토어의 디스패치 함수를 컴포넌트에서 사용할 수 있도록 useDispatch 훅으로 가져온다. 디스패치 함수는 액션을 스토어에 전달해 리듀서가 상태를 변경하도록 요청하는 데 사용한다.
    const dispatch = useDispatch()
    // dispatch(액션_생성_함수()) 형태로 사용하면 Redux가 해당 액션을 처리할 리듀서를 자동으로 실행한다. 예를 들어, dispatch(decrement())를 호출하면 { type: 'counter/decrement' } 액션을 생성해 Redux에 보낸다. Redux는 이 액션을 보고 등록된 리듀서에서 해당 액션에 맞는 로직을 실행한다.
    return (
        <>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </>
    )
}
 */
// CountButtons.tsx 12.3.7 값을 전달해 상태변경하기
import { useDispatch } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from '../store/slice/counterSlice'

export default function CountButtons() {
    console.log('CountButtons rendering')
    const dispatch = useDispatch()
    return (
        <>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(incrementByAmount({count: 10 }))}>Increment Amount 10</button>
        </>
    )
}
