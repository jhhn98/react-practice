import Login from './components/Login'
import Logout from './components/Logout'
import LoginMessage from './components/LoginMessage'
import LogoutMessage from './components/LogoutMessage'

export default function App() {
  const isLogin = false;
/*   if (isLogin) {
    return <h1>로그인했습니다.</h1>
  }
  return <h1>로그인해야 합니다.</h1> */

  if (isLogin) 
    return(
      <>
        <Login/>
        <LoginMessage/>
      </>
    )

    return(
      <>
        <Logout/>
        <LogoutMessage/>
      </>
    )

  /* return (
    <>

    </>
  ) */
}

export default function App() {
  const isLogin = true;
  return <h1>{isLogin ? '환영합니다.' : '로그인해야 합니다.'}</h1>
}

export default function App() {
  const isLogin = true;
  return isLogin ? <h1>Welcome</h1> : <h1>You must login</h1>
}

export default function App() {
  const isLogin = true;
  return isLogin ? (
    <>
      <h1>Welcome</h1>
      <p>You are logged in.</p>
    </>
  ) : (
    <>
      <h1>Must login</h1>
      <p>You must login.</p>
    </>
  )
}

import Login from './components/Login'
import Logout from './components/Logout'

export default function App() {
  const isLogin = true;

  return isLogin ? <Login/> : <Logout/>
}

import Login from './components/Login'
import Logout from './components/Logout'
import LoginMessage from './components/LoginMessage'
import LogoutMessage from './components/LogoutMessage'

export default function App() {
  const isLogin = true
  
  return isLogin ? (
    <>
      <Login/>
      <LoginMessage/>
    </>
  ) : (
    <>
      <Logout/>
      <LogoutMessage/>
    </>
  )
}

export default function App() {
  const isLogin = true;
  const message = isLogin ? '환영합니다' : '로그인이 필요합니다.'
  return(
    <>
      <h1>{message}</h1>
    </>
  )
}

export default function App() {
  const isLogin = true;
  const message = isLogin ? (
    <>
      <h1>환영합니다</h1>
      <p>오늘은 기분이 어떠세요?</p>
    </>
  ) : (
    <>
      <h1>로그인이 필요합니다.</h1>
      <p>아직 회원이 아니신가요?</p>
    </>
  )

  return (
    <>{message}</>
  )
}

import Login form './components/Login'
import Logout form './components/Logout'

export default function App() {
  const isLogin = true
  const message = isLogin ? <Login/> : <Logout/>
  return (
    <>
      {message}
    </>
  )
}
export default function App() {
  const isActive = true
  return (
    <>
      <div
        style={{
          fontSize: isActive ? '1rem' : '1.2rem',
          fontWeight: isActive ? 'bold' : 'normal',
          color: 'blue'
        }}>Text</div>
    </>
  )
}
export default function App() {
  const isActive = true
  return (
    <>
      <div className={isActive ? 'active' : 'inactive'}>Text</div>
    </>
  )
}
export default function App() {
  const isActive = true
  return (
    <>
      <div className={`main ${isActive ? 'active' : 'inactive'}`}>Text</div>
    </>
  )
}

import Login from './components/Login'

export default function App() {
  const isAdmin = true
  const isEditable = true

  return (
    <>
      <Login
      role={isAdmin ? 'administrator' : 'user'}
      permissions={isAdmin ? ['read', 'write', 'delete'] : ['read']}
      editable={isEditable ? true : false}
      />
    </>
  )
}

export default function App() {
  const isLogin = true
  return(
    <>
      {isLogin && <h1>환영합니다</h1>}
      {!isLogin && <h1>로그인이 필요합니다.</h1>}
    </>
  )
}

export default function App() {
  const isLogin = true
  return(
    <>
      {isLogin && (
        <>
          <h1>환영합니다</h1>
          <p>오늘 기분이 어떠세요?</p>
        </>
      )}
      {!isLogin && (
        <>
          <h1>로그인이 필요합니다</h1>
          <p>아직 회원이 아니신가요?</p>
        </>
      )}
    </>
  )
}

import Login from './components/Login'
import Logout from './components/Logout'

export default function App() {
  const isLogin = true
  return (
    <>
      {isLogin && <Login/>}
      {!isLogin && <Logout/>}
    </>
  )
}

import Login from './components/Login'
import Logout from './components/Logout'
import LoginMessage from './components/LoginMessage'
import LogoutMessage from './components/LogoutMessage'

export default function App() {
  const isLogin = true
  return (
    <>
      {isLogin && (
        <>
          <Login/>
          <LoginMessage/>
        </>
      )}
      {!isLogin && (
        <>
          <Logout/>
          <LogoutMessage/>
        </>
      )}
    </>
  )
}

export default function App() {
  const isLogin = true
  const loggedIn = isLogin && <h1>환영합니다</h1>
  const loggedOut = !isLogin && <h1>로그인이 필요합니다</h1>
  return (
    <>
      {loggedIn}
      {loggedOut}
    </>
  )
}

export default function App() {
  const items = ['item1', 'item2', 'item3']
  return <div>{items}</div>
}
// 결과 <div>item1item2item3</div>

export default function App() {
  const items = [
    <li key='0'>item 1</li>,
    <li key='1'>item 2</li>,
    <li key='2'>item 3</li>
  ]
  return <ul>{items}</ul>
}
// <ul>
//    <li>item1</li>
//    <li>item2</li>
//    <li>item3</li>
// </ul>

//ListItem.tsx
export default function ListItem({text}: { text: string }) {
  return <li>{text}</li>
}

//App.tsx
import ListItem from './components/ListItem'
export default function App() {
  const items = [
    <ListItem key='0' text='item1'/>
    <ListItem key='1' text='item2'/>
    <ListItem key='2' text='item3'/>
  ]
  return <ul>{items}</ul>
}

//<ul>
//  <li>item1</li>
//  <li>item2</li>
//  <li>item3</li>
//</ul>


// 배열 요소 일반 렌더링
export default function App() {
  const items = [
    <li key='apple'>apple</li>,
    <li key='banana'>banana</li>,
    <li key='tomato'>tomato</li>
  ]
  return <ul>{items}</ul>
}

// map() 메서드를 사용하여 출력
export default function App() {
  const items = ['apple', 'banana', 'strawberry']
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

// 배열 컴포넌트에 map() 메서드 사용
export default function ListItem({text}: { text: string }) {
  return <li>{text}</li>
}
import ListItem from './components/ListItem'

export default function App() {
  const items = ['apple', 'banana', 'strawberry']
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} text={item}/>
      ))}
    </ul>
  )
}

export default function App() {
  const renderItems = []
  const items = ['apple', 'banana', 'strawberry']
  for (let i = 0; i < items.length; i++) {
    renderItems.push(<li key={i}>{items[i]}</li>)
  }
  return (
    <>
      <ul>{renderItems}</ul>
    </>
  )
}

export default function App() {
  const items = ['apple', 'banana', 'strawberry']
  const elements: React.ReactNode[] = []
  items.forEach((item, index) => {
    elements.push(<li key={index}>{item}</li>)
  })
  return <ul>{elements}</ul>
}

export default function App() {
  const items = [
    <li key='1'>apple</li>,
    <li key='2'>banana</li>,
    <li key='3'>strawberry</li>
  ]
  return (
    <>
      <ul>
        {items.reduce<React.ReactNode[]>((acc, item) => {
          acc.push(item);
          return acc;
        }, [])}
      </ul>
    </>
  )
}

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