//Context is a way to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

/*
HashRouter
A legacy browser router that uses same-page linking via a URL’s hash
A type of router that uses the hash portion of the URL to keep your UI in sync with the URL

*/

const Route         = ReactRouterDOM.Route;
const Link          = ReactRouterDOM.Link;
const HashRouter    = ReactRouterDOM.HashRouter;
const UserContext   = React.createContext(null);

function Card(props) {
    function classes() {
        const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        return 'card mb-3 ' + bg + txt;
    };
    return(
        <div
        className={classes()}
        style={{maxWidth: "18rem"}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>
        </div>
    );
};