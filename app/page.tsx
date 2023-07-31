'use client'

import { useState } from 'react'

const digits = [7, 8, 9, 4, 5, 6, 1, 2, 3]
const operators = ['+', '-', '*', '/']
const equals = '='
const clear = 'AC'
const toggle = '+/-'
const percent = '%'
const decimal = '.'
const zero = 0
let calculation = 0

export default function Home() {
  const [display, setDisplay] = useState('0')

  function handleDigit(digit: number) {
    console.log(digit)
  }

  function handleOperator(operator: string) {
    console.log(operator)
  }

  function handleEquals() {
    console.log('=')
  }

  function handleClear() {
    console.log('AC')
  }

  function handleToggle() {
    console.log('+/-')
  }

  function handlePercent() {
    console.log('%')
  }

  function handleDecimal() {
    console.log('.')
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
        <h1 className='text-4xl text-center font-bold py-8 text-zinc-200'>Calculator</h1>
      </div>
      <div className='mx-auto container max-w-lg text-center rounded-md bg-zinc-300 shadow-xl'>
        <div className="grid grid-cols-12">
          {/* display response */}
          <div className='col-span-12'>
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
          <div className="btn-equals col-span-6 rounded-br-md" onClick={() => handleEquals()}>{equals}</div>
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