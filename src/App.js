import React, {Component} from "react";
import {Route, BrowserRouter, Redirect, Switch} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Dashboard from "./components/protected/Dashboard";
import {firebaseAuth} from "./config/constants";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            authed: false,
            loading: true,
        }

    }

    componentDidMount() {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authed: true,
                    loading: false,
                })
            } else {
                this.setState({
                    authed: false,
                    loading: false
                })
            }
        })
    }

    componentWillUnmount() {
        this.removeListener()
    }


    render() {
        return this.state.loading === true ?
            (  <div><img src={logo} className="App-logo" alt="logo"/> loading....</div>)
            :
            (
                <BrowserRouter>
                    <div>

                        <div className="container">
                            <div className="row">
                                <Switch>
                                    <Route path='/' exact component={Home}/>
                                    <PublicRoute authed={this.state.authed} path='/login' component={Login}/>
                                    <PublicRoute authed={this.state.authed} path='/register' component={Register}/>
                                    <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard}/>
                                    <Route component={NoMatch}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            );
    }
}

export default App;


function PrivateRoute({component: Component, authed, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>}
        />
    )
}

function PublicRoute({component: Component, authed, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => authed === false
                ? <Component {...props} />
                : <Redirect to='/dashboard'/>}
        />
    )
}