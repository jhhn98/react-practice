/* import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  color: #bf4f74;
  padding:0.25em 1em;
`
function App() {
  return (
    <>
      <Button>Click me</Button>
    </>
  )
}

export default App */
/* 
function tagFunction(strings, ...values) {
  console.log(strings)
  console.log(values)
}

const name = 'John'
const age = 25

tagFunction `Hello, my name is ${name} and I am ${age} years old.`

// console.log(strings) - [ 'Hello, my name is', 'and I am', 'years old.' ]
// console.log(values) - [ 'John', 25 ]
 */
/* import styled, { css } from 'styled-components'

const Button = styled.button<{ $primary?: boolean}>`
  background: transparent;
  border-radius: 3px;
  color: #bf4f74;
  padding: 0.25em 1em;
  ${(props) => 
    props.$primary && 
    css `
      background: #bf4f74;
      color: #fff;
    `
  }
`
export default function App() {
  return(
    <>
      <Button $primary>Click me</Button>
    </>
  )
} */
/* import { css } from '@emotion/css'

export default function App() {
  return(
    <button className={css`
        background: transparent;
        border-radius: 3px;
        border: none;
        color: #bf4f74;
        padding: 0.25em 1em;
      `}>Click me</button>
  )
} */
/* import { css } from '@emotion/css'

export default function App() {
  const isActive = true;
  return(
    <button className={css`
        background: ${isActive ? '#bf4f74' : 'transparent'};
        border-radius: 3px;
        border: none;
        color: ${isActive ? 'white' : '#bf4f74'};
        padding: 0.25em 1em;
      `}>Click me</button>
  )
} */
import { container, button, active } from './App.css.ts'

export default function App() {
  const isActive = true;
  return(
    <>
      <div className={container}>
        <button className={`${button} ${isActive && active}`}>ClickMe</button>
      </div>
    </>
  )
}