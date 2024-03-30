import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionType: transactionTypeOptions[0].optionId,
  }

  onAdd = event => {
    event.preventDefault()
    const {optionType} = this.state
    const v = transactionTypeOptions.find(
      eachItem => eachItem.optionId === optionType,
    )
    const {displayText} = v
    const {titleInput, amountInput} = this.state
    const newObj = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(p => ({
      transactionList: [...p.transactionList, newObj],
      titleInput: '',
      amountInput: '',
      optionType: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({optionType: event.target.value})
  }

  onGetIncome = () => {
    const {transactionList} = this.state
    let income = 0
    transactionList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[0].displayText) {
        income += eachItem.amount
      }
    })
    return income
  }

  onExpense = () => {
    const {transactionList} = this.state
    let expense = 0
    transactionList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[1].displayText) {
        expense += eachItem.amount
      }
    })
    return expense
  }

  onGetBalance = () => {
    const {transactionList} = this.state
    let balance = 0
    let income = 0
    let expense = 0
    transactionList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[0].displayText) {
        income += eachItem.amount
      }
      expense += eachItem.amount
    })
    balance = income - expense
    return balance
  }

  render() {
    const i = this.onGetBalance()
    const o = this.onIncome()
    const p = this.onExpense()
    const {titleInput, amountInput, optionType} = this.state
    return (
      <div>
        <div className="background-image">
          <h1>Hi,Richard</h1>
          <p>
            Welcome back to your <strong>Money Manager</strong>
          </p>
        </div>

        <MoneyDetails balu={i} roy={o} john={p} />

        <form onSubmit={this.onAdd}>
          <h1>Add Transaction</h1>
          <label htmlFor="kick">Title</label>
          <input
            id="kick"
            type="text"
            value={titleInput}
            onChange={this.onChangeTitle}
          />
          <label htmlFor="job">Amount</label>
          <input
            id="job"
            type="text"
            value={amountInput}
            onChange={this.onChangeAmount}
          />
          <select onChange={this.onChangeOption} value={optionType}>
            {transactionTypeOptions.map(eachItem => (
              <option key={eachItem.optionId} value={eachItem.optionId}>
                {eachItem.displayText}
              </option>
            ))}
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
export default MoneyManager


/*import {Component} from 'react'
import {v4} from 'uuid'

//import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const updatedTransactionList = transactionsList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({
      transactionsList: updatedTransactionList,
    })
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: optionId,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })

    return expensesAmount
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })

    return incomeAmount
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, optionId, transactionsList} = this.state
    const i = this.getBalance()
    const o = this.getIncome()
    const p = this.getExpenses()

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="header-container">
            <h1 className="heading">Hi, Richard</h1>
            <p className="header-content">
              Welcome back to your
              <span className="money-manager-text"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails balu={i} roy={o} john={p} />
          <div className="transaction-details">
            <form className="transaction-form" onSubmit={this.onAddTransaction}>
              <h1 className="transaction-header">Add Transaction</h1>
              <label className="input-label" htmlFor="title">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                value={titleInput}
                onChange={this.onChangeTitleInput}
                className="input"
                placeholder="TITLE"
              />
              <label className="input-label" htmlFor="amount">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                className="input"
                value={amountInput}
                onChange={this.onChangeAmountInput}
                placeholder="AMOUNT"
              />
              <label className="input-label" htmlFor="select">
                TYPE
              </label>
              <select
                id="select"
                className="input"
                value={optionId}
                onChange={this.onChangeOptionId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
*/
