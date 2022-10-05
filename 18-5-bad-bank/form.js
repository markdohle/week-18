function BankForm() {
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [balance, setBalance]   = React.useState('');
    const [hideAmount, setHideAmount] = React.useState('');
    const ctx = React.useContext(UserContext);

    function handleCreate(){
        console.log(name,email,password);
        if (!validate(name,     'name'))     return;
        if (!validate(email,    'email'))    return;
        if (!validate(password, 'password')) return;
        ctx.users.push({name,email,password,balance:100});
        setShow(false);
    };
    
    function clearForm() {
        setShow(true);
        setName("");
        setEmail("");
        setPassword("");
    };

    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
          }
            return true;
    }
/* Failed attempt at creating other cards for deposite, balance and withdrawl. Try creating multiple form components.
    function handleBalance() {
        if (path === "/balance/" || path === "/depsoite/" || path === "/withdrawl/") {
            setHideAmount(true)
            if(!deposite) {
                setBalance(balance - withdrawl)
            } else {
                setBalance(balance + deposite)
            }
        } else {
            setHideAmount(false)
        }

        }
    }
*/
    return(
        <Card 
            bgcolor="primary"
            header="Create Account"
            status={status}
            body={show ? (  
              <>
              Person 1<br/>
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={e => setName(e.currentTarget.value)}
                />
                <br/>
              Email address<br/>
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
                />
                <br/>
              Password<br/>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={e => setPassword(e.currentTarget.value)}
                />
                <br/>
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleCreate}
                >Create Account
              </button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
                >Add another account
              </button>
              </>
            )}
        />
    );
}