import React, { Component } from 'react';
import "./index.scss"
import { connect } from "react-redux"
import { setTabBarVisibility } from '../../redux/_actions';
class Cart extends Component {
    render() {
        let { dispatch } = this.props
        dispatch(setTabBarVisibility(true))
        return (
            <div className="cart">
                <h1>Cart</h1>
            </div>
        )
    }
}

export default connect()(Cart)