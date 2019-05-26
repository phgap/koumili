import React, { Component } from 'react';
import { RouterView } from '../../routes';
import { Link } from 'react-router-dom';
// import Tabbar from '../../components/tabbar'
// import items from '../../components/tabbar/items';
import './index.scss';
import { Route } from "react-router-dom"

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="search">搜索框占位</div>
                <ul className="nav">
                    <li className="item">
                        <Route
                            path="/home/index"
                            children={({ match }) => (
                                <Link to="/home/index" className={`${match ? 'current' : ''}`}>
                                    首页
                                </Link>
                            )}
                        />
                    </li>
                    <li className="item">
                        <Route
                            path="/home/discount"
                            children={({ match }) => (
                                <Link to="/home/discount" className={`${match ? 'current' : ''}`}>
                                    限时优惠
                                </Link>
                            )}
                        />
                    </li>
                    <li className="item">
                        <Route
                            path="/home/woman"
                            children={({ match }) => (
                                <Link to="/home/woman" className={`${match ? 'current' : ''}`}>
                                    女装
                                </Link>
                            )}
                        />
                    </li>
                    <li className="item">
                        <Route
                            path="/home/man"
                            children={({ match }) => (
                                <Link to="/home/man" className={`${match ? 'current' : ''}`}>
                                    男装
                                </Link>
                            )}
                        />
                    </li>
                    <li className="item">
                        <Route
                            path="/home/child"
                            children={({ match }) => (
                                <Link to="/home/child" className={`${match ? 'current' : ''}`}>
                                    童装
                                </Link>
                            )}
                        />
                    </li>
                    <li className="item">
                        <Route
                            path="/home/baby"
                            children={({ match }) => (
                                <Link to="/home/baby" className={`${match ? 'current' : ''}`}>
                                    婴幼装
                                </Link>
                            )}
                        />
                    </li>
                </ul>
                <div className="list">
                    <RouterView routes={this.props.routes}></RouterView>
                </div>
                {/* <Tabbar
                    items={items}>
                </Tabbar> */}
            </div>
        )
    }
}

export default Home