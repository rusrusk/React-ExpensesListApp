import React, {useState} from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {

  const [enteredYear, setEnteredYear] = useState('2019')

const setExpenseFilterHandler = (expenseFilterPointer) => {
   console.log('Expenses.js')
   setEnteredYear(expenseFilterPointer)
}

const filteredExpenseHandler = props.expense.filter(pickedDate => {
  return pickedDate.date.getFullYear().toString() === enteredYear
})

  return (
    <Card className='expenses'>
      <ExpensesFilter 
      onSetExpenseFilter={setExpenseFilterHandler}
      selected={enteredYear}
      />
       <ExpensesChart 
        expenses={filteredExpenseHandler}
       />
       <ExpensesList 
         expense={filteredExpenseHandler}
       />
    </Card>
   
  )
}


export default Expenses