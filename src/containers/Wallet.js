import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deposit, selectBalance, selectUser, userAsync, withdraw } from '../reducers/walletSlice';

const Wallet = () => {
    const balance = useSelector(selectBalance);
    const user = useSelector(selectUser);
    const [currentAmount, setCurrentAmount] = useState();
    const [id, setId] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAsync(3));
    }, [])

    return (
        <div>
            <img src={user.avatar} alt='avatar' />
            <h1>{user.first_name} Wallet</h1>
            <input
                type="number"
                value={id}
                placeholder="1 to 12"
                onChange={e => setId(parseInt(e.target.value))}
            />
            <button onClick={() => dispatch(userAsync(id))}>Get User</button>

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
