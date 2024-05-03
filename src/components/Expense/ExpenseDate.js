import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString('zh-CN', { month: 'long' });
  const day = date.getDate();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}년 </div>
      <div className="expense-date__day">{day}일</div>
    </div>
  );
};

export default ExpenseDate;
