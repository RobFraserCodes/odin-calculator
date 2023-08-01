'use client'

import { useState } from 'react'

const digits = [7, 8, 9, 4, 5, 6, 1, 2, 3]
const operators = ['+', '-', '*', '/']
const clear = 'AC'
const toggle = '+/-'
const percent = '%'
const decimal = '.'
const zero = 0

export default function Home() {
  const [display, setDisplay] = useState('0')
  const [currentNumber, setCurrentNumber] = useState('')
  const [previousNumber, setPreviousNumber] = useState('')
  const [operator, setOperator] = useState('')

  function handleDigit(digit: number) {
    setCurrentNumber(currentNumber + digit.toString())
    setDisplay(currentNumber + digit.toString())
  }

  function handleOperator(op: string) {
    if (currentNumber && previousNumber && operator) {
      const result = calculate(parseFloat(previousNumber), parseFloat(currentNumber), operator)
      setPreviousNumber(result.toString())
      setCurrentNumber('')
      setDisplay(result.toString())
      setOperator(op)
    } else if (currentNumber) {
      setPreviousNumber(currentNumber)
      setCurrentNumber('')
      setOperator(op)
    }
  }

  function handleEquals() {
    if (currentNumber && previousNumber && operator) {
      const result = calculate(parseFloat(previousNumber), parseFloat(currentNumber), operator)
      setPreviousNumber('')
      setCurrentNumber(result.toString())
      setDisplay(result.toString())
      setOperator('')
    }
  }

  function handleClear() {
    setCurrentNumber('')
    setPreviousNumber('')
    setOperator('')
    setDisplay('0')
  }

  function handleToggle() {
    if (currentNumber) {
      setCurrentNumber((parseFloat(currentNumber) * -1).toString())
      setDisplay((parseFloat(currentNumber) * -1).toString())
    }
  }

  function handlePercent() {
    if (currentNumber) {
      setCurrentNumber((parseFloat(currentNumber) / 100).toString())
      setDisplay((parseFloat(currentNumber) / 100).toString())
    }
  }

  function handleDecimal() {
    if (currentNumber && !currentNumber.includes('.')) {
      setCurrentNumber(currentNumber + '.')
      setDisplay(currentNumber + '.')
    }
  }

  function calculate(a: number, b: number, operator: string) {
    switch (operator) {
      case '+':
        return a + b
      case '-':
        return a - b
      case '*':
        return a * b
      case '/':
        return a / b
      default:
        return 0
    }
  }

  console.log(previousNumber, operator, currentNumber )

  return (
    <main className='bg-zinc-800 h-screen'>
      <div>
        <h1 className='text-4xl text-center font-bold py-8 text-zinc-200'>Calculator</h1>
      </div>
      <div className='mx-auto container max-w-lg text-center rounded-md bg-zinc-300 shadow-xl'>
        <div className="grid grid-cols-12 relative">
          {/* display response */}
          <div className='col-span-12'>
            <p className="p-2 text-sm font-semibold text-zinc-500 text-right absolute right-0">{previousNumber} {operator} {currentNumber}</p>
            <p className="p-8 text-2xl font-semibold text-zinc-600">{display}</p>
          </div>
          {/* function buttons */}
          <div className='col-span-9'>
            <div className="grid grid-cols-3">
              <button className="btn-function" onClick={handleClear}>{clear}</button>
              <button className="btn-function" onClick={handleToggle}>{toggle}</button>
              <button className="btn-function" onClick={handlePercent}>{percent}</button>
            </div>
          </div>
          {/* operators */}
          <div className='col-span-3 bg-orange-400 h-16'>
            {operators.map((operator) => (
              <button key={operator} className="btn-operator" onClick={() => handleOperator(operator)}>{operator}</button>
            ))}
          </div>
          {/* digits */}
          <div className='col-span-9'>
            <div className="grid grid-cols-3">
              {digits.map((digit) => (
                <button key={digit} className="btn" onClick={() => handleDigit(digit)}>{digit}</button>
              ))}
            </div>
          </div>
          {/* equals */}
        </div>
        <div className="grid grid-cols-12 items-center">
          <div className="btn-equals col-span-3 rounded-bl-md" onClick={handleDecimal}>{decimal}</div>
          <div className="btn-equals col-span-3" onClick={() => handleDigit(0)}>{zero}</div>
          <div className="btn-equals col-span-6 rounded-br-md" onClick={() => handleEquals()}>=</div>
        </div>
      </div>
      <footer className='text-center font-thin pt-16 text-zinc-100'>
        <p>Created by <a href="www.robfraser.dev"><span className='font-semibold'>Rob Fraser</span> </a>
        as part of the <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/rock-paper-scissors"><span className='font-semibold'>Odin Project</span></a>
        </p>
      </footer>
    </main>
  )
}