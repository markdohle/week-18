const UserContext = React.createContext(null);
const Route      = ReactRouterDOM.Route;
const Link       = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;

function Spa() {
    return(
        <HashRouter>
            <div>
                <h1>Routing - Hello World</h1>
                
                {/* --- navigation bar --- */}
                <Nav/>
                <hr/>
                
                <UserContext.Provider value={{users:['peter']}}>
                    <Route path="/products/"  component={Products}/>
                    <Route path="/about/"     component={About}   />
                    <Route path="/" exact     component={Home}    /> 
                </UserContext.Provider>
            </div>
        </HashRouter>
    );
};

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
);