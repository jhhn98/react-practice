/*
import { useState } from 'react'
import A from './components/A'
export default function App() {
  console.log('App render: ')
  const [count, setCount] = useState(0)
  console.log('App render: ' + count)
  return (
    <>
      <h1>App Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Add</button>
      <A/>
    </>
  )
}
*/

// 메모이제이션 무효화 예제
/*
import { useState } from 'react'
import A from './components/A'

export default function App() {
  console.log('App render')
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>App Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Add</button>
      <A count={count} />
    </>
  )
}
*/
// 11.3.1 함수를 props로 전달하는 예제 - 함수 메모이제이션
/*
import { useState } from 'react'
import A from './components/A'

export default function App() {
  console.log('App render')
  const [count, setCount] = useState(0)
  const increment = () => setCount((count) => count + 1)
  return (
    <>
      <h1>App Count: {count}</h1>
      <A increment={increment}/>
    </>
  )
}
*/
// 11.3.3 상태 변경 함수를 콜백 함수 형태로 사용하기
/*
import { useCallback, useState } from 'react'
import A from './components/A'

export default function App() {
  console.log('App render')
  const [count, setCount] = useState(0)
  //const increment = useCallback(() => setCount(count + 1), [])
  const increment = useCallback(() => setCount(count + 1), [count])
  return (
    <>
      <h1>App Count: {count}</h1>
      <A increment={increment} />
    </>
  )
}
*/
//11.4.1 연산 비용이 큰 작업의 성능 저하 문제
{/*
import { useState } from 'react'
import { initialItems } from './lib/utils'

export default function App() {
  // 상태 정의
  const [count, setCount] = useState(0)
  // 29,999,999개 항목 중 selected가 true인 항목 찾기. 속도가 정말 다르다. 
  const selectItems = initialItems.find((item) => item.selected)
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prevCount) => (prevCount + 1))}>increment</button>
      // 연산 비용이 높은 코드
      <p>{selectItems?.id}</p>
    </>
  )
}
*/}
// 11.4.2 useMemo 훅 사용하기
/* import { useMemo, useState } from 'react'
import { initialItems } from './lib/utils'

export default function App() {
  // 상태 정의
  const [count, setCount] = useState(0)
  // 3천만 개 항목 중 selected
  const selectItems = useMemo(() => initialItems.find((item) => item.selected), [])
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>증가</button>
      <p>{selectItems?.id}</p>
    </>
  )
} */

/* export default function App() {
  ...
  const selectItems = useMemo(
    () => initialItems.find((item) => item.selected), [count]
  )
  return ( ... )
} */
/* export default function App() {
  // 연산 비용이 낮은 값을 메모이제이션
  const selectItem = useMemo(() => initialItems[0], [])
  // 단순 접근은 그대로 사용
  // const selectItem = initialItems[0]
  return <p>{selectItem?.id}</p>
} */
/* const someFunction = useMemo(() => {
  return (x: number) => x + 1
}, []) */
/* function useCallback(callback, deps) {
  return useMemo(() => callback, deps)
} */
// 11.5.1 React.lazy()를 사용한 코드 스플리팅
// 코드 스플리팅을 적용하지 않은 코드
/* import { useState } from 'react'
import LazyComponent from './components/LazyComponent'

export default function App() {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
      {isShow && <LazyComponent />}
    </>
  )
} */
//React.lazy() 코드 스플리팅 적용
/* import { lazy, useState } from 'react'

const LazyComponent = lazy(() => import('./components/LazyComponent'))

export default function App() {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
      {isShow && <LazyComponent />}
    </>
  )
} */
// 11.5.2 Suspense
// 의도적으로 LazyComponent의 로드를 지연시킨 예제
/* import { lazy, useState } from 'react'

type LazyModuleDefault = typeof import('./component/LazyComponent').default

const LazyComponent = lazy<LazyModuleDefault>(
  () =>
    new Promise<{ default: LazyModuleDefault }>((resolve) => {
      setTimeout(() => {
        import ('./components/LazyComponent').then((mod) => {
          resolve(mod)
        })
      }, 2000)
    })
)

export default function App() {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
      {isShow && <LazyComponent />}
    </>
  )
} */
// 의도적으로 로드를 지연시킨 예제에 Suspense를 적용한 예제
/* import { lazy, Suspense, useState } from 'react'

type LazyModuleDefault = typeof import('./component/LazyComponent').default

const LazyComponent = lazy<LazyModuleDefault>(
  () =>
    new Promise<{ default: LazyModuleDefault }>((resolve) => {
      setTimeout(() => {
        import ('./components/LazyComponent').then((mod) => {
          resolve(mod)
        })
      }, 2000)
    })
)

export default function App() {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
      {isShow && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </>
  )
} */
// 11.5.2 Suspense - Suspense 구성 방식
/* import { lazy, Suspense, useState } from 'react'
import Loading from './components/Loading'
import LazyComponent2 from './components/LazyComponent2'
import LazyComponent3 from './components/LazyComponent3'
import LazyComponent4 from './components/LazyComponent4'

type LazyModuleDefault = typeof import('./components/LazyComponent5').default
const LazyComponent5 = lazy<LazyModuleDefault>(
  () =>
    new Promise<{ default: LazyModuleDefault }>((resolve) => {
      setTimeout(() => {
        import ('./components/LazyComponent5').then((mod) => {
          resolve(mod)
        })
      }, 2000)
    })
)

export default function App() {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
      {isShow && (
        <>
          <Suspense fallback={<Loading />}>
            <LazyComponent5 />
            <LazyComponent2 />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <LazyComponent3 />
            <LazyComponent4 />
          </Suspense>
        </>
      )}
    </>
  )
} */
// 11.5.3 ErrorBoundary
/* import { lazy, Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Loading from './components/Loading'
import Fallback from './components/Fallback'

type LazyModuleDefault = typeof import('./components/LazyComponent5').default
const LazyComponent5 = lazy<LazyModuleDefault>(
  () =>
    new Promise<{ default: LazyModuleDefault }>((resolve) => {
      setTimeout(() => {
        import ('./components/LazyComponent5').then((mod) => {
          resolve(mod)
        })
      }, 2000)
    })
)

export default function App() {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
      {isShow && (
        <ErrorBoundary FallbackComponent={Fallback}>
          <Suspense fallback={<Loading />}>
            <LazyComponent5 />
          </Suspense>
        </ErrorBoundary>
      )}
    </>
  )
} */
// 11.6.1 useDeferredValue 훅 - 적용 전
/* import { useState } from 'react'
import SlowList from './components/SlowList'

export default function App() {
  const [query, setQuery] = useState('')
  return (
    <div>
      <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} />
      <SlowList query={query} />
    </div>
  )
} */
// 11.6.1 useDeferredValue 훅 - 적용 후
/* import { useDeferredValue, useState } from 'react'
import SlowList from './components/SlowList'

export default function App() {
  const [query, setQuery] = useState('')
  const deferredValue = useDeferredValue(query)
  return (
    <div>
      <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} />
      <SlowList query={deferredValue} />
    </div>
  )
} */
// 11.6.2 useTransition 훅
import { useState, useTransition } from 'react'
import SlowList from './components/SlowList'

export default function App() {
  const [query, setQuery] = useState('')
  const [deferredValue, setDeferredValue] = useState('')
  const [isPending, startTransition] = useTransition()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    startTransition(() => setDeferredValue(newQuery))
  }
  
  return (
    <div>
      <input type='text' value={query} onChange={handleChange} />
      {isPending ? <div>Loading...</div> : <SlowList query={deferredValue} />}
    </div>
  )
}