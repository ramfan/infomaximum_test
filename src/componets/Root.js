import React, {Component} from 'react';
import App from "./App";
import {Provider} from "react-redux";
import  ApolloClient from 'apollo-boost'
import {ApolloProvider, } from 'react-apollo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from '../store/store'
import AuthorizationComponent from "./Authorization/AuthorizationComponent";
import RegistryComponent from "./Registration/RegistryComponent";
import PersonalPage from "./Personal/PersonalPage";
import ProfileSettings from "./Personal/ProfileSettings";

const client = new ApolloClient({
    uri: 'https://fakerql.com/graphql',
    credentials: 'same-origin'

});
class Root extends Component {

    render() {
        return (
            <ApolloProvider client={client} >
                <Provider store = {store}>
                    <Router>
                        <div>
                            <Route exact path="/" component={App} />
                            <Switch>
                                <Route exact path="/auth/" component={AuthorizationComponent} />
                                <Route exact path="/registry/" component={RegistryComponent} />
                                <Route exact path="/user/:token/" component={PersonalPage} />
                                <Route exact path="/editProfile/" component={ProfileSettings} />
                            </Switch>
                        </div>

                    </Router>
                </Provider>
            </ApolloProvider>
        );
    }
}

export default Root;
