import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AccountBalance extends Component {
    render() {
        return (
            <div>
                <h1>Account Balance</h1>
                <p>Your balance is: {this.props.accountBalance}</p>
                <Link to="/">Home</Link>
                <button onClick={this.props.getUserDebits}>Debits</button>
                <button onClick={this.props.getUserCredits}>Credits</button>
            </div>
        );
    }
}

export default AccountBalance