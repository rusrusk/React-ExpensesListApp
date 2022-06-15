import React, {useState} from 'react'
import './ExpenseForm.css'


const ExpenseForm = (props) => {

  const [isTitle, setIsTitle] = useState('')
  const [isAmount, setIsAmount] = useState('')
  const [isDate, setIsDate] = useState('')

const setTitleHandler = (e) => {
  setIsTitle(e.target.value)
}
const setAmountHandler = (e) => {
  setIsAmount(e.target.value)
}
const setDateHandler = (e) => {
  setIsDate(e.target.value)
}

const submitHandler = (e) => {
  e.preventDefault()

  const expenseData = 
    {
      title: isTitle,
      amount: +isAmount,
      date: new Date(isDate)
    }
  
  props.onSaveExpenseData(expenseData)
  setIsTitle('')
  setIsAmount('')
  setIsDate('')
} 

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
          type="text"
          onChange={setTitleHandler}
          value={isTitle}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input 
          type="number"
          min='0.01'
          step='0.01'
          onChange={setAmountHandler}
          value={isAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input 
          type="date"
          min='2019-01-01'
          max='2022-12-31'
          onChange={setDateHandler}
          value={isDate}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancelForm}>Cancel</button>
        <button type='submit'>Add</button>
      </div>
    </form>
  )
}



export default ExpenseForm