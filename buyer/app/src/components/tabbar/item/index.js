import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import "./index.scss"

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            className: props.icon
        }
    }
    render() {
        let {
            text,
            icon,
            to
        } = this.props;

        return (
            <div className="tab-bar-item">
                <Route
                    path={to}
                    children={({ match }) => (
                        <Link to={to}>
                            <p className={`iconfont ${icon}${match ? '-focus' : ''}`}></p>
                            <span>{text}</span>
                        </Link>
                    )}
                />

            </div>
        )
    }
}

export default Item;