const digits = [7, 8, 9, 4, 5, 6, 1, 2, 3]
const operators = ['+', '-', '*', '/']
const equals = '='
const clear = 'AC'
const toggle = '+/-'
const percent = '%'
const decimal = '.'
const display = '0'

export default function Home() {
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
      <div className='mx-auto container max-w-lg text-center bg-zinc-300'>
        <div className="grid grid-cols-12">
          <div className='col-span-12'>
            <p className="p-8 text-xl">{display}</p>
          </div>
          </div>
          <div className="grid grid-cols-9">
            { digits.map((digit) => (
              <div className='col-span-3'>
                <button className='btn'>{digit}</button>
              </div>
            )) }
          <div className='col-span-3'>
            <button className='btn'>.</button>
          </div>
          <div className="col-span-3">
            <button className='btn'>0</button>
          </div>
          <div className='col-span-3'>
            <button className='btn'>=</button>
          </div>
        </div>
        <div className="grid grid-cols-1">
          { operators.map((operator) => (
            <div className='col-span-1'>
              <button className='btn'>{operator}</button>
            </div>
          )) }
      </div>
    </div>
    </main>
  )
}
``