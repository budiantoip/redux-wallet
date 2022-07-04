import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deposit, selectBalance, selectUser, withdraw } from '../reducers/walletSlice';

const Wallet = () => {
    const balance = useSelector(selectBalance);
    const user = useSelector(selectUser);
    const [currentAmount, setCurrentAmount] = useState();
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{user} Wallet</h1>
            <h2>Balance: Rp {balance.toLocaleString("ID")}</h2>
            <button onClick={() => dispatch(withdraw(10000))}>Withdraw Rp 10.000</button>
            <button onClick={() => dispatch(deposit(10000))}>Deposit Rp 10.000</button>
            <br /><br />
            <input
                type="number"
                value={currentAmount}
                onChange={e => setCurrentAmount(parseInt(e.target.value))}
            />
            <button onClick={() => dispatch(withdraw(currentAmount))}>Withdraw</button>
            <button onClick={() => dispatch(deposit(currentAmount))}>Deposit</button>
        </div>
    )
}

export default Wallet
