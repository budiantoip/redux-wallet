import React from 'react';
import { useSelector } from 'react-redux';

const Wallet = () => {
    const selectBalance = state => state.balance;
    const selectUser = state => state.user;
    const balance = useSelector(selectBalance);
    const user = useSelector(selectUser);

    return (
        <div>
            <h1>{user} Wallet</h1>
            <h2>Balance: Rp {balance.toLocaleString('ID')}</h2>
            <button>Withdraw Rp 10.000</button>
            <button>Deposit Rp 10.000</button>
        </div>
    )
}

export default Wallet
