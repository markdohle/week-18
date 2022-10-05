function Home() {
    
    return(
        <Card
            bgcolor="primary"
            txtcolor="black"
            header="BadBank Landing Module"
            title="Welcome to the bank"
            text="Clear and round dealing is the honor of man's nature."
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />    
    );
}