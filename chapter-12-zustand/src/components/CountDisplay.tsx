// CountDisplay.tsx
// useCounterStore 커스텀 훅을 사용해 전역 상태를 직접 조회하거나 업데이트 하도록 수정한다.
import { useCounterStore } from '../store/counterStore'

export default function CountDisplay() {
    const count = useCounterStore((state) => state.count)
    return <h1>Count: {count}</h1>
}
// count 값을 직접 조회한다. 상위 컴포넌트에서 props를 전달받을 필요 없이 커스텀 훅 한 줄로 상태를 가져올 수 있다는 점이 매우 편리하다. 상태를 변경할 때도 액션 함수를 동일한 방식으로 사용할 수 있다.