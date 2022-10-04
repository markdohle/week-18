# week-18
MIT xPro - Week 18 - Bad Bank Exercise

In Module 18: Bad Bank Exercise, you’ll learn how to build the front end of a banking application using React. You’ll get the opportunity to make decisions about routing, context, styles, parent–child components, tracking state, forms, and handling events. You’ll start the module by learning about a growth mindset, which can help you frame the challenges you encounter as learning opportunities.

1. Identify three ways you can learn from bugs that you encounter
2. Document your approach to troubleshooting one bug
3. Identify an example of context
4. Define routing and context
5. Identify the architecture of a single-page application
6. Build a React application
7. Explain the technical decisions you made

[Context](https://reactjs.org/docs/context.html)

[How To Fix Bugs](https://betterprogramming.pub/how-to-fix-bugs-b3ae3044bc78)

[Best Engineering Practices: How To Fix A Bug?](https://dev.to/wemake-services/best-engineering-practices-how-to-fix-a-bug-58g5)

[StackOverflow Questions Tagged React](https://stackoverflow.com/questions/tagged/reactjs)

[Replacing Redux With React Hooks And Context](https://medium.com/octopus-labs-london/replacing-redux-with-react-hooks-and-context-part-1-11b72ffdb533)

## My Bugs

What is an API? How do I switch to a new API that works with React 18? Does it matter?

```
react_devtools_backend.js:4026 Warning: ReactDOM.render is no longer supported in React 18.
Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17.
Learn more: https://reactjs.org/link/switch-to-createroot
```

Does the order of the script files referenced in the .html file matter? I get this error when the navbar.js is listed below the index.js. _F*****g annoying_, emphasis added because it keeps happening and I need to remember this.

```Uncaught ReferenceError: NavBar is not defined```

Follow the instructions below to iterate through the basics of routing, context, styles, parent–child components, tracking state, forms, and handling events. The instructions are meant to be followed in order, however the lessons build upon each other. Video's further down the list reference video's from earlier in the list. The idea is that you move two steps forward and one step back as you solve the problems from a slightly different angle. There might be mistakes in the code provided in the instructions, but this is always the case. You can figure it out by looking at the error messages in the console and making changes and re-reading the instructions.

### Video 18.1

How do I provide a memory context for all of our screens? How do I set the context?

How do I style my application?

How do I create the Navigation Bar?

How do I handle routing?

How do I build create account?

What are my design priciples? Encapsulation and modularity

### Video 18.2: Routing Basics

Routing is a core component of building sites. It makes navigation faster, almost instant.

What is information architecture? This is the file structure.
1. index.html (title, babel transpiler, with element to target, libraries for react and router, and .js files)
2. index.js (define routing, Spa component)
3. home.js (component loaded through the Navigation Bar)
4. about.js (component loaded through the Navigation Bar)
5. products.js (component loaded through the Navigation Bar)

What is an Single-Page-Application(SPA)? Routing handled locally. Very close to how a desktop application works.

How do I build a router? Several .js files comunicate with each other and with a master index.js and an index.html.

How do I build a Navigation Bar?

How do I load components?

1. Spa component. Single-Page-Application(SPA) in the index.js
  ```
  const Route      = ReactRouterDOM.Route;
  const Link       = ReactRouterDOM.Link;
  const HashRouter = ReactRouterDOM.HashRouter;
  ```
Add return tags: HashRouter and define the path for links to all the child components. Include a horizontal rule to separate content at the top of the page from where the components are loaded. Map the path for each component. Use ```--```to separate the links when there are no styles defined. Finally, load the Spa component into root so that it lands in the html.

Why does the Home component stay when I click on the about link? It has to do with the path being defined with "exact".
  ```
  <HashRouter>
  <div>
    <h1>Routing - Hello World</h1>
    <Link to="/">Home             </Link> --
    <Link to="/about/">About      </Link> --
    <Link to="/products">Products </Link>
    <hr/>
    <Route path="/" exact     component={Home}    /> 
    <Route path="/about/"     component={About}   />
    <Route path="/products/"  component={Products}/>
   </div>
   </HashRouter>
   ```
   ```
   ReactDOM.render(
      <Spa/>,
      document.getElementById('root')
   )
   ```
2. Home component. Return a div with a header only to see that is works.
3. About component. Return a div with a header only to see that is works.
4. Products component. Return a div with a header only to see that is works.
5. index.html.

Why does the order of the script component files matter? If the index.js is listed last, then no error. Otherwise, the index.js not last and there is an error. If you paste the files in the order below, then you get the error.

```Uncaught ReferenceError: Home is not defined```

```
    <!-- Load react components in the body-->
    <script src="products.js" defer type="text/babel"></script>
    <script src="index.js" defer type="text/babel"></script>
    <script src="home.js" defer type="text/babel"></script>
    <script src="about.js" defer type="text/babel"></script>
```
```
<!-- Load React Libraries in the body. Not for production -->
    <script src="https://unpkg.com/react/umd/react.development.js"                      crossorigin></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"              crossorigin></script>
    <script src="https://unpkg.com/react-router@5.2.1/umd/react-router.min.js"          crossorigin></script>
    <script src="https://unpkg.com/react-router-dom@5.2.1/umd/react-router-dom.min.js"  crossorigin></script>
```
```
<!-- Load Babel in the head-->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

### Video 18.3 Context Basics

Context allows you to share values by making the data global to the application. This means you don't have to pass data through each level of the component tree. It makes component reuse more difficult, so it is not always the best choice. It should only be used when data needs to be used by many components at different nested levels.

Extend the functionality of the SPA by adding a shared context for all the components with the index.js file.

Shared Context: Variable in the index.js that is shared by the other child components.

1. UserContext variable. Variable needs an initial condition and tag returned by the Spa() component.

```React.createContext(null);```

The tag will initialize a value of a simple object that holds information accessed from the child components. The users['peter'] is an object that holds a list of users. It is initialized with peter. The tag will wrap the routes.

```
    <UserContext.Provider value={{users:['peter']}}>
      
      <!--Enter Routes Here-->
   
    </UserContext.Provier>
```
2. Access the context from child components(Home,About,Products). Create a variable(ctx) within the body of the functional component useing react to handle the shared context from index.js. The variable is an object.

```React.useContext(UserContext);```

Inside the div tag, return a string of the variable that handles the shared context. Reference the users.

```{JSON.stringify(ctx.users)}```

3. Add users to the shared context. Everytime the Products component is loaded, a user is added to the context. Push users into the variable that handles the shared context and creates a random string. Inside the div tag, return a string of the variable that handles the shared context. Reference the users. Everytime Products link is clicked, a new user is added to all the child components that reference the shared context.

```ctx.users.push(Math.random().toString(36).substr(2, 5));```

4. How do you add a counter to track clicks on a link? I tried useState, but received errors. This is unresolved for now. Come back to it later.

### Video 18.4 - Style Basics

Style the Navigation link. Add Bootsrap, which is a reference to a script in index.html. Use bootstrap in the Nav component. This will replace the Navbar script in index.js.

1. Add Bootstrap to html head.

```
<!-- bootstrap css -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    />
```
2. Add nav.js script to the html body. 

```<script src="nav.js" defer type="text/babel"></script>```

3. Goto Bootstrap "Navs" to copy your navbar script. Then change class to className because class a reserved keyword. The className property sets or returns an element's class attribute.(w3) The className property of the Element interface gets and sets the value of the class attribute of the specified element.(MDN)

1. Write a function for the component ```Nav``` and return tags. Start with the unordered list and add list items with the links to all the components. Take advantage of the react Link variable that you created in the Spa component.

```
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
```

Change ```class``` to ```className```

Change ```<a class="nav-link active" href="#">Active</a>``` to ```<Link className="nav-link" to="/">Home</Link>```

2. Replace the Links inside index.js with the Nav component. Is this refactoring?

```
{/* --- navigation bar --- */}
<Nav/>
```
3. The Spa component uses Link as a local variable. It is not available to the Nav component. Move the variables from inside the Spa function to outside of it in order make them globally accesable.

### Video 18.5 - Bad Bank Exercise Overview

In this video, detailed steps for creating an application called Bad Bank are covered. You will get the chance to practice and handle decisions related to routing, context, styles, components (including parent–child components), state, forms, and events.

The application is designed with a container to hold the Nav bar component and the Home component. The components are styled for a pleasant user interface.

1. Routing
2. Context - How do decide when to use context?
3. Styles - Bootstrap
4. Comonents - Home, Create Accouint, Login, Deposit, Withdraw, Balance, All Data
5. Parent-Child Components
6. State - How do you choose where to keep state?
7. Forms
8. Handling events

Create a path useing routing to navigate.

Architecture with a global context.js that feeds the index.js and is shared by all child components. Then create a navbar.js that also feeds the index.js. The index.js then feeds each of the child components that each have their own .js file. Routing is used load and unload all the components including the navbar. The shared context is the state that is shared between the index.js and the child components, excluding the navbar.

### Video 18.6 - Create Bad Bank Application Files

Build one peice at a time, verify and then move forward. Create the files based on the architecture provide in Video 18.5 above. Define the 10 script files to be loaded in index.html.

1. Create the index.html

Reference video 18.2 above to add the following:

Add title = Bad Bank

Add the transpiler.

Add the div to hold the react component id="root".

Add the libraries for the router.

Add script references for the 10 script files that will be created next.

2. Goto the terminal to quickly create the script files.

```touch context.js``` do this for the 9 script files.

Video 18.7 - Band Bank Navigation Bar

1. Create the navbar fuctional component with return tags. Wrap the paths in fragment, which is an empty tag. Why do I need to use the fragment this time, but not in Video 18.2 exercise?

```
<>
</>
```

2. Enter the links. Why is this different than the links created in (Video 18-2, 1. Spa Component)?
```
    <a href="#"                 > Home            </a>,
    <a href="#/createaccount/"  > Create Account  </a>,
    <a href="#/login/"          > Login           </a>,
    <a href="#/deposite/"       > Deposit         </a>,
    <a href="#/withdrawl/"      > Withdraw        </a>,
    <a href="#/balance/"        > Balance         </a>,
    <a href="#/alldata/"        > All Data        </a>
 ```
 
 3. Write the parent component(Spa) in index.js. We are going to write our .jsx. Why is the file still a .js file? Wrap the paths in fragment, which is an empty tag as done in step 1 above. Add a header so we can verify that the page loads. Add a the NavBar component in the same as was performed in (Video 18.4, step 2). Finally, render the Spa component to the DOM in the same way as was done in (Video 18.2, step 1).
 
### Video 18.8 - Band Bank Routing

Add the routing components to context.js. Leverage the components in index.js by defining the routing paths and mapping to the components.

1. Define the router components in context.js(Reference Video 18.2, step 2). The router components get their logic from the routing library that is already defined in the .html.

2. Return the router components in the Spa component. Wrap the NavBar inside the HashRouter component tag(Reference Video 18.2, step 1) and note that the links have been refactored and defined in the Navbar component.

3. Add the Rout paths inside the HashRouter tag. The default Route path is ```exact``` and points to the home component. Reference Video 18.2, step 1 for syntax. Add the rest of the NavBar Route path components without ```exact```.

4. Create the components that are routed to the NavBar. Return the h1 tag. This is to verify that the NavBar and routing works. Don't forget to wrap in a fragment as shown in 18.7, step 1.

### Video 18.9 - Bad Bank Context

Within context.js, add context to be shared with your components. Then, within index.js, create your context provider tag which will take an initial value. Remember, the context comes with a provider that takes value and that value is passed to the other components.

1. Add a UserContext component to context.js. The logic is provided by the react library which was previously added to the .html. Context object comes with a provider. What is a provider? The value is passed to consuming components. The initial value = null. The syntax is provided in Video 18.3, step 1.

2. Add the tag for the UserContext component to index.js. Wrap the routes inside the UserContent component as shown in Video 18.3, step 1. Add the value as an expression{} and paste an object iside the expression. The object is provided below.

      Object property = users

      Object value = an ararry with one object with a bank user with 4 properties. These properties can be updated.

```
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
```

3. Access the shared content by each of the child components. Create the local variable to capture the context as shown in Video 18.3, step 2. Add the context to the return inside the h1 tag with a line break ```<br/>``` to separate the text of the context from the header text. Why is the JSON.stringify accessing ```ctx``` instead of ```ctx.users``` as shown in Video 18.3, step 2?

###Video 18.10 - Bad Bank - Styling the Navigation Bar

Use Boostrap for as an easy way to add styling.

1. Add Bootstrap style sheet to the index.html(Reference Video 18.4). Replace unstyled lists. The result is global styles that are available to all the components in the application. The code copied from Bootstrap has to be modified to work with the components. Also, wrap the links in an unordered list instead of the div. 

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home 
        <span class="sr-only">(current)</span>
      </a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>
```
```
<ul className="navbar-nav">
  <li className="nav-item">
    <a className="nav-link" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#/createaccount/">Create Accout</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#/login/">Login</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#/deposite/">Deposit</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#/withdrawl/">Withdraw</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#/balance/">Balance</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#/alldata/">All Data</a>
  </li>
  </ul>
```

###Video 18.11 - Bad Bank Stayling the Bootstrap Card

Add the Card component to content.js. Use the Bootstrap component called Card and conditional rendering. Instead of each card in the application being its own custom implementation, different parts of an application can reference an already made card component and customize the content inside with specific properties.

[Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)

Use [Bootstrap colors](https://getbootstrap.com/docs/4.0/utilities/colors/) for the background.

Create a Card component that takes the (props) parameter. 

1. Return the tags for the card. Get the .html syntax from Bootstrap. Change class to className.

    Wrap the card with a div with 2 Expressions. Call classes() function which will be defined in the Card component. Set the style with a maxWidth of "18rem" useing an object. What is "rem"?
    
    Add card-header div. card-header has a property of the header that shows in the DOM. Each component that uses this card can pass this in through its header property.
    
    Add card-body div. card-body has several properties that show in the DOM; title, text, body, status. Use conditional return syntax to for their existance, otherwise don't show anything in the DOM. Reference the link above to understand how to use return coditionals. Each component that uses this card can pass this in through its header property.
    
    title is text provided in the component that uses the card.
    
    text is text provided in the component that uses the card.
    
    body is where each component adds the body of their content, which is an image in this case.
    
    status is used to notify and update the user interface when actions are taken.
    
    ```
    <div className={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>    
    ```
2. Create the classes() function that is called and used by the card return tag. Check to see if the background color is set. If set, then choose it, other default with empty. Do the same with text, except the default is white. Return the background and text as the output.

```
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
```
3. Add the card to the components. Remove the testing syntax and replace it with the card.

    Add the Card component tag with attaributes that are passed in as props. Use double quotes to wrap the attributes because that is the standard. The attributes are; bgcolor, textcolor, header, title, text, body,
    
    The body is an expression to present an image(<IMG). The IMG tag has an alt attribute to difine an alternate image as a default. The className is taken from Bootstrap for styling.
    
```
        <Card
            bgcolor="primary"
            txtcolor="black"
            header="BadBank Landing Module"
            title="Welcome to the bank"
            text="Clear and round dealing is the honor of man's nature."
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />  
```

### Video 18.12 - Bad Bank - Create Account

Create an interactive form that captures user information to create a new account in the Bad Bank Application. This form should allow user inputs in the appropriate fields, validate the inputs, and store them in the React State.

Add interactive forms to take information from the user, update state, update UI:

- Log into the application (checking if a user exists and if their password matches their username)
- Deposit money into a specific account (adding to a user's balance)
- Withdrawing money from a specific account (subtracting from a user's balance)

1. Code Blocks

- State Variables: show, status, name, email, password, UserContext(Reference Video 18.4, step 2.)

  ```
      const [show, setShow]         = React.useState(true);
      const [status, setStatus]     = React.useState('');
      const [name, setName]         = React.useState('');
      const [email, setEmail]       = React.useState('');
      const [password, setPassword] = React.useState('');
      const ctx = React.useContext(UserContext);
  ```
      
- Show one form or another useing conditional logic. Is an additional user being created or is a user being added? 
    - Fields: styling, value, onChange event
    - Button: handle event
- Events: handleCreate, vlidate, clearform

2. Return JSX tags. Add logic for Card component and inside set the properties of the CreateAccount component that are passed into the Card. Then the body that will hold the forms.
- The status varies based on actions that are taken.
- The body is the conditional expression to show the correct form.
    - Create Account Form: The initial state of show is set to true. Use empty fragment to separate the forms. The onChange event is used to set the name, email, password. The button has an onClick event that triggers the handleCreate function.
    - Create Another Account Form labeled "Success". Click on add another user which will call the clearForm function.
```
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
```
    
3. handleCreate() function to pass the arguments for "field and label" to the validate() function. Then push the new user into the userContext wich has an initial value placed in index.js. setShow to false to hide the initial values.
```
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
```

4. clearForm() function to reset the states to initial conditions.

5. validate(field, label) function. Check for an empty field and set Timeout. If the field is empty, return false, otherwise return true.
```
    if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
```

6. Add forms to the rest of the components.

### Video 18.13 - Bad Bank Challenge

Look for opportunities to improve the design of your application based on the platform's capabilities. How can you simplify it to achieve a cleaner look?

Where is the work repeated? There is a lot of repeated work in forms. Create a form component that all the components can leverage. Use the component and only pass properties.

Instead of handling all the events, just handle some of them and pass them to the form component.

```
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
```

  





























