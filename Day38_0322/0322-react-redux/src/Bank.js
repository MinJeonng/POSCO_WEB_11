import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from './store/bankReducer';

export default function Bank() {
  const balance = useSelector((state) => state.account.balance);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');
  const inputRef = useRef(null); //버튼 누르면 input태그로 focus 가게 설정

  const handleDeposit = () => {
    dispatch(deposit(Number(amount)));
    setAmount(''); //버튼 누르면 ''되게 설정
    inputRef.current.focus();
  };

  const handleWithdraw = () => {
    dispatch(withdraw(Number(amount)));
    setAmount('');
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>코딩온 은행</h1>
      <h2>잔액 : {balance}원</h2>
      <input
        ref={inputRef} // 입력 필드에 ref 속성 설정
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDeposit}>예금</button>
      <button onClick={handleWithdraw}>출금</button>
    </div>
  );
}
