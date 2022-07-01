import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Wallet = () => {
    const selectBalance = state => state.balance;
    const selectUser = state => state.user;
    const balance = useSelector(selectBalance);
    const user = useSelector(selectUser);

    const [currentAmount, setCurrentAmount] = useState();

    const dispatch = useDispatch()

    const withdraw = (amount) => {
        dispatch({ type: 'withdraw', amount });
    }

    const deposit = (amount) => {
        dispatch({ type: 'deposit', amount });
    }

    return (
        <div>
            <h1>{user} Wallet</h1>
            <h2>Balance: Rp {balance.toLocaleString("ID")}</h2>
            <button onClick={() => withdraw(10000)}>Withdraw Rp 10.000</button>
            <button onClick={() => deposit(10000)}>Deposit Rp 10.000</button>
            <br /><br />
            <input
                type="number"
                value={currentAmount}
                onChange={e => setCurrentAmount(parseInt(e.target.value))}
            />
            <button onClick={() => withdraw(currentAmount)}>Withdraw</button>
            <button onClick={() => deposit(currentAmount)}>Deposit</button>
        </div>
    )
}

export default Wallet
