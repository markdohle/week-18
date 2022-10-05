function Withdrawl() {
    const ctx = React.useContext(UserContext);
    return(
        <>
            <h1>Withdrawl<br/>
                {JSON.stringify(ctx)}
            </h1>
        </>
    );
}