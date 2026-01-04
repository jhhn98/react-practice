/* // counterStore.ts 
// zustand 패키지에서 create() 함수를 불러온다.
import { create } from 'zustand'
// 타입스크립트를 사용할 경우 상태와 액션의 구조를 미리 정의해야 한다. 여기서는 count라는 숫자 상태와 increment(), decrement(), reset(), resetIfEven() 이라는 4가지 함수를 포함한 구조를 인터페이스로 작성한다.
interface CounterStoreState {
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
    resetIfEven: () => void
}
// create() 함수로 상태와 액션을 포함한 스토어를 생성한다. 이때 <CounterStoreState>를 제네릭 타입으로 명시해 스토어가 이 구조를 따르도록 한다. Zustand에서 상태를 변경할 때는 set() 함수를 사용한다. 이 함수는 리액트의 useState 훅에서 사용하는 상태 변경 함수와 비슷한 방식으로 동작한다. increment, decrement처럼 현재 상태를 참조해 계산할 경우에는 콜백 함수((state) => {}) 형태로 작성하고 reset처럼 고정 값을 바로 설정할 경우에는 객체 형태로 새 상태를 직접 전달한다. 또한, resetIfEven()처럼 함수 내부에서 상태 값을 안전하게 가져오고 싶을 때는 get() 함수를 사용한다.
export const useCounterStore = create<CounterStoreState>((set, get) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
    resetIfEven: () => {
        const { count } = get()
        if (count % 2 === 0) {
            set({ count: 0 })
        }
    }
})) */
/* // counterStore.ts 12.4.4 persist 미들웨어 적용
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
interface CounterStoreState {
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
    resetIfEven: () => void
}
// create<CounterStoreState>()(...) 형식으로 타입을 지정해야 타입스크립트 오류 없이 미들웨어를 적용할 수 있다.
export const useCounterStore = create<CounterStoreState>() (
    // persist() 함수는 인자 2개를 받는다.
    // 첫 번째 인자: 상태와 액션을 정의하는 합수이다.((set) => ({ ... }))
    // 두 번째 인자: 상태를 어디에 어떻게 저장할지 설정하는 객체이다. 여기서 name은 로컬 스토리지에 저장할 때 사용할 키 이름이다.
    persist( // 상태를 저장할 수 있게 persist()로 감싸기
        (set, get) => ({
            count: 0,
            increment: () => set((state) => ({ count: state.count + 1 })),
            decrement: () => set((state) => ({ count: state.count - 1 })),
            reset: () => set({ count: 0 }),
            resetIfEven: () => {
                const { count } = get()
                if (count % 2 === 0) {
                    set({ count: 0 })
                }
            }
        }), { name: 'counter-store' }
    )
) */
/* // counterStore.ts 12.4.4 immer 미들웨어 적용
import { create } from 'zustand'
import { persist, subscribeWithSelector } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
interface CounterStoreState {
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
    resetIfEven: () => void
}
export const useCounterStore = create<CounterStoreState>() (
    subscribeWithSelector( // 상태 구독을 위한 미들웨어 적용
        persist( // 상태 유지를 위한 미들웨어 적용
            immer((set, get) => ({ // 불변성 관리를 위한 미들웨어 적용
                count: 0,
                // immer가 자동으로 불변성 관리
                increment: () => set((state) => { state.count += 1 }),
                decrement: () => set((state) => { state.count -= 1 }),
                reset: () => set((state) => {state.count = 0}),
                resetIfEven: () => {
                    const { count } = get()
                    if (count % 2 === 0) {
                        set(state => state.count = 0)
                    }
                }
            })), { name: 'counter-store' }
        )
    )
) */
// counterStore.ts 12.4.4 devtools 미들웨어 적용
import { create } from 'zustand'
import { persist, subscribeWithSelector, devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
interface CounterStoreState {
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
    resetIfEven: () => void
}
export const useCounterStore = create<CounterStoreState>() (
    devtools(
        subscribeWithSelector( // 상태 구독을 위한 미들웨어 적용
            persist( // 상태 유지를 위한 미들웨어 적용
                immer((set, get) => ({ // 불변성 관리를 위한 미들웨어 적용
                    count: 0,
                    // immer가 자동으로 불변성 관리
                    increment: () => set((state) => { state.count += 1 }),
                    decrement: () => set((state) => { state.count -= 1 }),
                    reset: () => set((state) => {state.count = 0}),
                    resetIfEven: () => {
                        const { count } = get()
                        if (count % 2 === 0) {
                            set(state => state.count = 0)
                        }
                    }
                })), { name: 'counter-store' }
            )
        ),
        {
            trace: true // 액션 호출 스택 추적 활성화
        }
    )
)