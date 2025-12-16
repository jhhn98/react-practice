import { useState } from 'react'
import Decimal from 'decimal.js'
import './index.css'

interface CalculatorState {
  currentNumber: string;
  previousNumber: string;
  operation: string | null;
  isNewNumber: boolean;
}
export default function App() {
  const [state, setState] = useState<CalculatorState>({
    currentNumber: '0',
    previousNumber: '',
    operation: null,
    isNewNumber: true
  })
  const handleClickNumber = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const value = event.currentTarget.value
    if (state.isNewNumber) {
      setState({
        ...state,
        currentNumber: value,
        isNewNumber: false
      })
    } else {
      setState({
        ...state,
        currentNumber: state.currentNumber + value
      })
    }
  }
  const handleClickOperator = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    if (state.currentNumber === '0') return;

    const operator = event.currentTarget.value
    const current = parseFloat(state.currentNumber || '0')
    
    if (state.previousNumber !== '' && state.operation) {
      const prev = parseFloat(state.previousNumber)
      let result = 0
      switch (state.operation) {
        case '+':
          result = new Decimal(prev).plus(current).toNumber()
          break
        case '-':
          result = new Decimal(prev).minus(current).toNumber()
          break
        case '*':
          result = new Decimal(prev).times(current).toNumber()
          break
        case '/':
          result = new Decimal(prev).dividedBy(current).toNumber()
          break
      } 
      if (operator === '=') {
        setState({
          currentNumber: result.toString(),
          previousNumber: '',
          operation: null,
          isNewNumber: true
        })
      } else {
        setState({
          currentNumber: '',
          previousNumber: result.toString(),
          operation: operator,
          isNewNumber: true
        })
      }
    } else if (state.currentNumber !== '' && operator === '=') {
        setState({
          ...state,
          isNewNumber: true
        })
    } else {
      setState({
        currentNumber: '',
        previousNumber: current.toString(),
        operation: operator,
        isNewNumber: true
      })
    }
  }
  const handleClickClear = () => {
    setState({
      currentNumber: '0',
      previousNumber: '',
      operation: null,
      isNewNumber: true
    })
  }
  const handleClickDot = () => {
    setState({
      ...state,
      currentNumber: state.currentNumber + '.',
      isNewNumber: false
    })
  }
  return(
    <article className="calculator">
      <form name="forms">
        <input type="text" name="output" value={state.currentNumber} readOnly/>
        <input type="button" className="clear" value="C" onClick={handleClickClear}/>
        <input type="button" className="operator" value="/" onClick={handleClickOperator}/>
        <input type="button" value="1" onClick={handleClickNumber}/>
        <input type="button" value="2" onClick={handleClickNumber}/>
        <input type="button" value="3" onClick={handleClickNumber}/>
        <input type="button" className="operator" value="*" onClick={handleClickOperator}/>
        <input type="button" value="4" onClick={handleClickNumber}/>
        <input type="button" value="5" onClick={handleClickNumber}/>
        <input type="button" value="6" onClick={handleClickNumber}/>
        <input type="button" className="operator" value="+" onClick={handleClickOperator}/>
        <input type="button" value="7" onClick={handleClickNumber}/>
        <input type="button" value="8" onClick={handleClickNumber}/>
        <input type="button" value="9" onClick={handleClickNumber}/>
        <input type="button" className="operator" value="-" onClick={handleClickOperator}/>
        <input type="button" className="dot" value="." onClick={handleClickDot}/>
        <input type="button" value="0" onClick={handleClickNumber}/>
        <input type="button" className="operator result" value="=" onClick={handleClickOperator}/>
      </form>
    </article>
  )
}