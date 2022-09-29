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
react_devtools_backend.js:4026 Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot
```

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
   ReactDom.render(
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

```(JSON.stringify(ctx.users))```

3. Add users to the shared context. Everytime the Products component is loaded, a user is added to the context. Push users into the variable that handles the shared context and creates a random string. Inside the div tag, return a string of the variable that handles the shared context. Reference the users. Everytime Products link is clicked, a new user is added to all the child components that reference the shared context. Add counters to see how many times each page is clicked on.

```ctx.users.push(Math.random().toString(36).substr(2, 5));```








