/*
import { useState } from 'react'

export default function App() {
  const [value, setValue] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <>
      <form>
        <h1>Input: {value}</h1>
        <input type='text' value={value} onChange={handleChange}/>
      </form>
    </>
  )
}
*/
// React 18, React 19 바뀐점 비교 예제
import { useState, useRef } from 'react'
import Input from './components/InputReact18'
import Button from './components/Button'

export default function App() {
  //useRef 훅으로 아이디와 비밀번호 입력 요소에 연결할 ref 객체를 생성한다. 제네릭 타입 <HTMLInputElement>를 지정하면 타입스크립트가 DOM 타입을 정확히 추론할 수 있다.
  const userInputEl = userRef<HTMLInputElement>(null)
  const passwordInputEl = userRef<HTMLInputElement>(null)
  //아이디, 비밀번호, 오류, 로딩 상태 관리
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  //로그인 폼 제출 이벤트 핸들러
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() //기본 폼 제출 동작 방지
    if (!username) { //username 필드가 비어 있으면 오류 메시지 출력
      alert('아이디를 입력하세요.')
      userInputEl.current?.focus() //폼을 제출할 때 ref.current?.focus()를 호출하면 특정 입력 필드에 포커스를 이동시킬 수 있다. 사용자가 값을 입력하지 않은 필드를 빠르게 확인하고 수정할 수 있게 한다.
      return
    }
    if (!password) { //password 필드가 비어 있으면 오류 메시지 출력
      alert('비밀번호를 입력하세요.')
      passwordInputEl.current?.focus() //폼을 제출할 때 ref.current?.focus()를 호출하면 특정 입력 필드에 포커스를 이동시킬 수 있다. 사용자가 값을 입력하지 않은 필드를 빠르게 확인하고 수정할 수 있게 한다.
      return
    }
  }
  return (
    <>
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        {/*Input 컴포넌트는 forwardRef() 함수로 감싸져 있기 때문에 ref 객체를 props처럼 전달할 수 있다. 내부에서 <input ref={ref}/> 형태로 연결해 부모 컴포넌트에서 전달한 ref 객체로 실제 DOM 요소에 직접 접근할 수 있다.*/}
        <Input ref={userInputEl} label='ID' type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='ID'/>
        {/*Input 컴포넌트는 forwardRef() 함수로 감싸져 있기 때문에 ref 객체를 props처럼 전달할 수 있다. 내부에서 <input ref={ref}/> 형태로 연결해 부모 컴포넌트에서 전달한 ref 객체로 실제 DOM 요소에 직접 접근할 수 있다.*/}
        <Input ref={passwordInputEl} label='Password' type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
        <Button type='submit'>Login</Button>
      </form>
    </>
  )
}