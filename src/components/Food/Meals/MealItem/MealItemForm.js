import React, { useState } from 'react';
import styles from './MealItemForm.module.scss';
import Input from '../../../UI/Input/Input';

const MealItemForm = (props) => {
  // 수량의 상태를 관리하는 변수
  const [amount, setAmount] = useState(0);

  // 수량이 변경될 때마다 발동하는 함수
  const amountHandler = (amt) => {
    // console.log('선택된 수량: ', amt);
    setAmount(amt);
  };

  // 담기 버튼을 누르면 발동하는 함수
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <Input
        onAdd={amountHandler}
        label="수량"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>담기</button>
    </form>
  );
};

export default MealItemForm;
