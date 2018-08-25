import React, {Component} from 'react';
import PropTypes from 'prop-types';
import App from "./App";
import {Provider} from "react-redux";
import  ApolloClient from 'apollo-boost'
import {ApolloProvider, } from 'react-apollo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from '../store/store'
import Main from "./main/Main";

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
                                {/*<Route exact path="/user/registration/" component={CreateView} />*/}
                                <Route exact path="/user/:id/" component={Main} />
                            </Switch>
                        </div>

                    </Router>
                </Provider>
            </ApolloProvider>
        );
    }
}

export default Root;
