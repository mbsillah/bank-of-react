import React, { Component } from 'react';
import Transaction from './Transaction'
import DebitsForm from './DebitsForm'

class Debits extends Component {
    render() {
        const accountBalance = this.props.accountBalance;
        const debitList = this.props.debits;
        const debitComponents = debitList.map((debit, index) => {
            return <Transaction
                description={debit.description}
                amount={debit.amount}
                date={debit.date}
                key={index}
                id={index}
            />
        })
        return (
            <div>
            {debitComponents}
            </div>
        );
    }
}

export default Debits;