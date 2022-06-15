import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'


const ExpensesList = (props) => {

const addExpensesList = <h2 className='expenses-list__fallback'>No expenses found!</h2>

if (props.expense.length === 0) {
  return addExpensesList
}

  return (
    <ul className='expenses-list'>
      {props.expense.map(el => (
      <ExpenseItem 
      title={el.title}
      amount={el.amount}
      date={el.date}
      />
    ))}
    </ul>
  )
}


export default ExpensesList