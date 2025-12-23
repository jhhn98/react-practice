import { useState, useEffect } from 'react'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoEditor from './components/TodoEditor'

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(() => JSON.parse(localStorage.getItem('todos') || '[]'))
  // 제네릭 타입<Todo[]>는 배열 요소가 Todo 타입임을 나타낸다. 처음에는 등록한 할 일이 없으니 초깃값은 빈 배열([])로 설정한다.
  // todos 상태 값이 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  // useEffect 훅으로 업데이트, 사이드 이펙트로 처리
  const addTodo = (title: string) => { 
    setTodos((todos) => [
      ...todos,
      {
        id: new Date().getTime(),
        title,
        done:false
      }
    ])
  }
  // id, title, done 속성을 가진 객체를 만들어 기존 할 일에 배열에 추가한다. id는 각 항목을 고유하게 식별할 수 있도록 new Date().getTime()을 사용해 현재 시각(밀리초 단위)을 저장한다. 할 일이 아직 완료되지 않은 상태이므로 done은 초깃값을 false로 설정한다. 리액트에서는 상태가 변경되어야만 컴포넌트를 리렌더링하기 때문에 기존 배열을 직접 수정하지 않고 ...todos로 복사해 새로운 배열을 만든 뒤 setTodos()로 설정한다. 이렇게 하면 리액트가 상태의 변화를 정확히 감지하고, 변경된 UI를 올바르게 반영할 수 있다. 또한 상태 업데이트 함수인 setTodos()는 콜백 함수 형태로 작성해 최신 상태를 기반으로 안전하게 새로운 상태를 계산할 수 있도록 한다.
  const toggleTodo = (id: number) => {
    setTodos((todos) => 
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }
  // toggleTodo() 함수는 특정 할 일의 done 속성을 반전시키는 기능을 수행한다. setTodos() 함수를 호출할 때는 콜백 함수 형태를 사용해 최신 상태를 안전하게 참조한다. map() 메서드로 기존 할 일 배열을 순회하면서 id가 일치하는 항목만 done 값을 반대로 바꾸고, 나머지 항목은 그대로 유지한다. 예를 들어 id가 2인 할 일의 done 값이 false엿다면 true로, true였다면 false로 바꾼다.
  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }
  const modifyTodo = (id: number, title: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, title } : todo))
    )
  }
  return (
    <div className='todo'>
      <TodoHeader/>
      {/* 할 일 등록 */}
      <TodoEditor addTodo={addTodo}/>
      {/* 할 일을 등록하는 addTodo() 함수를 props로 전달한다. 사용자가 텍스트를 입력한 후 [Add] 버튼을 클릭하면 이 함수가 호출된다. 이때 addTodo()함수에 마우스를 올리면 다음과 같이 타입을 확인할 수 있다.*/}
      {/* 할 일 목록 */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} modifyTodo={modifyTodo}/>
      {/* App 컴포넌트에서 정의한 toggleTodo() 함수를, props를 통해 TodoList 컴포넌트로 전달한다. 실제 완료 상태를 바꾸는 동작은 TodoList 내부에서 발생하므로 부모 컴포넌트에서 정의한 상태 변경 로직을 자식에게 내려보내는 방식으로 구현한다.*/}
    </div>
  )  
}
/**
 * 리액트에서 기본 HTML 요소(<button>, <input> 등)를 컴포넌트로 만들 때 React.ComponentPropsWithRef<'태그명'> 제네릭 타입을 사용하면 해당 태그에서 사용할 수 있는 모든 속성 타입을 자동으로 포함할 수 있다. 이 방식은 매우 편리하고 확장성이 뛰어나지만, 사용하지 않는 속성까지도 타입으로 따라온다. 따라서 컴포넌트가 단순하고 사용하는 속성이 몇 개 되지 않는 경우에는 오히려 과한 타입이 될 수 있다. 필요한 props만 명시적으로 지정하는 것이 오히려 코드의 가독성와 유지보수성 면에서 더 유리할 수 있다.
 */