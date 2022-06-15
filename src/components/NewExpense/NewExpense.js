import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

const [isCompleteForm, setCompleteForm] = useState(false)

const saveExpenseDataHandler = (enteredSaveExpenseData) => {
  const expenseData = {
    ...enteredSaveExpenseData,
    id: Math.random().toString()
  }
 props.onAddExpenseHandler(expenseData)
 setCompleteForm(false)
}

const completeFormHandler = () => {
  setCompleteForm(true)
}
const cancelFormHandler = () => {
  setCompleteForm(false)
}

  return (
   <div className='new-expense'>
     {!isCompleteForm && <button onClick={completeFormHandler}>Add New Expense</button>}
    {isCompleteForm && <ExpenseForm 
      onSaveExpenseData={saveExpenseDataHandler}
      onCancelForm={cancelFormHandler}
    />}
   </div>
  )
}


export default NewExpense