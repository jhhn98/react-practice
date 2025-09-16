import './App.css'
import Button from './components/Button'
function App() {
  const buttonText = {
    text: 'Click me'
  }
  const handleClick = () => {
    console.log('3장 컴포넌트 연습문제!!')
  }
  return (
    <>
      <Button {...buttonText} handleClick={handleClick}/>
    </>
  )
}

export default App
