import React, { useState } from "react";

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const deleteExpenseHandler = () => {
    setIsDeleted(true);
    console.log('Deleted');
  };

  if (isDeleted) {
    return null;
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className='expense-item__price'>{props.amount}₹</div>
        <button className='expense-item__delete' onClick={deleteExpenseHandler}>Delete Expense</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;