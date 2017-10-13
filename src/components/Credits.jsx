import React, { Component } from 'react';
import Transaction from './Transaction'

class Credits extends Component {
    render() {
        const creditList = this.props.credits
        const creditComponents = creditList.map((credit, index) => {
            return <Transaction
            description={credit.description}
            amount={credit.amount}
            date={credit.date}
            key={index}
            id={index}
            />
        })
        return (
            <div>
              {creditComponents}  
            </div>
        );
    }
}

export default Credits;