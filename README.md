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

Does the order of the script files referenced in the .html file matter? I get this error when the navbar.js is listed below the index.js. F*****g annoying, emphasis added because it keeps happening and need to remember this.

```Uncaught ReferenceError: NavBar is not defined```

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

1. Create the navbar fuctional component with return tags. Wrap the paths in fragment, which is an empty tag.

```
<>
</>
```

2. Enter the links. Why is this different than the links created in (Video 18-2, 1. Spa Component)?
```
    <a href="#">BadBank</a>,
    <a href="#/CreateAccount/">Create Account</a>,
    <a href="#/login/">Login</a>,
    <a href="#/deposit/">Deposit</a>,
    <a href="#/withdraw/">Withdraw</a>,
    <a href="#/balance/">Balance</a>,
    <a href="#/alldata/">AllData</a>
 ```
 
 3. Write the parent component(Spa) in index.js. We are going to write our .jsx. Why is the file still a .js file? Wrap the paths in fragment, which is an empty tag as done in step 1 above. Add a header so we can verify that the page loads. Add a the NavBar component in the same as was performed in (Video 18.4, step 2). Finally, render the Spa component to the DOM in the same way as was done in (Video 18.2, step 1).



















