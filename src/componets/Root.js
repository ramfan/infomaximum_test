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
import {createRenderer} from "fela";
import { Provider as FellaProvider } from 'react-fela';
import {ThemeProvider} from 'react-fela'
import {theme} from "../theme";


const client = new ApolloClient({
    uri: 'https://fakerql.com/graphql',
    credentials: 'same-origin'

});
const renderer = createRenderer();
console.log(store);
class Root extends Component {

    render() {
        return (
            <ApolloProvider client={client} >
                <Provider store = {store}>
                    <FellaProvider renderer={renderer}>
                        <ThemeProvider theme={theme}>
                            <Router>
                                <div style={{width: '100%', height: '100%' }}>
                                    <Route exact path="/" component={App} />
                                    <Switch>
                                        <Route exact path="/auth/" component={AuthorizationComponent} />
                                        <Route exact path="/registry/" component={RegistryComponent} />
                                        <Route exact path="/user/:token/" component={PersonalPage} />
                                        <Route exact path="/editProfile/" component={ProfileSettings} />
                                    </Switch>
                                </div>

                            </Router>
                        </ThemeProvider>
                </FellaProvider>
                </Provider>
            </ApolloProvider>
        );
    }
}

export default Root;
