import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
import Hello from './Hello';


function App() {

  //지출 항목 객체 배열

  const expenses = [
    {
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3 - 1, 23),
    },
    {
      title: 'BBQ치킨',
      price: 20000,
      date: new Date(2023, 5 - 1, 21),
    },
    {
      title: '도미노피자',
      price: 35000,
      date: new Date(2023, 7 - 1, 4),
    },
  ];

  return (
    <>
      {/* <ExpenseItem title='피자헛' price='15000' date='2024년 04월 15일' />
      <ExpenseItem title='bbq치킨' price='20000' date='2024년 04월 05일' />
      <ExpenseItem title='짜장면' price='8000' date='2024년 04월 25일' /> */}

      <Expenses items={expenses}/>
      <Hello>
        <ul>
          <li>핑궈</li>
          <li>푸타오</li>
          <li>타오쯔</li>
        </ul>
      </Hello>
      
    </>
  );
}

export default App;
