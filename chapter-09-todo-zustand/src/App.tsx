// App.tsx
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoEditor from './components/TodoEditor'

export default function App() {
  return (
    <div className='todo'>
      <TodoHeader />
      <TodoEditor />
      <TodoList />
    </div>
  )  
}