import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Wallet = () => {
    const selectBalance = state => state.balance;
    const selectUser = state => state.user;
    const balance = useSelector(selectBalance);
    const user = useSelector(selectUser);

    const dispatch = useDispatch()

    const withdraw = () => {
        dispatch({type: 'withdraw'});
    }
    
    const deposit = () => {
        dispatch({type: 'deposit'});
    }

    return (
        <div>
            <h1>{user} Wallet</h1>
            <h2>Balance: Rp {balance.toLocaleString('ID')}</h2>
            <button onClick={withdraw}>Withdraw Rp 10.000</button>
            <button onClick={deposit}>Deposit Rp 10.000</button>
        </div>
    )
}

export default Wallet
