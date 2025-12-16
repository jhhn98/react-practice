import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount(count => count + 1)
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>click me</button>
    </>
  )
}

export default App
/*
import { useState } from 'react'

export default function App() {
  const [formState, setFormState] = useState({
    name: '',
    age: 0,
    gender: ''
    //...
  })
}
  */
/* 
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}
  */
 /*
 import { useState } from 'react'

 export default function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => { //count 0
    setCount((count) => count + 1) //count 1
    setCount((count) => count + 1) //count 2
    setCount((count) => count + 1) //count 3
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>ClickMe</button>
    </div>
  )
 }
*/
/*
const [state, dispatch] = useReducer<Type>(reducer, initialState)
{ type: 'ACTION_TYPE', payload: 데이터 }
dispatch({ type: 'ACTION_TYPE' })
*/
/*
function reducer(state: stateType, action: ActionType) {
  switch (action.type) {
    case 'ACTION_TYPE_1':
      return { ...state, 변경_값 } // 새로운 상태 반환
    case 'ACTION_TYPE_2':
      return { ...state, 변경_값 } // 새로운 상태 반환
    default:
      return state // 변경이 없을 경우 이전 상태 유지
  }
}
*/
/*
import { useReducer } from "react";

const initialState = { name: "Jihye", age: 39 };

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      // state.name = action.payload(직접 수정하면 안됨!)
      return {
        ...state, // 기존 상태 복사
        name: action.payload, // name만 교체
      };
    case "INCREMENT_AGE":
      return {
        ...state,
        age: state.age + 1,
      };
    default:
      return state;
  }
}

export default function UserInfo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>
        이름: {state.name}, 나이: {state.age}
      </p>
      <button onClick={() => dispatch({ type: "CHANGE_NAME", payload: '홍길동' })}>
        이름 변경
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT_AGE" })}>
        나이 +1
      </button>
    </div>
  );
}
*/
/*
// src/reducer/counterReducer.ts jsx구문 없이 함수만 반환하기 때문에 .ts
export function counterReducer(state: number, action: { type: string }) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'RESET':
      return 0
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
} 
// ./App.tsx
import { useReducer } from 'react';
import { counterReducer } from './reducer/counterReducer'

export default function App() {
  const [ count, countDispatch ] = useReducer(counterReducer, 0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => countDispatch({ type: 'DECREMENT'})}>DEC</button>
      <button onClick={() => countDispatch({ type: 'INCREMENT'})}>INC</button>
      <button onClick={() => countDispatch({ type: 'RESET'})}>RES</button>
    </div>
  )
}
*/
/*
import { useReducer } from 'react'
import { counterReducer } from './reducer/counterReducer'
import { userReducer } from './reducer/userReducer'
import { cartReducer } from './reducer/cartReducer'

export default function App() {
  const [ count, countDispatch ] = useReducer(counterReducer, 0)
  const [ user, userDispatch ] = useReducer(userReducer, {})
  const [ cart, cartDispatch ] = useReducer(cartReducer, [])

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={() => countDispatch({ type: 'INCREMENT' })}>INC</button>
      <h2>{user.name}</h2>
      <button onClick={() => userDispatch({ type: 'SET_USER', payload: { name: 'Alice' } })}>SET USER</button>
      <h3>{cart.length}</h3>
      <button onClick={() => cartDispatch({ type: 'ADD_ITEM', payload: { id: 1, name: 'Item 1' } })}>ADD ITEM</button>
    </div>
  )
}
*/
/* 
import { useState } from 'react'
import Count from './components/Count'

export default function App() {
  const [ count, setCount ] = useState(0)
  return(
    <>
      <Count count={count} setCount={setCount}/>

    </>
  )
}
 */
// src/components/Count.tsx
/* import { Dispatch, SetStateAction } from 'react' // setCount()의 타입을 명시하려면 Dispatch와 SetStateAction을 react 패키지에서 불러온다.

export default function Count({ count, setCount }: { count: number; setCount: Dispatch<SetStateAction<number>> }) {
  return(
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>INC</button>
    </>
  )
}


// App.tsx
import { useState } from 'react'
import Count from './components/Count'

export default function App() {
  const [count, setCount] = useState(0)
  const increment = () => setCount((count) => count + 1)

  return(
    <>
      <Count count={count} increment={increment}/>
    </>
  )
}

// src/components/Count.tsx
export default function Count({ count, increment }: { count: number; increment: () => void; }) {
  return(
    <>
      <h1>{count}</h1>
      <button onClick={increment}>INC</button>
    </>
  )
}






// App.tsx
import { useState } from 'react'
import CountDisplay from './components/CountDisplay'
import CountButtons from './components/CountButtons'

export default function App() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)
  return (
    <>
      <CountDisplay count={count}/>
      <CountButtons increment={increment} decrement={decrement} reset={reset}/>
    </>    
  )
}

// src/components/CountDisplay.tsx
export default function CountDisplay({ count }: { count: number }) {
  return(
    <>
    <h1>{count}</h1>
    </>
  )
}

// src/components/CountButtons.tsx
export default function CountButtons({ increment, decrement, reset }: { increment: () => void; decrement: () => void; reset: () => void;}) {
  return(
    <>
      <button onClick={increment}>INC</button>
      <button onClick={decrement}>DEC</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

//스타일 객체를 변수로 분리해서 사용하는 방식
export default function App() {
  const styles = {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '16px',
    padding: '10px'
  }

  return (
    <>
      <h1 style={styles}>Inline Style</h1>
    </>
  )
}

//스타일 객체를 JSX 내부에서 바로 작성하는 방식
//간단한 스타일만 적용할 경우 훨씬 직관적일 수 있다.
export default function App() {
  return (
    <>
      <h1 style={{
        backgroundColor: 'blue',
        color: 'white',
        fontSize: '16px',
        padding: '10px'
      }}>Inline Style</h1>
    </>
  )
}

import classNames from 'classnames'

const btnClass = classNames('btn', 'primary')
console.log(btnClass) // btn primary


classNames('foo', 'bar') //foo bar
classNames('foo', { bar: true }) //foo bar
classNames({ 'foo-bar': true })//foo-bar
classNames({ 'foo-bar': false })//
classNames({ foo: true }, { bar: true })//foo bar
classNames({ foo: true, bar: true })//foo bar
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true })//foo bar baz quux
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, '')//bar 1

import './App.css'
import classNames from 'classnames'
import Child from './components/Child'

export default function App() {
  const isActive = true;
  return (
    <>
      <button className={classNames('btn', {'is-active': isActive})}>App Button</button>
      <Child/>
    </>
  )
}

import styles from './App.module.css'
import classNames from 'classnames/bind'
import Child from './components/Child'

export default function App() {
  const isActive = true
  const cx = classNames.bind(styles)
  return (
    <>
      <button className={cx({btn: true, 'is-active': isActive})}>App Button</button>
      <Child/>
    </>
  )
} */