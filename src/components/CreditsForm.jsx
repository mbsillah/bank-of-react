import React, { Component } from 'react';

class CreditsForm extends Component {
    handleNewCreditChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = (event.target.value);

        const newCredit = {...this.state.newCredit};
        newCredit[attributeName] = attributeValue;

        this.setState({ newCredit})
    };

    handleNewCreditChangeNumber = (event) => {
        const attributeName = event.target.name;
        const attributeValue = parseFloat(event.target.value);

        const newCredit = {...this.state.newCredit};
        newCredit[attributeName] = attributeValue;

        this.setState({ newCredit})
    };

    addNewCredit = (event) => {
        event.preventDefault();

        this.props.addNewCredit(this.state.newCredit);
    }

    render() {
        return(
            <div>
                <form onSubmit={this._addNewCredit}>
                    <div>
                        <input name="description" placeholder="Description" onChange={this.handleNewCreditChange}/>
                    </div>
                    <div>
                        <input type="number" name="amount" placeholder="Amount" onChange={this.handleNewCreditChangeNumber} step="0.01"/>
                    </div>
                     <div>
                        <input name="date" placeholder="date" onChange={this.handleNewCreditChange} />
                    </div>
                     <div>
                        <input type="submit" value="Add New Credit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreditsForm;