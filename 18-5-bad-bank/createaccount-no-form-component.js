/*

Three sections of code are needed to create an accout.

State: You’ll need to manage the state of the user’s status, name, email, password, and their overall UserContext.

Fields: Styling of the form fields, what is inside of them as values, and onChange events

Events: You’ll need to have events such as handleCreate (new user), validate, and clearForm.

*/

function CreateAccount() {
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
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

    return(
        <Card
            bgcolor="primary"
            header="Create Account"
            status={status}
            body={show ? (  
              <>
              Name<br/>
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