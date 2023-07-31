'use client'

import { useState } from 'react'

const digits = [7, 8, 9, 4, 5, 6, 1, 2, 3]
const operators = ['+', '-', '*', '/']
const equals = '='
const clear = 'AC'
const toggle = '+/-'
const percent = '%'
const decimal = '.'
const display = '0'
const zero = '0'

export default function Home() {
  const [display, setDisplay] = useState('0');
  const [previous, setPrevious] = useState(null);
  const [operator, setOperator] = useState(null);

  function handleDigit(digit: number) {
    if (display === '0') {
      setDisplay(String(digit))
    } else {
      setDisplay(display + digit);
    }
  }

  function handleOperator(nextOperator: string) {
    if (operator !== null) {
      handleEquals();
    }
    setPrevious(display);
    setOperator(nextOperator);
    setDisplay('0');
  }

  function handleEquals() {
    if (previous !== null && operator !== null) {
      const result = calculate(parseFloat(previous), parseFloat(display), operator);
      setDisplay(String(result));
      setPrevious(null);
      setOperator(null);
    }
  }

  function add(a: number, b: number) {
    return a + b
  }
  function subtract(a: number, b: number) {
    return a - b
  }
  function multiply(a: number, b: number) {
    return a * b
  }
  function divide(a: number, b: number) {
    return a / b
  }
  function calculate(a: number, b: number, operator: string) {
    switch (operator) {
      case '+':
        return add(a, b)
      case '-':
        return subtract(a, b)
      case '*':
        return multiply(a, b)
      case '/':
        return divide(a, b)
      default:
        return 0
    }
  }

  return (
    <main className='bg-zinc-800 h-screen'>
      <div>
        <h1 className='text-4xl text-center font-bold py-8 text-zinc-200'>The Odin Project: Calculator</h1>
      </div>
      <div className='mx-auto container max-w-lg text-center rounded-md bg-zinc-300'>
        <div className="grid grid-cols-12">
          {/* display response */}
          <div className='col-span-12'>
            <p className="p-8 text-2xl font-semibold">{display}</p>
          </div>
          {/* function buttons */}
          <div className='col-span-9'>
            <div className="grid grid-cols-3">
              <button className="btn-function">{clear}</button>
              <button className="btn-function">{toggle}</button>
              <button className="btn-function">{percent}</button>
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
          <div className="btn-equals col-span-3 rounded-bl-md">{decimal}</div>
          <div className="btn-equals col-span-3" onClick={() => handleDigit(0)}>{zero}</div>
          <div className="btn-equals col-span-6 rounded-br-md" onClick={() => handleEquals}>{equals}</div>
        </div>
      </div>
      <footer className='text-center font-thin mt-16 text-zinc-100'>
        <p>Created by <a href="www.robfraser.dev"><span className='font-semibold'>Rob Fraser</span> </a>
        as part of the <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/rock-paper-scissors"><span className='font-semibold'>Odin Project</span></a>
        </p>
      </footer>
    </main>
  )
}