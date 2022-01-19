import React , {useState , useEffect}from "react";

const AccountBalance = () => {
    const [balance,setBalance] = useState(1500);
    const [savingsBalance, setSavingsBalance] = useState(1245);
    const [notification,setNotification] = useState(false)
    const handleSpending = () => {
        if(balance > 1000){
        setBalance(balance-100);
        setSavingsBalance(savingsBalance+100)
        }
    }

    const savingsHandleSpending = () =>{
        setSavingsBalance(savingsBalance-100);
        setBalance(balance+100)
    }

    useEffect(() => {
        if(balance <= 1000){
            setNotification(true);
        }
    }, [balance])

    return(
        <div className="columns">
            <div className="column">
                <div className="box">
                    <h4 className="title is-4"> Your Account Balance: </h4>
                    <div className="amount"> {balance}$ </div>
                    <button className="button is-info"
                    onClick={() => handleSpending()}
                    >
                        Send 100$
                    </button>
                </div>
            </div>
            <div className="column">
                <div className="box">
                    <h4 className="title is-4"> Your Savings Balance:</h4>
                    <div className="amount savings"> {savingsBalance}$ </div>
                    <button className="button is-info"
                    onClick={() => savingsHandleSpending()}
                    >
                        Send 100$
                    </button>
                </div>
            </div>
            {notification && (
                 <div className="notification is-danger">
                 <button 
                 onClick={() => setNotification(false)} className="delete"
                 > </button>
                  <p>Your account balance is too low.</p>
                 <p>You can't transfer more money today.</p>
             </div>
            )}
           
        </div>
    )
}

export default AccountBalance;