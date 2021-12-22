import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState('')
  const [calcType, setCalcType] = useState('prime')

  const onChangeValue = (event) => {
    if (event.target.value < 0) {
      setNumber(1)
    } else if (event.target.value % 1 !== 0) {
      setNumber(Math.round(event.target.value))
    } else {
      setNumber(event.target.value)
    }
  }

  const onChangeCalcType = (event) => {
    setCalcType(event.target.value)
  }

  const isPrime = (num) => {
    if (num <= 1) {
      return false
    }

    for (let i = num - 1; i > 1; i--) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }

  const isFibonacci = (num) => {
    let first = 0
    let second = 1
    let total = 1

    if (num === 0) {
      return true
    }

    while (total < num) {
      total = first + second
      first = second
      second = total
    }

    if (total === num) {
      return true
    }

    return false
  }

  const isPrimeOrFibonacci = () => {
    if (!number && number !== 0) {
      return ''
    }

    if (calcType === 'prime' && isPrime(parseInt(number, 10))) {
      return 'true'
    }

    if (calcType === 'fibonacci' && isFibonacci(parseInt(number, 10))) {
      return 'true'
    }

    return 'false'
  }

  return (
    <div className='app'>
      <aside className='left-sidebar'>
        <input type='number' value={number} onChange={onChangeValue} />
      </aside>
      <main className='main'>
        <select value={calcType} onChange={onChangeCalcType} className={'calc-type'}>
          <option value='prime'>isPrime</option>
          <option value='fibonacci'>isFibonacci</option>
        </select>
      </main>
      <aside className='right-sidebar'>
        <span>{isPrimeOrFibonacci()}</span>
      </aside>
    </div>
  )
}

export default App
