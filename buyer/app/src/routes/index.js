import * as pages from '../pages'
import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import * as api from '../api'
const axios = require('axios')

const routes = [
    {
        path: "/",
        redirect: '/home',
        exact: true
    }, {
        path: "/home",
        component: pages.Home,
        // isPrivate: true,
        routes: [{
            path: "/home/index",
            component: pages.HomeIndex,
            routes: []
        }, {
            path: "/home/discount",
            component: pages.HomeDiscount,
            routes: []
        }, {
            path: "/home/woman",
            component: pages.HomeWoman,
            routes: []
        }, {
            path: "/home/man",
            component: pages.HomeMan,
            routes: []
        }, {
            path: "/home/child",
            component: pages.HomeChild,
            routes: []
        }, {
            path: "/home/baby",
            component: pages.HomeBaby,
            routes: []
        }, {
            // component: pages.HomeIndex,
            path: '/home',
            redirect: '/home/index',
        }]
    }, {
        path: "/cate",
        component: pages.Category,
        // routes: []
    }, {
        path: "/my",
        component: pages.My,
        // routes: []
    }, {
        path: "/dress-collocation",
        component: pages.Collocation,
        // routes: []
    }, {
        path: "/detail",
        component: pages.Detail,
        // routes: []
    }, {
        path: "/cart",
        component: pages.Cart,
        isPrivate: true
        // routes: []
    }, {
        path: "/login",
        component: pages.Login,
        // routes: []
    }, {
        path: "/login",
        component: pages.Login,
        // routes: []
    }, {
        path: "/detail",
        component: pages.Detail,
    }
];

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            isAuthenticated: false
        }
    }

    componentDidMount() {
        let { token } = this.props
        axios.post(api.API_AUTH, {
            authenticate: token
        })
            .then(resp => {
                if (resp.data.isAuthenticated) {
                    this.setState({
                        isLoading: false,
                        isAuthenticated: true
                    })
                } else {
                    this.setState({
                        isLoading: false,
                        isAuthenticated: false
                    })
                }
            })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>LOADING</div>
            )
        }
        let { Component, ...rest } = this.props

        return (
            <Route
                render={props =>
                    this.state.isAuthenticated ? (
                        <Component routes={routes} {...props} {...rest} />
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: props.location }
                                }}
                            />
                        )
                }
            />
        );
    }
}

export function RouteWithSub(route) {
    return route.redirect ?
        (<Redirect from={route.path} to={route.redirect} />) :
        (<Route
            path={route.path}
            render={props => (
                (<route.component {...props} {...route} />)
            )}
        />)
}

function mapStateToProps(state) {

    const { users } = state
    const token = users.token || ""

    return { token };
}

PrivateRoute = connect(mapStateToProps)(PrivateRoute)

export function RouterView(props) {
    let { routes } = props
    return !routes ?
        null :
        (
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSub key={i} {...route} />
                ))}
            </Switch>
        )
}

export default routes
