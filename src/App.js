import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import AccountBalance from './components/AccountBalance'
import UserProfile from './components/UserProfile'
import axios from 'axios'
import Debits from './components/Debits'
import Credits from './components/Credits'


class App extends Component {
  state = {
    accountBalance: 0,
    userName: 'John Doe',
    memberSince: 2011,
    debits: [],
    credits: []
  }


  componentWillMount = () => {
    this.getUserDebits();
    this.getUserCredits();
  }


  getUserDebits = () => {
    axios.get("http://localhost:4000/debits")
      .then((response) => {
        const debits = response.data
        this.setState({ debits })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  getUserCredits = () => {
    axios.get("http://localhost:4000/credits")
      .then((response) => {
        const credits = response.data
        this.setState({ credits })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  calculateAccountBalance = () => {
    const credits = this.state.credits
    const totalCredits = credits.reduce((totalCredits, credit) => {
      return totalCredits + credit.amount;
    }, 0)
    const debits = this.state.debits;
    const totalDebits = debits.reduce((totalDebits, debit) => {
      return totalDebits + debit.amount;
    }, 0)
    return totalCredits - totalDebits
  }

  addNewDebit = (newDebit) => {
    const debits = [...this.state.debits];
    debits.push(newDebit);
    this.setState({debits});
  }
 
  addNewCredit = (newCredit) => {
    const credits = [...this.state.credits];
    credits.push(newCredit);
    this.setState({credits});
  }
 

  render() {

    const accountBalance = this.calculateAccountBalance

    const AccountBalanceWrapper = () => {
      return (<AccountBalance 
              accountBalance={this.accountBalance} 
              getUserDebits={this.getUserDebits} 
              getUserCredits={this.getUserCredits} />)
    }

    const UserProfileWrapper = () => {
      return (<UserProfile 
              userName={this.state.userName} 
              memberSince={this.state.memberSince} />)
    }

    const DebitsWrapper = () => {
      return (<Debits
              accountBalance={accountBalance}
              debits={this.state.debits}
              addNewDebit={this.addNewDebit}/>)
    }

    const CreditsWrapper = () => {
      return (<Credits
              credits={this.state.credits}
              addNewCredit={this.addNewCredit}/>)
    }

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" render={AccountBalanceWrapper} />
          <Route exact path="/user" render={UserProfileWrapper} />
          <Route exact path="/debits" render={DebitsWrapper} />
          <Route exact path="/credits" render={CreditsWrapper} />
        </Switch>
      </Router>
    );
  }
}


export default App;
