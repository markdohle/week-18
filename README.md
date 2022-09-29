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

### Video 18-1

How do I provide a memory context for all of our screens? How do I set the context?

How do I style my application?

How do I create the Navigation Bar?

How do I handle routing?

How do I build create account?

What are my design priciples? Encapsulation and modularity

### Video 18-2: Routing Basics

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
  ```
  <HashRouter>
  <div>
    <h1>Routing - Hello World</h1>
    <Link to="/">Home             </Link> --
    <Link to="/about/">About      </Link> --
    <Link to="/products">Products </Link>
    <hr/>
    <Route path="/"           component={Home}    /> 
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

Why does the order of the script component files matter? If I change the order of the list I get an error.

```Uncaught ReferenceError: Home is not defined```

```
    <!-- Load react components -->
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



