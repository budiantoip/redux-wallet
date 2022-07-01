import React from 'react';
import { useSelector } from 'react-redux';

const Wallet = () => {
    const selectBalance = state => state.balance;
    const balance = useSelector(selectBalance);
    
    return (
        <div>
            <h1>My Wallet</h1>
            <h2>Balance: Rp {balance.toLocaleString('ID')}</h2>
            <button>Withdraw Rp 10.000</button>
            <button>Deposit Rp 10.000</button>
        </div>
    )
}

export default Wallet
