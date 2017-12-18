import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is info: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info.</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props} /> : <p>Please log in to see the info</p>}
        </div>
    )
};

const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={false} info="Here are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info="Here are the details" />, document.getElementById('app'));