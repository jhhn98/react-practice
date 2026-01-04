// CountOutsideDisplay
import { useSelector } from 'react-redux'
import { type RootState } from '../store/store'

export default function CountOutsideDisplay() {
    console.log('CountOutsideDisplay rendering')
    const count = useSelector((state: RootState) => state.counter.value)
    return <h1>Outside Count: {count}</h1>
}
// useSelector: 스토어에 저장된 상태를 컴포넌트에서 쉽게 조회할 수 있게 하는 조회 전용 훅이다.
// RootState: 스토어의 전체 상태 타입으로, store.ts 파일에 정의되어 있다.
// state.counter.value: 스토어에 counter라는 이름으로 등록한 슬라이스의 value 상태값이다.