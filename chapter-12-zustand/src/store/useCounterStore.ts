// useCounterStore.ts 12.4.4 subscribeWithSelector 미들웨어 적용
import { create } from 'zustand'
import { persist, subscribeWithSelector } from 'zustand/middleware'
interface CounterStoreState {
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
    resetIfEven: () => void
}
export const useCounterStore = create<CounterStoreState>() (
    subscribeWithSelector(
        persist(
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
    )
)