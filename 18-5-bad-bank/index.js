function Spa() {
    return(
        <>
        <HashRouter>
            <h1></h1>
            <NavBar/>
                <UserContext.Provider value={
                    {
                        users:[
                        {
                            name:'abel',
                            email:'abel@mit.edu',
                            password:'secret',
                            balance:100
                        }
                        ]
                    }
                }>
                    <Route path="/" exact           component={Home}            /> 
                    <Route path="/alldata/"         component={AllData}         />
                    <Route path="/balance/"         component={Balance}         />
                    <Route path="/createaccount/"   component={CreateAccount}   />
                    <Route path="/deposite/"        component={Deposite}        />
                    <Route path="/login/"           component={Login}           />
                    <Route path="/withdrawl/"       component={Withdrawl}       />
                </UserContext.Provider>
        </HashRouter>
        </>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
 )