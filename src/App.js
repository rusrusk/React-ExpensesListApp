import React, {useState} from "react";
import "./style.css";
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const initialExpenses = [
  {
    title: 'value',
    amount: 100,
    date: new Date(2022,2,11)
  },
  {
    title: 'process',
    amount: 200,
    date: new Date(2022,3,11)
  },
  {
    title: 'result',
    amount: 300,
    date: new Date(2020,4,11)
  },
  {
    title: 'feedback',
    amount: 400,
    date: new Date(2019,5,11)
  }
]

export default function App() {

  const [isAddExpense, setAddExpense] = useState(initialExpenses)

  const addExpenseHandler = (element) => {
    setAddExpense(prevExpenses => {
      return [element, ...prevExpenses]
    })
  }



  return (
    <div>
      <NewExpense
      onAddExpenseHandler={addExpenseHandler}
      />
     <Expenses 
     expense={isAddExpense}/>
    </div>
  );
}
