import React from 'react'
import routes, { RouterView } from './routes'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import "./app.scss"

const store = configureStore()

import Tabbar from './components/tabbar'
import items from './components/tabbar/items';
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="app">
                        <RouterView routes={routes} />
                        <Tabbar items={items}>
                        </Tabbar>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App