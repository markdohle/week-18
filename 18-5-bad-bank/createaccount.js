/*

Three sections of code are needed to create an accout.

State: You’ll need to manage the state of the user’s status, name, email, password, and their overall UserContext.

Fields: Styling of the form fields, what is inside of them as values, and onChange events

Events: You’ll need to have events such as handleCreate (new user), validate, and clearForm.

*/

function CreateAccount(){
  const ctx = React.useContext(UserContext);

  function handle (data){
    ctx.users.push(
      {
        name:data.name,
        email:data.email,
        password:data.password,
        balance:100
      }
    );
    return true;
  }
  
  return(
    <BankForm
      bgcolor="primary"
      label="Create Account"
      handle={handle}
      hideAmount={true}
      successButton="Add another account"
    />
  )
}