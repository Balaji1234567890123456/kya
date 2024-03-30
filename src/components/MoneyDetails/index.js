// Write your code here
import './index.css'
const MoneyDetails = props => {
  const {balu, roy, john} = props
  return (
    <div className="pol">
      <div className="king">
        <img src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png" />
        <div>
          <p>Your Balance</p>
          <p>Rs {balu}</p>
        </div>
      </div>
      <div className="king">
        <img src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png" />
        <div>
          <p>Your Income</p>
          <p>Rs {roy}</p>
        </div>
      </div>
      <div className="king">
        <img src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png" />
        <div>
          <p>Your Balance</p>
          <p>Rs {john}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
/*import './index.css'

const MoneyDetails = props => {
  const {balu, roy, john} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Balance</p>
          <p className="details-money" data-testid="balanceAmount">
            Rs {balu}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Income</p>
          <p className="details-money" data-testid="incomeAmount">
            Rs {roy}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Expenses</p>
          <p className="details-money" data-testid="expensesAmount">
            Rs {john}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
*/
