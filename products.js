function Products() {
    const ctx = React.useContext(UserContext);
    let [count,setCount] = React.useState(0)
    ctx.users.push(Math.random().toString(36).substr(2, 5));
    return(
        <div>
            <h3>Products</h3>
            {JSON.stringify(ctx.users)}
        </div>
    );
};