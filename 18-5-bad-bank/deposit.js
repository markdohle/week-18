const Deposite = ({ onChange, isDeposit, isValid }) => {
    const [show, setShow]           = React.useState(true);
    const [deposite, setDeposite]   = React.useState('');
    const [balance, setBalance]     = React.useState(100);

    function handleDeposite(){
        
        console.log(balance);
        if (!validate(balance))    return;

        ctx.users.push({balance});
        setShow(false);
    };
    
    function clearForm() {
        setShow(true);
        setDeposite('')
    };

    function validate(amount) {
        if (amount <= 0) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
          }
            return true;
    }

    function handleBalance(e) {
        const newBalance = e.currentTarget.value + balance
        setBalance(newBalance)
    }

    return(
        <Card
            bgcolor="primary"
            header="Create Account"
            status={status}
            body={show ? (  
              <>
              Balance {balance}<br/>
              <input
                type="input"
                className="form-control"
                id="deposit"
                placeholder="Depsosit Amount"
                value={deposite}
                onChange={handleBalance}
                />
                <br/>
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleDeposite}
                >Deposit
              </button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
                >Deposit More
              </button>
              </>
            )}
        />
    );
  };