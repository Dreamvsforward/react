import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Home from './containers/Home'
import My from './containers/My'
import Login from './containers/Login'
import Shopping from './containers/Shopping'

export default class RouterMap extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login} />

                        <Route path="/" render={() =>
                            <div>
                                <header>公共头部</header>

                                <Switch>
                                    <Route path="/" component={Home} />
                                    <Route path="/my" component={My} />
                                    <Route path="/shopping" component={Shopping} />
                                </Switch>

                                <footer>公共底部</footer>
                            </div>
                        }>
                        </Route>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}