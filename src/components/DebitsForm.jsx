import React, { Component } from 'react';

class DebitsForm extends Component {
    
    state = {
        newDebit: {}
    }

    handleNewDebitChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = (event.target.value);

        const newDebit = {...this.state.newDebit};
        newDebit[attributeName] = attributeValue;

        this.setState({ newDebit})
    };

    handleNewDebitChangeNumber = (event) => {
        const attributeName = event.target.name;
        const attributeValue = parseFloat(event.target.value);

        const newDebit = {...this.state.newDebit};
        newDebit[attributeName] = attributeValue;

        this.setState({ newDebit})
    };

    addNewDebit = (event) => {
        event.preventDefault();

        this.props.addNewDebit(this.state.newDebit);
    }

    render() {
        return(
            <div>
                <form onSubmit={this._addNewDebit}>
                    <div>
                        <input name="description" placeholder="Description" onChange={this.handleNewDebitChange}/>
                    </div>
                    <div>
                        <input type="number" name="amount" placeholder="Amount" onChange={this.handleNewDebitChangeNumber} step="0.01"/>
                    </div>
                     <div>
                        <input name="date" placeholder="date" onChange={this.handleNewDebitChange} />
                    </div>
                     <div>
                        <input type="submit" value="Add New Debit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default DebitsForm;